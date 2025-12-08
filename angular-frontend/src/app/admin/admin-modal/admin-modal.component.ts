import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DosenService } from '../../services/dosen.service';

@Component({
  selector: 'app-admin-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.css'],
})
export class AdminModalComponent implements OnChanges {
  @Input() type: string | null = null;
  @Input() item: any = null;
  @Input() idDosen!: number;

  @Output() close = new EventEmitter<boolean>();

  formData: any = {};
  loading = false;
  
  selectedFile: File | null = null;
  previewImage: string | null = null;

  // Change this if your backend URL changes
  private readonly IMAGE_BASE_URL = 'http://localhost:8080/uploads/';

  constructor(private dosenService: DosenService) {}

  // ==========================================
  // LIFECYCLE: SETUP DATA ON OPEN
  // ==========================================
  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] || changes['type']) {
      // 1. Reset File & Preview
      this.selectedFile = null;
      this.previewImage = null;

      // 2. Setup Form Data
      if (this.item) {
        this.formData = { ...this.item };

        // Setup existing image preview if available
        if (this.item.foto) {
          this.previewImage = this.IMAGE_BASE_URL + this.item.foto;
        }
      } else {
        this.formData = {};
      }
    }
  }

  // ==========================================
  // HELPER: FILE SELECTION
  // ==========================================
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Optional: Validation (Max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file terlalu besar! Maksimal 2MB.');
        input.value = ''; // Reset input
        return;
      }

      this.selectedFile = file;

      // Preview image immediately
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // ==========================================
  // HELPER: MODAL TITLE
  // ==========================================
  getTitle(): string {
    switch (this.type) {
      case 'biodata': return 'Edit Biodata Diri';
      case 'foto': return 'Ubah Foto Profil';
      
      case 'pendidikan': return 'Tambah Pendidikan';
      case 'edit-pendidikan': return 'Edit Pendidikan';
      case 'delete-pendidikan': return 'Hapus Data Pendidikan';

      case 'keahlian': return 'Tambah Keahlian';
      case 'edit-keahlian': return 'Edit Keahlian';
      case 'delete-keahlian': return 'Hapus Data Keahlian';

      case 'sertifikasi': return 'Tambah Sertifikasi';
      case 'edit-sertifikasi': return 'Edit Sertifikasi';
      case 'delete-sertifikasi': return 'Hapus Data Sertifikasi';

      case 'matkul': return 'Tambah Mata Kuliah';
      case 'edit-matkul': return 'Edit Mata Kuliah';
      case 'delete-matkul': return 'Hapus Data Mata Kuliah';

      case 'link': return 'Tambah Link Eksternal';
      case 'edit-link': return 'Edit Link Eksternal';
      case 'delete-link': return 'Hapus Data Link';

      default: return 'Form Data';
    }
  }

  closeModal(reload: boolean = false) {
    this.close.emit(reload);
  }

  // ==========================================
  // MAIN LOGIC: SUBMIT ROUTER
  // ==========================================
  submit() {
    console.log('✅ Submitting:', this.type);

    switch (this.type) {
      // Special Cases
      case 'biodata': return this.updateBiodata();
      case 'foto': return this.uploadFotoOnly();

      // Pendidikan
      case 'pendidikan': return this.createPendidikan();
      case 'edit-pendidikan': return this.updatePendidikan();
      case 'delete-pendidikan': return this.deletePendidikan();

      // Keahlian
      case 'keahlian': return this.createKeahlian();
      case 'edit-keahlian': return this.updateKeahlian();
      case 'delete-keahlian': return this.deleteKeahlian();

      // Sertifikasi
      case 'sertifikasi': return this.createSertifikasi();
      case 'edit-sertifikasi': return this.updateSertifikasi();
      case 'delete-sertifikasi': return this.deleteSertifikasi();

      // Mata Kuliah
      case 'matkul': return this.createMatkul();
      case 'edit-matkul': return this.updateMatkul();
      case 'delete-matkul': return this.deleteMatkul();

      // Link
      case 'link': return this.createLink();
      case 'edit-link': return this.updateLink();
      case 'delete-link': return this.deleteLink();

      default: 
        console.warn('Unknown type:', this.type);
        return;
    }
  }

  // ==========================================
  // LOGIC 1: BIODATA + OPTIONAL PHOTO
  // ==========================================
  updateBiodata() {
    this.loading = true;

    // 1. Update JSON Data first
    this.dosenService.updateDosen(this.idDosen, this.formData).subscribe({
      next: () => {
        // 2. If NO file selected, we are done
        if (!this.selectedFile) {
          this.loading = false;
          this.closeModal(true);
          return;
        }

        // 3. If file exists, Upload Photo
        this.dosenService.uploadFoto(this.idDosen, this.selectedFile).subscribe({
          next: () => {
            this.loading = false;
            this.closeModal(true);
          },
          error: (err) => {
            console.error(err);
            alert('Biodata tersimpan, namun upload foto gagal.');
            this.loading = false;
            this.closeModal(true); // Close anyway because data is saved
          }
        });
      },
      error: (err) => {
        console.error(err);
        alert('Gagal mengubah biodata');
        this.loading = false;
      }
    });
  }

  // ==========================================
  // LOGIC 2: PHOTO ONLY UPLOAD
  // ==========================================
  uploadFotoOnly() {
    if (!this.selectedFile) {
      alert("Pilih foto terlebih dahulu");
      return;
    }

    this.loading = true;

    this.dosenService.uploadFoto(this.idDosen, this.selectedFile).subscribe({
      next: () => {
        this.loading = false;
        this.closeModal(true);
      },
      error: () => {
        alert('Upload foto gagal');
        this.loading = false;
      }
    });
  }

  // ==========================================
  // LOGIC 3: STANDARD CRUD OPERATIONS
  // ==========================================

  // --- Pendidikan ---
  createPendidikan() {
    this.handleRequest(this.dosenService.createPendidikan({ ...this.formData, dosen: { idDosen: this.idDosen } }));
  }
  updatePendidikan() {
    this.handleRequest(this.dosenService.updatePendidikan(this.item.idPendidikan, this.formData));
  }
  deletePendidikan() {
    this.handleRequest(this.dosenService.deletePendidikan(this.item.idPendidikan));
  }

  // --- Keahlian ---
  createKeahlian() {
    this.handleRequest(this.dosenService.createKeahlian({ namaKeahlian: this.formData.namaKeahlian, dosen: { idDosen: this.idDosen } }));
  }
  updateKeahlian() {
    this.handleRequest(this.dosenService.updateKeahlian(this.item.idKeahlian, this.formData));
  }
  deleteKeahlian() {
    this.handleRequest(this.dosenService.deleteKeahlian(this.item.idKeahlian));
  }

  // --- Sertifikasi ---
  createSertifikasi() {
    this.handleRequest(this.dosenService.createSertifikasi({ ...this.formData, dosen: { idDosen: this.idDosen } }));
  }
  updateSertifikasi() {
    this.handleRequest(this.dosenService.updateSertifikasi(this.item.idSertifikasi, this.formData));
  }
  deleteSertifikasi() {
    this.handleRequest(this.dosenService.deleteSertifikasi(this.item.idSertifikasi));
  }

  // --- Matkul ---
  createMatkul() {
    this.handleRequest(this.dosenService.createMatkul({ ...this.formData, dosen: { idDosen: this.idDosen } }));
  }
  updateMatkul() {
    this.handleRequest(this.dosenService.updateMatkul(this.item.idMk, this.formData));
  }
  deleteMatkul() {
    this.handleRequest(this.dosenService.deleteMatkul(this.item.idMk));
  }

  // --- Link ---
  createLink() {
    this.handleRequest(this.dosenService.createLink({ ...this.formData, dosen: { idDosen: this.idDosen } }));
  }
  updateLink() {
    this.handleRequest(this.dosenService.updateLink(this.item.idLink, this.formData));
  }
  deleteLink() {
    this.handleRequest(this.dosenService.deleteLink(this.item.idLink));
  }

  // ==========================================
  // HELPER: GENERIC REQUEST HANDLER
  // ==========================================
  // Reduces code duplication for simple CRUD calls
  private handleRequest(observable: any) {
    this.loading = true;
    observable.subscribe({
      next: () => {
        this.loading = false;
        this.closeModal(true);
      },
      error: (err: any) => {
        console.error(err);
        alert('Gagal memproses data');
        this.loading = false;
      }
    });
  }
}