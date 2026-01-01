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

Buka terminal (Command Prompt / Git Bash), lalu ketik perintah berikut satu per satu:

```bash
cd Documents
```
Perintah ini untuk masuk ke folder Documents.

```bash
git clone https://github.com/theniswara/psdku-website.git
```
Perintah ini untuk mendownload project dari GitHub ke komputermu.

```bash
cd psdku-website/angular-frontend
```
Perintah ini untuk masuk ke folder project Angular.

```bash
npm install
```
Perintah ini untuk menginstall semua package yang dibutuhkan. Tunggu sampai selesai.

---

# LANGKAH 2: Buat Branch Baru

Branch adalah cabang kerja. Setiap orang bekerja di branch masing-masing supaya tidak bentrok.

- Elsa: `git checkout -b fitur/kurikulum`
- Awaliya: `git checkout -b fitur/pmb`
- Qois: `git checkout -b fitur/mahasiswa`

---

# LANGKAH 3: Buat Halaman Baru

Gunakan perintah Angular CLI untuk membuat halaman baru secara otomatis:

- Elsa: `ng generate component pages/kurikulum --standalone`
- Awaliya: `ng generate component pages/pmb --standalone`
- Qois: `ng generate component pages/mahasiswa-aktif --standalone`

Perintah ini akan membuat folder baru dengan 4 file di dalamnya:
- `.component.ts` - file untuk kode program
- `.component.html` - file untuk tampilan
- `.component.css` - file untuk styling
- `.component.spec.ts` - file untuk testing (bisa diabaikan)

---

# LANGKAH 4: Edit File TypeScript

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

# LANGKAH 5: Edit File HTML

Buka file `.html` yang baru dibuat.

- Elsa buka: `src/app/pages/kurikulum/kurikulum.component.html`
- Awaliya buka: `src/app/pages/pmb/pmb.component.html`
- Qois buka: `src/app/pages/mahasiswa-aktif/mahasiswa-aktif.component.html`

Struktur dasar halaman:

```html
<app-navbar></app-navbar>

<section class="bg-[#051D47] pt-24 pb-32 px-4">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-bold text-white">
      Judul Halaman
    </h1>
  </div>
</section>

<section class="py-16 px-4 bg-[#F8FAFC]">
  <div class="max-w-7xl mx-auto">
    <!-- Isi konten halaman di sini -->
  </div>
</section>

<app-footer></app-footer>
```

Lihat contoh halaman yang sudah jadi di folder:
- `src/app/pages/tentang-kami/`
- `src/app/pages/visi-misi/`

---

# LANGKAH 6: Daftarkan Route

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

# LANGKAH 7: Test di Browser

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

# LANGKAH 8: Upload ke GitHub

Setelah selesai mengerjakan, upload pekerjaanmu ke GitHub.

Langkah 8.1 - Simpan perubahan:
```bash
git add .
```

Langkah 8.2 - Buat commit (pesan perubahan):
- Elsa: `git commit -m "Tambah halaman kurikulum"`
- Awaliya: `git commit -m "Tambah halaman pmb"`
- Qois: `git commit -m "Tambah halaman mahasiswa aktif"`

Langkah 8.3 - Upload ke GitHub:
- Elsa: `git push origin fitur/kurikulum`
- Awaliya: `git push origin fitur/pmb`
- Qois: `git push origin fitur/mahasiswa`

---

# LANGKAH 9: Buat Pull Request

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