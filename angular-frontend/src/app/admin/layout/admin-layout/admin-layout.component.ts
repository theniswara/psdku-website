import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
// import { TopbarComponent } from '../topbar/topbar.component'; // Uncomment if using topbar

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="min-h-screen bg-[#F1F5F9] font-['Inter'] flex">
      
      <app-sidebar class="hidden lg:block w-72 fixed h-full z-50"></app-sidebar>

      <div class="flex-1 lg:ml-72 min-h-screen flex flex-col">
        
        <!-- <app-topbar class="sticky top-0 z-40"></app-topbar> -->

        <main class="p-6 md:p-10 flex-1">
          <router-outlet></router-outlet> 
        </main>
        
        <footer class="px-10 py-6 text-center text-xs text-gray-400">
           &copy; 2024 Polinema PSDKU Lumajang. All Rights Reserved.
        </footer>

      </div>
    </div>
  `
})
export class AdminLayoutComponent { }
