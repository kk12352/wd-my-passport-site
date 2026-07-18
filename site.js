const saved = localStorage.getItem('wdmp-lang');
let current = saved || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');
function setLang(lang){
  current=lang; document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.textContent=el.dataset[lang]);
  const toggle=document.querySelector('.lang'); if(toggle) toggle.dataset.lang=lang;
  localStorage.setItem('wdmp-lang',lang);
  document.title=(lang==='zh'?'WD-My passport｜让世界听懂你':'WD-My passport | Go further. Feel closer.');
}
setLang(current);
document.querySelector('.lang')?.addEventListener('click',()=>setLang(current==='zh'?'en':'zh'));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('nav')?.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav')?.classList.remove('open')));
