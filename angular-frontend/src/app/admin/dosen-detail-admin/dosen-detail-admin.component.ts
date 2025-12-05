import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DosenService } from '../../services/dosen.service';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';

@Component({
  selector: 'app-dosen-detail-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, AdminModalComponent],
  templateUrl: './dosen-detail-admin.component.html',
  styleUrls: ['./dosen-detail-admin.component.css']
})
export class DosenDetailAdminComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}

  id!: number;
  dosen: any = null;
  loading = true;
  activeTab: string = 'biodata';
  
  // untuk modal
  showModal = false;
  modalType: string | null = null; 
  editingItem: any = null;

  constructor(
    private route: ActivatedRoute,
    private dosenService: DosenService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFullProfile();
  }

  loadFullProfile() {
    this.loading = true;
    this.dosenService.getFullProfile(this.id).subscribe({
      next: (data) => {
        this.dosen = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert("Gagal memuat data dosen");
      }
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  // buka modal
  openModal(type: string, item: any = null) {
    this.modalType = type;
    this.editingItem = item;
    this.showModal = true;
  }

  closeModal(reload = false) {
    this.showModal = false;
    this.modalType = null;
    this.editingItem = null;
    if (reload) this.loadFullProfile();
  }
}
