// simple manage ticket template
window.pemesananPage = `
<div>
<div class="flex items-center justify-between mb-4">
<div>
<h2 class="text-2xl font-bold">Manage Ticket</h2>
<p class="text-sm text-gray-500">Kelola pemesanan</p>
</div>
<button class="px-3 py-2 rounded bg-brand text-white">Tambah Pesanan</button>
</div>


<div class="bg-white rounded shadow overflow-x-auto">
<table class="w-full table-auto">
<thead class="bg-gray-50">
<tr>
<th class="p-3 text-left text-xs">ID</th>
<th class="p-3 text-left text-xs">Nama</th>
<th class="p-3 text-left text-xs">Tanggal</th>
<th class="p-3 text-left text-xs">Tiket</th>
<th class="p-3 text-left text-xs">Total</th>
<th class="p-3 text-left text-xs">Status</th>
<th class="p-3 text-left text-xs">Aksi</th>
</tr>
</thead>
<tbody>
<tr class="border-t">
<td class="p-3">#TWS1001</td>
<td class="p-3">Budi</td>
<td class="p-3">12 Nov 2023</td>
<td class="p-3">2</td>
<td class="p-3">Rp 300.000</td>
<td class="p-3"><span class="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Terbayar</span></td>
<td class="p-3"><button class="text-sm">lihat</button> <button class="text-sm">edit</button></td>
</tr>
</tbody>
</table>
</div>
</div>
`;