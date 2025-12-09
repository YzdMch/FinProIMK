// DASHBOARD PAGE WITH CHART
window.dashboardPage = `
<div class="space-y-6">

  <!-- HEADER -->
  <header class="flex items-center justify-between">
    <h1 class="text-3xl font-bold">Dashboard</h1>
    <div class="flex items-center gap-3">
      <input placeholder="Search..." class="px-3 py-2 rounded border" />
      <button class="px-3 py-2 rounded bg-brand text-white">Notifications</button>
    </div>
  </header>

  <!-- STAT CARDS -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="p-4 bg-white rounded-xl shadow-sm">
      <div class="text-sm text-gray-500">Total Tickets</div>
      <div class="text-2xl font-bold mt-1">1,280</div>
    </div>

    <div class="p-4 bg-white rounded-xl shadow-sm">
      <div class="text-sm text-gray-500">Revenue</div>
      <div class="text-2xl font-bold mt-1">Rp 89.2M</div>
    </div>

    <div class="p-4 bg-white rounded-xl shadow-sm">
      <div class="text-sm text-gray-500">Visitors</div>
      <div class="text-2xl font-bold mt-1">3,450</div>
    </div>
  </div>

  <!-- CHART AREA -->
  <div class="p-6 bg-white rounded-xl shadow-sm">
    <h2 class="text-lg font-semibold mb-3">Revenue (30 Hari)</h2>
    <canvas id="revenueChart" height="120"></canvas>
  </div>

</div>
`;

// CHART INITIALIZATION
setTimeout(() => {
  const ctx = document.getElementById("revenueChart");
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "5", "10", "15", "20", "25", "30"],
        datasets: [
          {
            label: "Pendapatan",
            data: [4, 12, 9, 15, 20, 18, 25],
            borderWidth: 3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true },
        }
      }
    });
  }
}, 300);
