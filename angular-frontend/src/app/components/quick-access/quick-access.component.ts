import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.css'],
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
        animate('0.6s ease-out')
      ])
    ]),
    trigger('staggerCards', [
      transition('* => visible', [
        query('.card-item', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          stagger(150, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class QuickAccessComponent implements AfterViewInit {
  @ViewChild('sectionRef') sectionRef!: ElementRef;

  isVisible = false;
  cardsState = 'hidden';
  private isBrowser: boolean;

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

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) {
      // On server, just show content immediately
      this.isVisible = true;
      this.cardsState = 'visible';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.cardsState = 'visible';
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (this.sectionRef) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }
}