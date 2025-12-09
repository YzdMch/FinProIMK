// app.js — simple SPA router + sidebar collapse + tooltip
(function(){
  const main = document.getElementById('main-container');
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  const collapseBtn = document.getElementById('collapse-btn');

  function setActive(page){
    navItems.forEach(a=> a.classList.toggle('active', a.dataset.page===page));

    const varName = page + 'Page';
    if(window[varName]) main.innerHTML = window[varName];
    else main.innerHTML = `<div class="p-6 bg-white rounded-lg border">
      <h2 class="text-xl font-semibold">${page}</h2>
      <p class="text-sm text-gray-600">Halaman belum dibuat.</p>
    </div>`;

    // render chart only for dashboard
    if(page === "dashboard") renderDashboardChart();

    try{ localStorage.setItem('lastPage', page); }catch(e){}
  }

  // event click navigation
  navItems.forEach(a=>{
    a.addEventListener('click', ()=> setActive(a.dataset.page));
  });

  // initial load & render chart if dashboard
  const last = localStorage.getItem('lastPage') || 'dashboard';
  setActive(last);

  // collapse
  collapseBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('sidebar-collapsed');
  });

})();
  

// === CHART FUNCTION ===
function renderDashboardChart() {
  const ctx = document.getElementById("revenueChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "5", "10", "15", "20", "25", "30"],
      datasets: [{
        label: "Pendapatan",
        data: [4, 12, 9, 15, 20, 18, 25],
        borderColor: "#10b981",
        borderWidth: 3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}
