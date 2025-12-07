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

  selectedFile: File | null = null;

  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
    // Optional: kalau mau lihat di console
    // console.log('File selected:', this.selectedFile);
  }
}


  formData: any = {};
  loading = false;

  constructor(private dosenService: DosenService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] || changes['type']) {
      if (this.item) {
        this.formData = { ...this.item };
      } else {
        this.formData = {};
      }
    }
  }

  getTitle(): string {
    switch (this.type) {
      case 'biodata': return 'Edit Biodata Diri';
      
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

      default: return 'Modal';
    }
  }

  closeModal(reload: boolean = false) {
    this.close.emit(reload);
  }

  submit() {
    if (this.type === 'biodata') return this.updateBiodata();

    if (this.type === 'pendidikan') return this.createPendidikan();
    if (this.type === 'edit-pendidikan') return this.updatePendidikan();
    if (this.type === 'delete-pendidikan') return this.deletePendidikan();

    if (this.type === 'keahlian') return this.createKeahlian();
    if (this.type === 'edit-keahlian') return this.updateKeahlian();
    if (this.type === 'delete-keahlian') return this.deleteKeahlian();

    if (this.type === 'sertifikasi') return this.createSertifikasi();
    if (this.type === 'edit-sertifikasi') return this.updateSertifikasi();
    if (this.type === 'delete-sertifikasi') return this.deleteSertifikasi();

    if (this.type === 'matkul') return this.createMatkul();
    if (this.type === 'edit-matkul') return this.updateMatkul();
    if (this.type === 'delete-matkul') return this.deleteMatkul();

    if (this.type === 'link') return this.createLink();
    if (this.type === 'edit-link') return this.updateLink();
    if (this.type === 'delete-link') return this.deleteLink();
  }


  // --- CRUD METHODS (Identical to your original code) ---
  
  // updateBiodata() {
  //   this.loading = true;
  //   this.dosenService.updateDosen(this.idDosen, this.formData).subscribe({
  //     next: () => this.closeModal(true),
  //     error: () => { alert('Gagal mengubah biodata'); this.loading = false; },
  //   });
  // }

  updateBiodata() {
  this.loading = true;

  // 1. Update biodata dulu (JSON)
  this.dosenService.updateDosen(this.idDosen, this.formData).subscribe({
    next: () => {
      // 2. Kalau TIDAK ada file baru → selesai di sini
      if (!this.selectedFile) {
        this.loading = false;
        this.closeModal(true);
        return;
      }

      // 3. Kalau ADA file → lanjut upload foto
      this.dosenService.uploadFoto(this.idDosen, this.selectedFile).subscribe({
        next: (res: any) => {
          // res = nama file dari backend
          // Optional: update di UI kalau perlu
          // this.formData.foto = res;

          this.loading = false;
          this.closeModal(true);
        },
        error: (err) => {
          console.error(err);
          alert('Biodata tersimpan, tapi upload foto gagal.');
          this.loading = false;
          // bisa tetap close / tetap buka, terserah UX-mu
          // this.closeModal(true);
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


  createPendidikan() {
    this.loading = true;
    const payload = { ...this.formData, dosen: { idDosen: this.idDosen } };
    this.dosenService.createPendidikan(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menambah pendidikan'); this.loading = false; },
    });
  }

  updatePendidikan() {
    this.loading = true;
    this.dosenService.updatePendidikan(this.item.idPendidikan, this.formData).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal mengubah pendidikan'); this.loading = false; },
    });
  }

  deletePendidikan() {
    this.loading = true;
    this.dosenService.deletePendidikan(this.item.idPendidikan).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menghapus pendidikan'); this.loading = false; },
    });
  }

  createKeahlian() {
    this.loading = true;
    const payload = { namaKeahlian: this.formData.namaKeahlian, dosen: { idDosen: this.idDosen } };
    this.dosenService.createKeahlian(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menambah keahlian'); this.loading = false; },
    });
  }

  updateKeahlian() {
    this.loading = true;
    this.dosenService.updateKeahlian(this.item.idKeahlian, this.formData).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal mengubah keahlian'); this.loading = false; },
    });
  }

  deleteKeahlian() {
    this.loading = true;
    this.dosenService.deleteKeahlian(this.item.idKeahlian).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menghapus keahlian'); this.loading = false; },
    });
  }

  createSertifikasi() {
    this.loading = true;
    const payload = { ...this.formData, dosen: { idDosen: this.idDosen } };
    this.dosenService.createSertifikasi(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menambah sertifikasi'); this.loading = false; },
    });
  }

  updateSertifikasi() {
    this.loading = true;
    this.dosenService.updateSertifikasi(this.item.idSertifikasi, this.formData).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal mengubah sertifikasi'); this.loading = false; },
    });
  }

  deleteSertifikasi() {
    this.loading = true;
    this.dosenService.deleteSertifikasi(this.item.idSertifikasi).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menghapus sertifikasi'); this.loading = false; },
    });
  }

  createMatkul() {
    this.loading = true;
    const payload = { ...this.formData, dosen: { idDosen: this.idDosen } };
    this.dosenService.createMatkul(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menambah mata kuliah'); this.loading = false; },
    });
  }

  updateMatkul() {
    this.loading = true;
    this.dosenService.updateMatkul(this.item.idMk, this.formData).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal mengubah mata kuliah'); this.loading = false; },
    });
  }

  deleteMatkul() {
    this.loading = true;
    this.dosenService.deleteMatkul(this.item.idMk).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menghapus mata kuliah'); this.loading = false; },
    });
  }

  createLink() {
    this.loading = true;
    const payload = { ...this.formData, dosen: { idDosen: this.idDosen } };
    this.dosenService.createLink(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menambah link'); this.loading = false; },
    });
  }

  updateLink() {
    this.loading = true;
    this.dosenService.updateLink(this.item.idLink, this.formData).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal mengubah link'); this.loading = false; },
    });
  }

  deleteLink() {
    this.loading = true;
    this.dosenService.deleteLink(this.item.idLink).subscribe({
      next: () => this.closeModal(true),
      error: () => { alert('Gagal menghapus link'); this.loading = false; },
    });
  }
}