// destinasi template
window.destinasiPage = `
<div>
<div class="flex items-center justify-between mb-4">
<h2 class="text-2xl font-bold">Manajemen Destinasi</h2>
<button class="px-3 py-2 rounded bg-brand text-white">Tambah Destinasi</button>
</div>


<div class="bg-white rounded shadow p-4 mb-4">
<form class="grid grid-cols-1 md:grid-cols-2 gap-3">
<input class="p-2 border rounded" placeholder="Nama Destinasi" />
<select class="p-2 border rounded">
<option>-- Kategori --</option>
<option selected>Taman Kota</option>
</select>
<input class="p-2 border rounded" placeholder="Lokasi" />
<textarea class="p-2 border rounded" placeholder="Deskripsi"></textarea>
<div class="md:col-span-2 text-right">
<button class="px-3 py-2 rounded border mr-2">Batal</button>
<button class="px-3 py-2 rounded bg-brand text-white">Simpan</button>
</div>
</form>
</div>


<div class="bg-white rounded shadow overflow-x-auto">
<table class="w-full">
<thead class="bg-gray-50">
<tr><th class="p-3 text-left text-xs">Gambar</th><th class="p-3 text-left text-xs">Nama</th><th class="p-3 text-left text-xs">Kategori</th><th class="p-3 text-left text-xs">Aksi</th></tr>
</thead>
<tbody>
<tr class="border-t"><td class="p-3">[img]</td><td class="p-3">Taman Bungkul</td><td class="p-3">Taman Kota</td><td class="p-3">edit | hapus</td></tr>
</tbody>
</table>
</div>
</div>
`;