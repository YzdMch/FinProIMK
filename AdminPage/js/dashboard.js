// simple dashboard template
window.dashboardPage = `
<div class="space-y-6">
<header class="flex items-center justify-between">
<h1 class="text-3xl font-bold">Dashboard</h1>
<div class="flex items-center gap-3">
<input placeholder="Search..." class="px-3 py-2 rounded border" />
<button class="px-3 py-2 rounded bg-brand text-white">Notifications</button>
</div>
</header>


<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div class="p-4 bg-white rounded shadow"> <div class="text-sm text-gray-500">Total Tickets</div> <div class="text-2xl font-bold">1,280</div> </div>
<div class="p-4 bg-white rounded shadow"> <div class="text-sm text-gray-500">Revenue</div> <div class="text-2xl font-bold">Rp 89.2M</div> </div>
<div class="p-4 bg-white rounded shadow"> <div class="text-sm text-gray-500">Visitors</div> <div class="text-2xl font-bold">3,450</div> </div>
</div>


<div class="p-4 bg-white rounded shadow"> <h2 class="font-semibold">Revenue (30d)</h2> <p class="text-sm text-gray-500">Grafik placeholder</p></div>
</div>
`;