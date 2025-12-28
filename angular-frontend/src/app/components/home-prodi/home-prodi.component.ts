import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-prodi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-prodi.component.html',
  styleUrls: ['./home-prodi.component.css']
})
export class HomeProdiComponent {

  prodiList = [
    {
      name: 'D-III Teknologi Informasi',
      desc: 'Jurusan Teknologi Informasi Di Politeknik Negeri Malang Berfokus Pada Pengembangan Keterampilan Dalam Pemrograman, Analisis Sistem, Pengelolaan Database, Dan Jaringan Komputer. Mahasiswa Dilatih Untuk Merancang Solusi Teknologi Informasi Yang Efisien Dan Aman.',
      img: '/assets/TI.png', // Coding image
      link: '/prodi/ti'
    },
    {
      name: 'D-IV Teknologi Rekayasa Otomotif',
      desc: 'Program Studi Teknik Otomotif Elektronik Merupakan Salah Satu Dari Program Studi Di Jurusan Teknik Mesin. Dirancang Secara Khusus Guna Menghasilkan Tenaga Sarjana Sains Terapan Bidang Otomotif Yang Memiliki Kompetensi Bidang Manajerial, Perawatan, Dan Perbaikan Kendaraan.',
      img: '/assets/TRO.png', // Automotive image
      link: '/prodi/tro'
    },
    {
      name: 'D-III Teknik Sipil',
      desc: 'Progam Studi D-III Teknik Sipil Dirancang Secara Khusus Guna Menghasilkan Tenaga Ahli Madya Bidang Bangunan Gedung Dan Bangunan Air Dan Transportasi Yang Memiliki Kompetensi Bidang Manajerial, Desain, Dan Pembuatan Bangunan Gedung.',
      img: '/assets/SIPIL.png', // Civil/Construction image
      link: '/prodi/sipil'
    },
    {
      name: 'D-III Akuntansi',
      desc: 'Program Studi D-III Akuntansi Dirancang Secara Khusus Guna Menghasilkan Tenaga Ahli Madya Bidang Akuntansi, Yang Memiliki Kopetensi Melaksanakan Dan Mengelola Bidang Akutansi Manajemen, Akuntansi Biaya, Pengendalian Internal, Keuangan, Dan Perpajakan.',
      img: '/assets/AK.png', // Accounting image
      link: '/prodi/akuntansi'
    }
  ];

}