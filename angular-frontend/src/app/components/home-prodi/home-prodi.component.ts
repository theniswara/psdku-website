import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-prodi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-prodi.component.html',
  styleUrls: ['./home-prodi.component.css'],
  animations: [
    trigger('fadeSlideUp', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(40px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('0.7s ease-out')
      ])
    ]),
    trigger('slideFromLeft', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-60px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.8s ease-out')
      ])
    ]),
    trigger('slideFromRight', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(60px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class HomeProdiComponent implements AfterViewInit {
  @ViewChildren('prodiItem') prodiItems!: QueryList<ElementRef>;

  headerVisible = false;
  itemStates: boolean[] = [];
  private isBrowser: boolean;

  prodiList = [
    {
      name: 'D-III Teknologi Informasi',
      desc: 'Jurusan Teknologi Informasi Di Politeknik Negeri Malang Berfokus Pada Pengembangan Keterampilan Dalam Pemrograman, Analisis Sistem, Pengelolaan Database, Dan Jaringan Komputer. Mahasiswa Dilatih Untuk Merancang Solusi Teknologi Informasi Yang Efisien Dan Aman.',
      img: '/assets/TI.png',
      link: '/prodi/ti'
    },
    {
      name: 'D-IV Teknologi Rekayasa Otomotif',
      desc: 'Program Studi Teknik Otomotif Elektronik Merupakan Salah Satu Dari Program Studi Di Jurusan Teknik Mesin. Dirancang Secara Khusus Guna Menghasilkan Tenaga Sarjana Sains Terapan Bidang Otomotif Yang Memiliki Kompetensi Bidang Manajerial, Perawatan, Dan Perbaikan Kendaraan.',
      img: '/assets/TRO.png',
      link: '/prodi/tro'
    },
    {
      name: 'D-III Teknik Sipil',
      desc: 'Progam Studi D-III Teknik Sipil Dirancang Secara Khusus Guna Menghasilkan Tenaga Ahli Madya Bidang Bangunan Gedung Dan Bangunan Air Dan Transportasi Yang Memiliki Kompetensi Bidang Manajerial, Desain, Dan Pembuatan Bangunan Gedung.',
      img: '/assets/SIPIL.png',
      link: '/prodi/sipil'
    },
    {
      name: 'D-III Akuntansi',
      desc: 'Program Studi D-III Akuntansi Dirancang Secara Khusus Guna Menghasilkan Tenaga Ahli Madya Bidang Akuntansi, Yang Memiliki Kopetensi Melaksanakan Dan Mengelola Bidang Akutansi Manajemen, Akuntansi Biaya, Pengendalian Internal, Keuangan, Dan Perpajakan.',
      img: '/assets/AK.png',
      link: '/prodi/akuntansi'
    }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    // Initialize states array
    this.itemStates = this.prodiList.map(() => false);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) {
      // On server, just show content immediately
      this.headerVisible = true;
      this.itemStates = this.prodiList.map(() => true);
      return;
    }

    // Observe header
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.headerVisible = true;
            headerObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const headerEl = document.querySelector('.prodi-header');
    if (headerEl) {
      headerObserver.observe(headerEl);
    }

    // Observe each prodi item
    this.prodiItems.forEach((item, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.itemStates[index] = true;
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(item.nativeElement);
    });
  }
}