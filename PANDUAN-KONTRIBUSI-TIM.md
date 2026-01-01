# Panduan Kontribusi Tim
## PSDKU Website Project

---

## Pembagian Tugas

| Nama | Halaman | Route |
|------|---------|-------|
| Elsa | Kurikulum | /kurikulum |
| Awaliya | Penerimaan Mahasiswa Baru | /pmb |
| Qois | Mahasiswa Aktif | /mahasiswa |

---

# LANGKAH 1: Download Project dari GitHub

Jalankan di: **Terminal biasa** (Command Prompt / Git Bash / Terminal)

Buka terminal di komputermu, lalu ketik perintah berikut satu per satu:

```bash
cd Documents
```
Perintah ini untuk masuk ke folder Documents.

```bash
git clone https://github.com/theniswara/psdku-website.git
```
Perintah ini untuk mendownload project dari GitHub ke komputermu.

---

# LANGKAH 2: Buka Project di VS Code

Buka VS Code, lalu:
1. Klik menu **File** > **Open Folder**
2. Pilih folder `Documents/psdku-website`
3. Klik **Select Folder**

Sekarang project sudah terbuka di VS Code.

---

# LANGKAH 3: Install Dependencies

Jalankan di: **Terminal VS Code**

Cara buka terminal di VS Code:
- Tekan `Ctrl + `` (tombol di bawah ESC)
- Atau klik menu **Terminal** > **New Terminal**

Pastikan terminal menunjukkan folder `angular-frontend`. Jika belum, ketik:
```bash
cd angular-frontend
```

Lalu jalankan:
```bash
npm install
```
Tunggu sampai selesai (bisa beberapa menit).

---

# LANGKAH 4: Jalankan Project (Lihat Website)

Jalankan di: **Terminal VS Code** (terminal yang sama)

```bash
ng serve
```

Tunggu sampai muncul tulisan seperti ini:
```
Application bundle generation complete.
Watch mode enabled. Watching for file changes...
```

Buka browser (Chrome/Firefox) dan ketik alamat berikut:
```
http://localhost:4200
```

Sekarang kamu bisa melihat website yang sudah ada. Coba klik menu-menu yang ada untuk melihat halaman yang sudah jadi.

Halaman yang sudah jadi:
- Beranda (halaman utama)
- Tentang Kami
- Visi Misi
- Sarana Prasarana
- Struktur Organisasi
- Data Dosen

Halaman yang belum jadi (tugasmu):
- Kurikulum (Elsa)
- PMB (Awaliya)
- Mahasiswa Aktif (Qois)

---

# LANGKAH 5: Buat Branch Baru

Jalankan di: **Terminal VS Code** (buka terminal baru)

Cara buka terminal baru: klik tanda **+** di samping terminal yang sedang berjalan.

Pastikan terminal baru menunjukkan folder `angular-frontend`. Jika belum, ketik:
```bash
cd angular-frontend
```

Lalu jalankan sesuai namamu:
- Elsa: `git checkout -b fitur/kurikulum`
- Awaliya: `git checkout -b fitur/pmb`
- Qois: `git checkout -b fitur/mahasiswa`

---

# LANGKAH 6: Buat Halaman Baru

Jalankan di: **Terminal VS Code** (terminal yang sama dengan langkah 5)

Ketik perintah sesuai namamu:
- Elsa: `ng generate component pages/kurikulum --standalone`
- Awaliya: `ng generate component pages/pmb --standalone`
- Qois: `ng generate component pages/mahasiswa-aktif --standalone`

Perintah ini akan membuat folder baru dengan 4 file di dalamnya:
- `.component.ts` - file untuk kode program
- `.component.html` - file untuk tampilan
- `.component.css` - file untuk styling
- `.component.spec.ts` - file untuk testing (bisa diabaikan)

---

# LANGKAH 7: Edit File TypeScript

Buka file `.ts` yang baru dibuat.

- Elsa buka: `src/app/pages/kurikulum/kurikulum.component.ts`
- Awaliya buka: `src/app/pages/pmb/pmb.component.ts`
- Qois buka: `src/app/pages/mahasiswa-aktif/mahasiswa-aktif.component.ts`

Ubah isi file menjadi seperti ini (contoh untuk Elsa):

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-kurikulum',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './kurikulum.component.html',
  styleUrls: ['./kurikulum.component.css']
})
export class KurikulumComponent {
  // Tambahkan data halaman di sini
}
```

Awaliya dan Qois: ganti semua kata `kurikulum` dan `Kurikulum` dengan nama halaman masing-masing.

---

# LANGKAH 8: Edit File HTML (Desain Tampilan)

Ini adalah tugas utama kamu. Kamu harus mendesain tampilan halaman sesuai dengan tema halaman yang kamu kerjakan.

Buka file `.html` yang baru dibuat.

