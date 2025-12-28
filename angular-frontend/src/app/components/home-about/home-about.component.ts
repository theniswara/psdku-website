import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css'],
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
    trigger('fadeSlideLeft', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-40px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.7s 0.2s ease-out')
      ])
    ]),
    trigger('fadeSlideRight', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(40px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', [
        animate('0.7s 0.3s ease-out')
      ])
    ])
  ]
})
export class HomeAboutComponent implements AfterViewInit {
  @ViewChild('sectionRef') sectionRef!: ElementRef;

  isVisible = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) {
      // On server, just show content immediately
      this.isVisible = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (this.sectionRef) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }
}