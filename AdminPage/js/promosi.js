// promosi template
window.promosiPage = `
<div>
<div class="flex items-center justify-between mb-4">
<h2 class="text-2xl font-bold">Manajemen Promosi</h2>
<button class="px-3 py-2 rounded bg-brand text-white">Buat Promosi</button>
</div>


<div class="bg-white rounded shadow p-4 mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
<input class="p-2 border rounded md:col-span-2" placeholder="Nama Promosi" />
<input class="p-2 border rounded" placeholder="Kode Promo" />
<input type="date" class="p-2 border rounded" />
<input type="date" class="p-2 border rounded" />
<select class="p-2 border rounded">
<option>Persentase</option>
<option>Potongan Tetap</option>
</select>
<input class="p-2 border rounded" placeholder="Nilai" />
<div class="md:col-span-3 text-right">
<button class="px-3 py-2 rounded border mr-2">Batal</button>
<button class="px-3 py-2 rounded bg-brand text-white">Simpan</button>
</div>
</div>


<div class="bg-white rounded shadow overflow-x-auto">
<table class="w-full">
<thead class="bg-gray-50"><tr><th class="p-3 text-left text-xs">Nama</th><th class="p-3 text-left text-xs">Kode</th><th class="p-3 text-left text-xs">Tanggal</th><th class="p-3 text-left text-xs">Aksi</th></tr></thead>
<tbody><tr class="border-t"><td class="p-3">Diskon Akhir Pekan</td><td class="p-3">WEEKEND20</td><td class="p-3">01-07-2025</td><td class="p-3">edit | nonaktif</td></tr></tbody>
</table>
</div>
</div>
`;