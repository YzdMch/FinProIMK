// app.js — simple SPA router + sidebar collapse + tooltip
(function(){
// pages are defined in other files as <page>Page strings
const main = document.getElementById('main-container');
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const collapseBtn = document.getElementById('collapse-btn');


function setActive(page){
navItems.forEach(a=> a.classList.toggle('active', a.dataset.page===page));
// try to load template from window
const varName = page + 'Page';
if(window[varName]) main.innerHTML = window[varName];
else main.innerHTML = `<div class="p-6 bg-white rounded-lg border"> <h2 class="text-xl font-semibold">${page}</h2><p class="text-sm text-gray-600">Halaman belum dibuat.</p></div>`;
// save last
try{ localStorage.setItem('lastPage', page); }catch(e){}
}


// click nav
navItems.forEach(a=>{
a.addEventListener('click', ()=> setActive(a.dataset.page));
// tooltip is native via title attribute
});


// initial load
const last = localStorage.getItem('lastPage') || 'dashboard';
setActive(last);


// collapse toggle
collapseBtn.addEventListener('click', ()=>{
document.body.classList.toggle('sidebar-collapsed');
});


// mobile toggle (tap logo area) — optional
document.querySelector('.w-10')?.addEventListener('click', ()=>{
document.body.classList.toggle('sidebar-open');
});


// keyboard shortcut: press "b" to toggle sidebar
window.addEventListener('keydown', (e)=>{
if(e.key.toLowerCase()==='b' && (e.ctrlKey||e.metaKey)===false) {
document.body.classList.toggle('sidebar-collapsed');
}
});
})();