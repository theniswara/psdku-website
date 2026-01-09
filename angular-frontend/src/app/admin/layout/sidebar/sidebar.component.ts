import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ADMIN_MENU, MenuItem } from '../admin-menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="flex flex-col w-72 bg-[#051D47] text-white h-full font-['Inter'] shadow-2xl z-50 transition-all duration-300">
      
      <div class="h-20 flex items-center gap-3 px-8 border-b border-white/10 bg-[#04183d] shrink-0">
        <img src="assets/logo.png" alt="Logo" class="h-9 w-auto brightness-110 drop-shadow-md">
        <div>
          <h1 class="font-['Biryani'] font-bold text-lg leading-none tracking-wide text-white">Admin Portal</h1>
          <span class="text-[10px] text-blue-300 font-bold tracking-widest uppercase">PSDKU Lumajang</span>
        </div>
      </div>

      <nav class="flex-1 px-4 py-6 overflow-y-auto custom-scrollbar">
        
        <ng-container *ngFor="let item of menuItems">
          
          <div *ngIf="item.type === 'header'" class="px-4 mt-6 mb-3">
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">
              {{ item.title }}
            </span>
          </div>

          <a *ngIf="item.type === 'link'" 
             [routerLink]="item.link" 
             routerLinkActive="bg-[#FF7F11] text-white shadow-lg shadow-orange-900/30"
             [routerLinkActiveOptions]="{exact: true}"
             class="group relative flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium mb-1">
             
             <i [class]="item.icon + ' w-5 text-center transition-colors'"></i>
             <span class="tracking-wide text-sm">{{ item.title }}</span>
             
             <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-white rounded-l-full opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300"></div>
          </a>

          <div *ngIf="item.type === 'dropdown'" class="mb-1">
            
            <button (click)="toggleDropdown(item)"
                    [class.bg-white-5]="item.isOpen"
                    [class.text-white]="item.isOpen"
                    class="w-full flex items-center justify-between px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium group">
              
              <div class="flex items-center gap-3">
                <i [class]="item.icon + ' w-5 text-center'"></i>
                <span class="tracking-wide text-sm">{{ item.title }}</span>
              </div>
              
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300"
                 [class.rotate-180]="item.isOpen"></i>
            </button>

            <div *ngIf="item.isOpen" class="mt-1 ml-4 border-l border-white/10 pl-2 space-y-1 animate-fade-in-down">
              <a *ngFor="let child of item.children"
                 [routerLink]="child.link"
                 routerLinkActive="text-[#FF7F11] font-bold bg-[#FF7F11]/10 border-r-2 border-[#FF7F11]"
                 class="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 rounded-r-lg">
                 {{ child.title }}
              </a>
            </div>

          </div>

        </ng-container>

      </nav>

      <div class="p-4 border-t border-white/10 bg-[#04183d]">
        <div class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
          
          <div class="relative">
            <div class="h-10 w-10 rounded-full bg-gradient-to-tr from-[#FF7F11] to-orange-600 flex items-center justify-center text-white font-bold shadow-lg border-2 border-[#051D47]">
              A
            </div>
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#04183d] rounded-full"></span>
          </div>
          
          <div class="overflow-hidden">
            <p class="text-xs font-bold text-gray-300 uppercase tracking-wider mb-0.5">Logged in as</p>
            <p class="text-sm font-bold text-white truncate group-hover:text-[#FF7F11] transition-colors">Administrator</p>
          </div>
          
          <button class="ml-auto text-gray-500 hover:text-red-400 transition-colors">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>

    </aside>
  `,
  styles: [`
    /* Custom Scrollbar for Sidebar */
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }

    /* Simple Dropdown Animation */
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-down {
      animation: fadeInDown 0.2s ease-out forwards;
    }
  `]
})
export class SidebarComponent {
  
  menuItems = ADMIN_MENU;

  constructor(private router: Router) {
    // Optional: Auto-open dropdown if active link is inside it
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkActiveMenu();
      }
    });
  }

  toggleDropdown(item: MenuItem) {
    // Optional: Close others when opening one (Accordion style)
    // this.menuItems.forEach(i => { if (i !== item) i.isOpen = false; });
    
    item.isOpen = !item.isOpen;
  }

  checkActiveMenu() {
    const currentUrl = this.router.url;
    this.menuItems.forEach(item => {
      if (item.children) {
        // If any child link matches current URL, open the parent
        const hasActiveChild = item.children.some(child => currentUrl.includes(child.link || ''));
        if (hasActiveChild) {
          item.isOpen = true;
        }
      }
    });
  }
}