import struct, zlib, re

with open('PC/models/Motherboard.swf', 'rb') as f:
    data = f.read()

sig = data[:3]
body = zlib.decompress(data[8:]) if sig == b'CWS' else data[8:]

pos = 0
nbits = body[pos] >> 3
nbits_total = 5 + nbits * 4
pos += ((nbits_total + 7) // 8) + 4

frame_idx = 0
while pos < len(body):
    tag_header = struct.unpack('<H', body[pos:pos+2])[0]
    pos += 2
    tag_type = tag_header >> 6
    tag_len = tag_header & 0x3f
    if tag_len == 0x3f:
        tag_len = struct.unpack('<I', body[pos:pos+4])[0]
        pos += 4
    
    if tag_type == 1:
        frame_idx += 1
    tag_body = body[pos:pos+tag_len]
    if tag_type in (12, 59) and frame_idx >= 50:
        tokens = re.findall(rb'[\x20-\x7e]{3,}', tag_body)
        print(f'Frame {frame_idx}:', [t.decode('latin1') for t in tokens])
    pos += tag_len
