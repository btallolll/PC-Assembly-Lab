const steps = [
  { id: 'cpu', label: 'المعالج', image: 'cpu.png', target: 'cpu', hint: 'طابق علامة المثلث مع زاوية المقبس، ثم المس مقبس CPU.', done: 'تم تركيب المعالج.' },
  { id: 'paste', label: 'المعجون الحراري', image: 'thermalGlue.png', target: 'cpu', hint: 'ضع كمية صغيرة في منتصف سطح المعالج بلمس مقبس CPU.', done: 'تم وضع المعجون الحراري.' },
  { id: 'fan', label: 'المشتت والمروحة', image: 'heatsink.png', target: 'cpu', hint: 'ضع المشتت فوق المعالج بلمس مقبس CPU.', done: 'تم تركيب المشتت.' },
  { id: 'ram1', label: 'الذاكرة الأولى', image: 'ram.png', target: 'ram1', hint: 'طابق الشق ثم المس منفذ RAM 1.', done: 'تم تركيب الذاكرة الأولى.' },
  { id: 'ram2', label: 'الذاكرة الثانية', image: 'ram.png', target: 'ram2', hint: 'طابق الشق ثم المس منفذ RAM 2.', done: 'اكتمل تركيب القطع في اللوحة الأم!' }
];
const storageKey = 'motherboard-lab-progress-v1';
let completed = 0;
let selected = null;
try { const value = Number(localStorage.getItem(storageKey)); if (Number.isInteger(value) && value >= 0 && value <= steps.length) completed = value; } catch (_) {}
const parts = document.getElementById('parts');
const feedback = document.getElementById('feedback');

function render(message) {
  const step = steps[completed];
  document.getElementById('progress').textContent = `${completed} / ${steps.length}`;
  document.getElementById('step-title').textContent = step ? `الخطوة ${completed + 1}: ${step.label}` : 'اكتمل التجميع';
  document.getElementById('step-help').textContent = step ? step.hint : 'ركّبت المعالج والذاكرة والتبريد. يمكنك البدء من جديد للتدريب.';
  parts.innerHTML = steps.map((part, index) => `<button type="button" class="part ${selected === part.id ? 'selected' : ''}" data-part="${part.id}" ${index !== completed ? 'disabled' : ''}><img src="PC/media/thumbs/${part.image}" alt="" loading="lazy"><span>${part.label}<small>${index < completed ? 'تم التركيب ✓' : index === completed ? 'اختر القطعة' : 'لاحقًا'}</small></span></button>`).join('');
  document.querySelectorAll('.target').forEach(target => target.classList.toggle('active', !!step && selected === step.id && target.dataset.target === step.target));
  const socket = document.querySelector('.socket');
  socket.classList.toggle('cpu-installed', completed >= 1);
  socket.classList.toggle('paste-installed', completed >= 2);
  socket.classList.toggle('fan-installed', completed >= 3);
  document.querySelector('[data-target="ram1"]').classList.toggle('installed', completed >= 4);
  document.querySelector('[data-target="ram2"]').classList.toggle('installed', completed >= 5);
  feedback.textContent = message || (step ? 'اختر القطعة المطلوبة للمتابعة.' : 'اكتملت المرحلة التجريبية.');
  feedback.classList.toggle('complete', completed === steps.length);
}

parts.addEventListener('click', event => {
  const button = event.target.closest('[data-part]');
  if (!button || button.disabled || !steps[completed]) return;
  selected = button.dataset.part;
  render('الآن المس المكان المضيء على اللوحة.');
});
document.querySelectorAll('.target').forEach(target => target.addEventListener('click', () => {
  const step = steps[completed];
  if (!step) return;
  if (!selected) { render('اختر القطعة المطلوبة أولًا.'); return; }
  if (target.dataset.target !== step.target) { render('هذا ليس مكان القطعة. المس المكان المضيء.'); return; }
  completed++;
  selected = null;
  try { localStorage.setItem(storageKey, String(completed)); } catch (_) { render('تم التركيب، لكن تعذر حفظ التقدم على هذا المتصفح.'); return; }
  render(step.done);
}));
document.getElementById('reset').addEventListener('click', () => {
  if (completed && !confirm('هل تريد مسح تقدم هذه المرحلة والبدء من جديد؟')) return;
  completed = 0;
  selected = null;
  try { localStorage.removeItem(storageKey); } catch (_) {}
  render('اختر المعالج للبدء.');
});
render();
