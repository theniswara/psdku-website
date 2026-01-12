import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
    <!-- 
      BEST PRACTICE ADMIN LAYOUT (TailAdmin Style):
      - Collapsible sidebar on the left
      - Main content area fills remaining space
      - Topbar is STICKY at the top of the content area
      - Content scrolls independently
    -->
    <div class="flex h-screen overflow-hidden bg-[#F1F5F9] font-['Inter']">
      
      <!-- SIDEBAR: Fixed, Full Height, Collapsible -->
      <aside class="hidden lg:flex fixed inset-y-0 left-0 z-50 transition-all duration-300"
             [class.w-72]="!sidebarCollapsed"
             [class.w-20]="sidebarCollapsed">
        <app-sidebar 
          [isCollapsed]="sidebarCollapsed"
          (collapsedChange)="onSidebarToggle($event)"
          class="w-full">
        </app-sidebar>
      </aside>

      <!-- MAIN WRAPPER: Takes remaining space, offset by sidebar width -->
      <div class="flex flex-1 flex-col min-w-0 transition-all duration-300"
           [class.lg:ml-72]="!sidebarCollapsed"
           [class.lg:ml-20]="sidebarCollapsed">
        
        <!-- TOPBAR: Sticky at the top of the scrollable area -->
        <app-topbar 
          class="sticky top-0 z-40 flex-shrink-0"
          (toggleSidebar)="onMobileMenuToggle()">
        </app-topbar>

        <!-- SCROLLABLE CONTENT AREA -->
        <main class="flex-1 overflow-y-auto overflow-x-hidden">
          <div class="p-6 md:p-8 lg:p-10">
            <router-outlet></router-outlet>
          </div>
          
          <!-- FOOTER -->
          <footer class="px-10 py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
            &copy; {{ currentYear }} Polinema PSDKU Lumajang. All Rights Reserved.
          </footer>
        </main>

      </div>

      <!-- MOBILE SIDEBAR OVERLAY -->
      <div *ngIf="mobileMenuOpen" 
           class="lg:hidden fixed inset-0 z-50 flex">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
             (click)="mobileMenuOpen = false"></div>
        <!-- Sidebar -->
        <div class="relative w-72 animate-slide-in">
          <app-sidebar [isCollapsed]="false"></app-sidebar>
          <!-- Close button -->
          <button (click)="mobileMenuOpen = false"
                  class="absolute top-6 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

    </div>
  `,
  styles: [`
    /* Smooth scrolling for the content area */
    main::-webkit-scrollbar {
      width: 6px;
    }
    main::-webkit-scrollbar-track {
      background: transparent;
    }
    main::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.3);
      border-radius: 3px;
    }
    main::-webkit-scrollbar-thumb:hover {
      background: rgba(148, 163, 184, 0.5);
    }

    @keyframes slideIn {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    .animate-slide-in {
      animation: slideIn 0.3s ease-out forwards;
    }
  `]
})
export class AdminLayoutComponent {
  currentYear = new Date().getFullYear();
  sidebarCollapsed = false;
  mobileMenuOpen = false;

  constructor() {
    // Load saved sidebar state
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved) {
      this.sidebarCollapsed = saved === 'true';
    }
  }

  onSidebarToggle(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }

  onMobileMenuToggle() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
