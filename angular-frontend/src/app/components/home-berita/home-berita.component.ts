import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-berita',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-berita.component.html',
  styleUrls: ['./home-berita.component.css'] // Optional if you have custom css
})
export class HomeBeritaComponent {

  // Featured News (The big one at the top)
  featuredNews = {
    title: 'Penerimaan Mahasiswa Baru Tahun Akademik 2024/2025',
    desc: 'Politeknik Negeri Malang PSDKU Lumajang membuka pendaftaran mahasiswa baru untuk berbagai program studi unggulan. Segera daftarkan diri Anda dan jadilah bagian dari generasi vokasi yang kompeten.',
    date: '12 Mei 2024',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=3500&auto=format&fit=crop', // Replace with your asset
    link: '/berita/pmb-2024'
  };

  // Grid News (The 3 smaller items)
  newsList = [
    {
      title: 'Kunjungan Industri Mahasiswa TI ke Start-up Unicorn',
      category: 'Teknologi',
      desc: 'Mahasiswa prodi Teknik Informatika melakukan studi lapangan untuk memahami budaya kerja startup.',
      date: '10 Mei 2024',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=3540&auto=format&fit=crop',
      link: '/berita/kunjungan-industri'
    },
    {
      title: 'Penandatanganan MoU Kerjasama dengan Dunia Industri',
      category: 'Kerjasama',
      desc: 'Polinema memperluas jaringan kerjasama untuk penyerapan lulusan yang lebih maksimal.',
      date: '08 Mei 2024',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=3546&auto=format&fit=crop',
      link: '/berita/mou-industri'
    },
    {
      title: 'Pelatihan Sertifikasi Kompetensi Dosen & Teknisi',
      category: 'Pelatihan',
      desc: 'Meningkatkan kualitas pengajar melalui sertifikasi standar industri internasional.',
      date: '05 Mei 2024',
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=3540&auto=format&fit=crop',
      link: '/berita/sertifikasi-dosen'
    }
  ];

}