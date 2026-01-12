import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatCardConfig {
    title: string;
    value: string | number;
    icon: string;
    iconBgClass: string;    // e.g., 'bg-blue-50'
    iconTextClass: string;  // e.g., 'text-blue-600'
    progress?: number;      // 0-100 for progress bar
    progressLabel?: string;
    trend?: {
        value: string;        // e.g., '+2.4%'
        direction: 'up' | 'down' | 'neutral';
        label?: string;       // e.g., 'vs last month'
    };
    subtitle?: string;      // Simple text below value
    loading?: boolean;
}

@Component({
    selector: 'app-stat-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <!-- SKELETON LOADER -->
    <div *ngIf="loading" 
         class="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] animate-pulse">
      <div class="flex justify-between items-start mb-4">
        <div class="space-y-2">
          <div class="h-3 w-24 bg-slate-200 rounded"></div>
          <div class="h-8 w-16 bg-slate-200 rounded"></div>
        </div>
        <div class="w-10 h-10 rounded-xl bg-slate-200"></div>
      </div>
      <div class="h-2 w-full bg-slate-100 rounded-full"></div>
    </div>

    <!-- ACTUAL CARD -->
    <div *ngIf="!loading"
         class="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
      
      <div class="flex justify-between items-start mb-4">
        <div>
          <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">{{ title }}</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ value }}</h3>
        </div>
        <div class="w-10 h-10 rounded-xl flex items-center justify-center"
             [ngClass]="[iconBgClass, iconTextClass]">
          <i [class]="icon"></i>
        </div>
      </div>

      <!-- Progress Bar (Optional) -->
      <ng-container *ngIf="progress !== undefined">
        <div class="w-full bg-slate-100 rounded-full h-1.5 mb-2">
          <div class="h-1.5 rounded-full transition-all duration-500"
               [ngClass]="iconTextClass.replace('text-', 'bg-')"
               [style.width.%]="progress"></div>
        </div>
        <p *ngIf="progressLabel" class="text-[10px] text-slate-400">
          <strong>{{ progress }}%</strong> {{ progressLabel }}
        </p>
      </ng-container>

      <!-- Trend Indicator (Optional) -->
      <div *ngIf="trend" 
           class="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded w-fit"
           [ngClass]="{
             'text-green-500 bg-green-50': trend.direction === 'up',
             'text-red-500 bg-red-50': trend.direction === 'down',
             'text-slate-400 bg-slate-50': trend.direction === 'neutral'
           }">
        <i [class]="{
          'fa-solid fa-arrow-up': trend.direction === 'up',
          'fa-solid fa-arrow-down': trend.direction === 'down',
          'fa-solid fa-minus': trend.direction === 'neutral'
        }"></i>
        {{ trend.value }} {{ trend.label }}
      </div>

      <!-- Simple Subtitle (Optional) -->
      <p *ngIf="subtitle && !progress && !trend" class="text-[10px] text-slate-400">
        {{ subtitle }}
      </p>

    </div>
  `
})
export class StatCardComponent {
    @Input() title: string = '';
    @Input() value: string | number = 0;
    @Input() icon: string = 'fa-solid fa-chart-bar';
    @Input() iconBgClass: string = 'bg-blue-50';
    @Input() iconTextClass: string = 'text-blue-600';
    @Input() progress?: number;
    @Input() progressLabel?: string;
    @Input() trend?: { value: string; direction: 'up' | 'down' | 'neutral'; label?: string };
    @Input() subtitle?: string;
    @Input() loading: boolean = false;
}
