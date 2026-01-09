import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="flex flex-col w-full h-full bg-[#051D47] text-white overflow-y-auto border-r border-white/5">
    
      <div class="h-20 flex items-center gap-3 px-6 border-b border-white/10 bg-[#04183d] shrink-0">
        <img src="assets/logo.png" alt="Logo" class="h-8 w-auto brightness-110 drop-shadow-md">
        <div>
          <h1 class="font-['Biryani'] font-bold text-lg leading-none tracking-wide text-white">Admin Portal</h1>
          <span class="text-[10px] text-blue-300 font-bold tracking-widest uppercase">System Admin</span>
        </div>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-1">
        <p class="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 mt-1">Main Module</p>
        
        <a routerLink="/admin/dashboard" routerLinkActive="bg-[#FF7F11] text-white shadow-lg shadow-orange-900/40" [routerLinkActiveOptions]="{exact: true}" class="group flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium relative overflow-hidden">
          <i class="fa-solid fa-chart-pie w-5 text-center group-[.active]:text-white"></i> 
          <span>Dashboard</span>
        </a>
        
        <a routerLink="/admin/presensi" routerLinkActive="bg-[#FF7F11] text-white shadow-lg shadow-orange-900/40" class="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium group">
          <i class="fa-solid fa-calendar-days w-5 text-center group-hover:text-[#FF7F11] transition-colors"></i> 
          <span>Rekap Presensi</span>
        </a>

        <p class="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 mt-8">Database</p>

        <a routerLink="/admin/dosen" routerLinkActive="bg-[#FF7F11] text-white shadow-lg shadow-orange-900/40" class="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium group">
          <i class="fa-solid fa-users w-5 text-center group-hover:text-[#FF7F11] transition-colors"></i> 
          <span>Data Dosen</span>
        </a>
        
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium group">
          <i class="fa-solid fa-user-graduate w-5 text-center group-hover:text-[#FF7F11] transition-colors"></i> 
          <span>Data Mahasiswa</span>
        </a>
      </nav>

      <div class="p-4 border-t border-white/10 bg-[#04183d] shrink-0">
        <div class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
          <div class="h-10 w-10 rounded-full bg-gradient-to-tr from-[#FF7F11] to-orange-600 flex items-center justify-center text-white font-bold shadow-lg border-2 border-[#051D47]">
            {{ admin?.username?.charAt(0).toUpperCase() }}
          </div>
          <div class="overflow-hidden">
            <p class="text-sm font-bold text-white truncate">{{ admin?.username }}</p>
            <p class="text-[10px] text-green-400 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> System Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: ``
})
export class SidebarComponent implements OnInit {
  admin: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.admin = this.auth.getLoggedInUser();
  }
}
