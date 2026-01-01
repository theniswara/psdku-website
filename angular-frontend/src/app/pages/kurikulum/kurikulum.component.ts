import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-kurikulum',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './kurikulum.component.html',
  styleUrls: ['./kurikulum.component.css']
})
export class KurikulumComponent implements AfterViewInit {

  searchText: string = '';
  selectedProdi: string = '';
  totalSKS: number = 0;


  kurikulum = [
  {
    semester: 1,
    prodi: 'Teknologi Informasi',
    mataKuliah: [
      { nama: 'Algoritma dan Pemrograman', sks: 3 },
      { nama: 'Matematika Diskrit', sks: 2 },
      { nama: 'Pengantar Teknologi Informasi', sks: 2 }
    ]
  },
  {
    semester: 2,
    prodi: 'Teknologi Informasi',
    mataKuliah: [
      { nama: 'Struktur Data', sks: 3 },
      { nama: 'Basis Data', sks: 3 },
      { nama: 'Sistem Operasi', sks: 2 }
    ]
  },
  {
    semester: 3,
    prodi: 'Teknologi Informasi',
    mataKuliah: [
      { nama: 'Pemrograman Web', sks: 3 },
      { nama: 'Jaringan Komputer', sks: 3 },
      { nama: 'Rekayasa Perangkat Lunak', sks: 2 }
    ]
  },
  {
    semester: 4,
    prodi: 'Teknologi Informasi',
    mataKuliah: [
      { nama: 'Pemrograman Mobile', sks: 3 },
      { nama: 'Keamanan Sistem Informasi', sks: 2 },
      { nama: 'Interaksi Manusia dan Komputer', sks: 2 }
    ]
  },
  {
    semester: 5,
    prodi: 'Teknologi Informasi',
    mataKuliah: [
      { nama: 'Manajemen Proyek TI', sks: 2 },
      { nama: 'Data Mining', sks: 3 },
      { nama: 'Cloud Computing', sks: 2 }
    ]
  },
  {
    semester: 6,
    prodi: 'Teknologi Informasi',
    mataKuliah: [
      { nama: 'Kecerdasan Buatan', sks: 3 },
      { nama: 'Internet of Things', sks: 2 },
      { nama: 'Etika Profesi TI', sks: 2 }
    ]
  },

        // =========================
        // TEKNIK SIPIL
        // =========================
{
  semester: 1,
  prodi: 'Teknik Sipil',
  mataKuliah: [
    { nama: 'Matematika Teknik', sks: 3 },
    { nama: 'Gambar Teknik', sks: 2 },
    { nama: 'Fisika Teknik', sks: 3 }
  ]
},
{
  semester: 2,
  prodi: 'Teknik Sipil',
  mataKuliah: [
    { nama: 'Mekanika Teknik', sks: 3 },
    { nama: 'Ilmu Ukur Tanah', sks: 2 }
  ]
},
{
  semester: 3,
  prodi: 'Teknik Sipil',
  mataKuliah: [
    { nama: 'Struktur Beton', sks: 3 },
    { nama: 'Hidrolika', sks: 3 }
  ]
},
{
  semester: 4,
  prodi: 'Teknik Sipil',
  mataKuliah: [
    { nama: 'Struktur Baja', sks: 3 },
    { nama: 'Manajemen Konstruksi', sks: 2 }
  ]
},
{
  semester: 5,
  prodi: 'Teknik Sipil',
  mataKuliah: [
    { nama: 'Perencanaan Jalan Raya', sks: 3 },
    { nama: 'Drainase Perkotaan', sks: 2 }
  ]
},
{
  semester: 6,
  prodi: 'Teknik Sipil',
  mataKuliah: [
    { nama: 'Teknologi Konstruksi', sks: 3 },
    { nama: 'Keselamatan Konstruksi', sks: 2 }
  ]
},

        // =========================
        // AKUNTANSI
        // =========================
{
  semester: 1,
  prodi: 'Akuntansi',
  mataKuliah: [
    { nama: 'Pengantar Akuntansi', sks: 3 },
    { nama: 'Matematika Bisnis', sks: 2 }
  ]
},
{
  semester: 2,
  prodi: 'Akuntansi',
  mataKuliah: [
    { nama: 'Akuntansi Keuangan', sks: 3 },
    { nama: 'Perpajakan Dasar', sks: 2 }
  ]
},
{
  semester: 3,
  prodi: 'Akuntansi',
  mataKuliah: [
    { nama: 'Akuntansi Biaya', sks: 3 },
    { nama: 'Sistem Informasi Akuntansi', sks: 2 }
  ]
},
{
  semester: 4,
  prodi: 'Akuntansi',
  mataKuliah: [
    { nama: 'Akuntansi Manajemen', sks: 3 },
    { nama: 'Audit', sks: 2 }
  ]
},
{
  semester: 5,
  prodi: 'Akuntansi',
  mataKuliah: [
    { nama: 'Akuntansi Sektor Publik', sks: 3 },
    { nama: 'Etika Profesi Akuntansi', sks: 2 }
  ]
},
{
  semester: 6,
  prodi: 'Akuntansi',
  mataKuliah: [
    { nama: 'Analisis Laporan Keuangan', sks: 3 },
    { nama: 'Praktik Kerja Lapangan', sks: 2 }
  ]
},

        // =========================
        // TEKNIK REKAYASA OTOMOTIF
        // =========================
{
  semester: 1,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Dasar Teknik Otomotif', sks: 3 },
    { nama: 'Gambar Teknik Otomotif', sks: 2 }
  ]
},
{
  semester: 2,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Mesin Otomotif', sks: 3 },
    { nama: 'Sistem Kelistrikan', sks: 2 }
  ]
},
{
  semester: 3,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Sasis dan Suspensi', sks: 3 },
    { nama: 'Material Teknik', sks: 2 }
  ]
},
{
  semester: 4,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Sistem Transmisi', sks: 3 },
    { nama: 'Manajemen Bengkel', sks: 2 }
  ]
},
{
  semester: 5,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Elektronika Otomotif', sks: 3 },
    { nama: 'Diagnostik Kendaraan', sks: 2 }
  ]
},
{
  semester: 6,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Teknologi Kendaraan Listrik', sks: 3 },
    { nama: 'Keselamatan Kerja Otomotif', sks: 2 }
  ]
},
{
  semester: 7,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Manajemen Produksi Otomotif', sks: 3 }
  ]
},
{
  semester: 8,
  prodi: 'Teknik Rekayasa Otomotif',
  mataKuliah: [
    { nama: 'Magang Industri', sks: 6 }
  ]
},

];


  filteredKurikulum = [...this.kurikulum];
  
   constructor(private el: ElementRef) {}

 applyFilter() {
  const text = this.searchText.toLowerCase();

  this.filteredKurikulum = this.kurikulum.filter(semester => {

    const matchProdi =
      !this.selectedProdi || semester.prodi === this.selectedProdi;

    const matchSemester =
      semester.semester.toString().includes(text);

    const matchMatkul =
      semester.mataKuliah.some(mk =>
        mk.nama.toLowerCase().includes(text)
      );

    return matchProdi && (matchSemester || matchMatkul || !text);
  });
  

  // 🔹 HITUNG TOTAL SKS
  this.totalSKS = this.filteredKurikulum.reduce((total, semester) => {
    const sksSemester = semester.mataKuliah.reduce(
      (sum, mk) => sum + mk.sks, 0
    );
    return total + sksSemester;
  }, 0);
}

// 🔢 HITUNG TOTAL SKS PER SEMESTER
getTotalSKSSemester(mataKuliah: any[]): number {
  return mataKuliah.reduce((total, mk) => total + mk.sks, 0);
}

ngAfterViewInit() {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    },
    { threshold: 0.1 }
  );
  const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
  elements.forEach((el: HTMLElement) => observer.observe(el));
}

}


