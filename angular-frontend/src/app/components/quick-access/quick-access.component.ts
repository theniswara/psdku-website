import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.css']
})
export class QuickAccessComponent {
  
  accessItems = [
    {
      title: 'Program Studi',
      desc: 'Jelajahi pilihan program studi vokasi unggulan dan kurikulum terkini.',
      icon: 'fa-graduation-cap',
      link: '/prodi'
    },
    {
      title: 'Penerimaan Baru',
      desc: 'Informasi lengkap jalur pendaftaran, jadwal, dan persyaratan PMB.',
      icon: 'fa-user-plus',
      link: '/pmb' 
    },
    {
      title: 'Berita & Agenda',
      desc: 'Ikuti perkembangan terbaru, prestasi mahasiswa, dan kegiatan kampus.',
      icon: 'fa-newspaper',
      link: '/informasi'
    }
  ];

}