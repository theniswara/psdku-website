import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Added Location
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

  id!: number;
  dosen: any = null;
  loading = true;
  
  // Changed from 'activeTab' to 'activeSection' to support the new scroll layout
  activeSection: string = 'biodata';
  
  // Modal State (Kept exactly as yours)
  showModal = false;
  modalType: string | null = null; 
  editingItem: any = null;

  constructor(
    private route: ActivatedRoute,
    private dosenService: DosenService,
    private location: Location // Inject Location for goBack functionality
  ) {}

  ngOnInit(): void {
    // Ensure ID is a number
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.loadFullProfile();
    }
  }

  // ✅ YOUR EXISTING LOGIC KEPT INTACT
  loadFullProfile() {
    this.loading = true;
    this.dosenService.getFullProfile(this.id).subscribe({
      next: (data) => {
        this.dosen = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        // Optional: Add a toast notification here instead of alert
        // alert("Gagal memuat data dosen"); 
      }
    });
  }

  // ✅ NEW: Scroll Logic for the Sidebar Navigation
  scrollTo(section: string) {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      // Smooth scroll to the specific section ID in the HTML
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ✅ FIXED: Now actually goes back
  goBack() {
    this.location.back();
  }

  // ✅ YOUR EXISTING MODAL LOGIC KEPT INTACT
  openModal(type: string, item: any = null) {
    this.modalType = type;
    this.editingItem = item;
    this.showModal = true;
  }

  closeModal(reload = false) {
    this.showModal = false;
    this.modalType = null;
    this.editingItem = null;
    if (reload) {
      this.loadFullProfile();
    }
  }

  openPhotoModal() {
  this.modalType = 'foto';
  this.editingItem = this.dosen?.dosen;
  this.showModal = true;
}

}