- Elsa buka: `src/app/pages/kurikulum/kurikulum.component.html`
- Awaliya buka: `src/app/pages/pmb/pmb.component.html`
- Qois buka: `src/app/pages/mahasiswa-aktif/mahasiswa-aktif.component.html`

Struktur dasar yang harus diikuti:

```html
<app-navbar></app-navbar>

<!-- Hero Section (bagian atas dengan judul) -->
<section class="bg-[#051D47] pt-24 pb-32 px-4">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-white">
      Judul Halaman Kamu
    </h1>
  </div>
</section>

<!-- Content Section (isi konten halaman) -->
<section class="py-16 px-4 bg-[#F8FAFC]">
  <div class="max-w-7xl mx-auto">
    
    <!-- DESAIN KONTEN HALAMAN DI SINI -->
    <!-- Tambahkan card, tabel, list, gambar, dll sesuai kebutuhan -->
    
  </div>
</section>

<app-footer></app-footer>
```

Yang perlu kamu kerjakan:
1. Ganti "Judul Halaman Kamu" dengan judul yang sesuai
2. Desain bagian konten sesuai tema halaman masing-masing
3. Gunakan HTML dan CSS untuk membuat tampilan yang menarik

Contoh isi konten untuk referensi:
- Elsa (Kurikulum): buat tabel mata kuliah per semester
- Awaliya (PMB): buat card jalur pendaftaran dan persyaratan
- Qois (Mahasiswa Aktif): buat statistik dan daftar angkatan

Lihat contoh halaman yang sudah jadi untuk referensi:
- `src/app/pages/tentang-kami/tentang-kami.component.html`
- `src/app/pages/visi-misi/visi-misi.component.html`
- `src/app/pages/sarana-prasarana/sarana-prasarana.component.html`

Pelajari bagaimana halaman-halaman tersebut dibuat, lalu buat versimu sendiri.

---

# LANGKAH 9: Daftarkan Route

Buka file `src/app/app.routes.ts`

Tambahkan kode berikut di dalam array routes (sebelum baris terakhir):

Elsa tambahkan:
```typescript
{
  path: 'kurikulum',
  loadComponent: () => import('./pages/kurikulum/kurikulum.component')
    .then(m => m.KurikulumComponent)
},
```

Awaliya tambahkan:
```typescript
{
  path: 'pmb',
  loadComponent: () => import('./pages/pmb/pmb.component')
    .then(m => m.PmbComponent)
},
```

Qois tambahkan:
```typescript
{
  path: 'mahasiswa',
  loadComponent: () => import('./pages/mahasiswa-aktif/mahasiswa-aktif.component')
    .then(m => m.MahasiswaAktifComponent)
},
```

---

# LANGKAH 10: Test di Browser

Jalankan server:

```bash
ng serve
```

Buka browser dan akses:
- Elsa: http://localhost:4200/kurikulum
- Awaliya: http://localhost:4200/pmb
- Qois: http://localhost:4200/mahasiswa

Jika halaman muncul tanpa error, berarti sudah berhasil.

---

# LANGKAH 11: Upload ke GitHub

Jalankan di: **Terminal VS Code** (terminal yang sama dengan langkah 5)

Setelah selesai mengerjakan, upload pekerjaanmu ke GitHub.

Langkah 11.1 - Simpan perubahan:
```bash
git add .
```

Langkah 11.2 - Buat commit (pesan perubahan):
- Elsa: `git commit -m "Tambah halaman kurikulum"`
- Awaliya: `git commit -m "Tambah halaman pmb"`
- Qois: `git commit -m "Tambah halaman mahasiswa aktif"`

Langkah 11.3 - Upload ke GitHub:
- Elsa: `git push origin fitur/kurikulum`
- Awaliya: `git push origin fitur/pmb`
- Qois: `git push origin fitur/mahasiswa`

---

# LANGKAH 12: Buat Pull Request

Pull Request adalah permintaan untuk menggabungkan pekerjaanmu ke project utama.

1. Buka GitHub di browser
2. Buka repository project
3. Akan muncul tombol kuning "Compare & pull request" - klik tombol itu
4. Tulis judul: "Tambah halaman [nama halaman]"
5. Klik tombol hijau "Create pull request"
6. Selesai, tunggu review dari ketua tim

---

# Warna yang Digunakan

| Warna | Kode | Kegunaan |
|-------|------|----------|
| Biru tua | #051D47 | Hero section, header |
| Oranye | #FF7F11 | Aksen, tombol, highlight |
| Abu-abu | #F8FAFC | Background section |
| Putih | #FFFFFF | Background card |

---

# Jika Ada Error

1. Cek nama file dan nama class apakah sudah sama
2. Cek apakah import NavbarComponent dan FooterComponent sudah benar
3. Cek route di app.routes.ts apakah path dan nama component sudah benar

---