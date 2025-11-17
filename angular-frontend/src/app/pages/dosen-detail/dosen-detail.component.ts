import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DosenService } from '../../services/dosen.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-dosen-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './dosen-detail.component.html',
  styleUrls: ['./dosen-detail.component.css']
})
export class DosenDetailComponent implements OnInit {

  id!: number;
  dosen: any;
  activeTab: string = 'biodata';

  constructor(
    private route: ActivatedRoute,
    private dosenService: DosenService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadDosenDetail();
  }

  loadDosenDetail() {
    this.dosenService.getDosenById(this.id).subscribe({
      next: (data) => this.dosen = data,
      error: (err) => console.error('Failed to load detail:', err)
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  isOnline(d: any): boolean {
    return !!d &&
      (d.statusPresensi === 'Hadir' ||
      (!!d.waktuMasuk && !d.waktuKeluar));
  }

  
}

