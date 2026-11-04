import sys, struct, zlib, collections, hashlib, io
from PIL import Image

def read(path):
    raw = open(path, 'rb').read()
    data = zlib.decompress(raw[8:]) if raw[:3] == b'CWS' else raw[8:]
    bits = data[0] >> 3
    pos = (5 + bits * 4 + 7) // 8 + 4
    tags = []
    while pos + 2 <= len(data):
        code = struct.unpack_from('<H', data, pos)[0]; pos += 2
        kind, size = code >> 6, code & 63
        if size == 63:
            size = struct.unpack_from('<I', data, pos)[0]; pos += 4
        body = data[pos:pos+size]; pos += size
        tags.append((kind, body))
        if kind == 0: break
    return tags

for path in sys.argv[1:]:
    tags = read(path)
    counts = collections.Counter(k for k, _ in tags)
    sizes = collections.Counter()
    for k, body in tags: sizes[k] += len(body)
    print(path, 'tags', len(tags), 'types', sorted(counts.items()), 'largest types', sizes.most_common(8))
    print('actions', [(k,len(b),hashlib.sha256(b).hexdigest()[:12]) for k,b in tags if k in (12,59,82)][:15])
    pixels = 0
    dims = collections.Counter()
    for k, b in tags:
        if k == 35:
            try:
                length = struct.unpack_from('<I', b, 2)[0]
                im = Image.open(io.BytesIO(b[6:6+length]))
                dims[im.size] += 1
                pixels += im.width * im.height
            except Exception: pass
    print('jpeg pixel total', pixels, 'decoded RGBA MiB', round(pixels*4/1048576), 'dimensions', dims.most_common(8))
