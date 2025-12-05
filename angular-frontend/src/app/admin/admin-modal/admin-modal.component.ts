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

  constructor(private dosenService: DosenService) {}

  // Setiap kali `item` atau `type` berubah (modal dibuka untuk edit/tambah)
  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] || changes['type']) {
      if (this.item) {
        // EDIT → isi form dengan data yang dikirim
        this.formData = { ...this.item };
      } else {
        // CREATE → kosongkan form
        this.formData = {};
      }
    }
  }

  // Title di header modal
  getTitle(): string {
    switch (this.type) {
      case 'biodata': return 'Edit Biodata';
      case 'pendidikan': return 'Tambah Pendidikan';
      case 'edit-pendidikan': return 'Edit Pendidikan';
      case 'delete-pendidikan': return 'Hapus Pendidikan';

      case 'keahlian': return 'Tambah Keahlian';
      case 'edit-keahlian': return 'Edit Keahlian';
      case 'delete-keahlian': return 'Hapus Keahlian';

      case 'sertifikasi': return 'Tambah Sertifikasi';
      case 'edit-sertifikasi': return 'Edit Sertifikasi';
      case 'delete-sertifikasi': return 'Hapus Sertifikasi';

      case 'matkul': return 'Tambah Mata Kuliah';
      case 'edit-matkul': return 'Edit Mata Kuliah';
      case 'delete-matkul': return 'Hapus Mata Kuliah';

      case 'link': return 'Tambah Link Eksternal';
      case 'edit-link': return 'Edit Link Eksternal';
      case 'delete-link': return 'Hapus Link Eksternal';

      default: return 'Modal';
    }
  }

  closeModal(reload: boolean = false) {
    this.close.emit(reload);
  }

  /* =========================================
     SUBMIT HANDLER
     ========================================= */

  submit() {
    // ✅ BIODATA
    if (this.type === 'biodata') return this.updateBiodata();

    // ✅ PENDIDIKAN
    if (this.type === 'pendidikan') return this.createPendidikan();
    if (this.type === 'edit-pendidikan') return this.updatePendidikan();
    if (this.type === 'delete-pendidikan') return this.deletePendidikan();

    // ✅ KEAHLIAN
    if (this.type === 'keahlian') return this.createKeahlian();
    if (this.type === 'edit-keahlian') return this.updateKeahlian();
    if (this.type === 'delete-keahlian') return this.deleteKeahlian();

    // ✅ SERTIFIKASI
    if (this.type === 'sertifikasi') return this.createSertifikasi();
    if (this.type === 'edit-sertifikasi') return this.updateSertifikasi();
    if (this.type === 'delete-sertifikasi') return this.deleteSertifikasi();

    // ✅ MATA KULIAH
    if (this.type === 'matkul') return this.createMatkul();
    if (this.type === 'edit-matkul') return this.updateMatkul();
    if (this.type === 'delete-matkul') return this.deleteMatkul();

    // ✅ LINK EKSTERNAL
    if (this.type === 'link') return this.createLink();
    if (this.type === 'edit-link') return this.updateLink();
    if (this.type === 'delete-link') return this.deleteLink();

    alert('Unknown modal type: ' + this.type);
  }

  /* =========================================
     BIODATA (UPDATE DOSEN)
     ========================================= */

  updateBiodata() {
    this.loading = true;

    this.dosenService
      .updateDosen(this.idDosen, this.formData)
      .subscribe({
        next: () => this.closeModal(true),
        error: () => {
          alert('Gagal mengubah biodata');
          this.loading = false;
        },
      });
  }

  /* =========================================
     PENDIDIKAN CRUD
     ========================================= */

  createPendidikan() {
    this.loading = true;

    const payload = {
      ...this.formData,
      dosen: { idDosen: this.idDosen },
    };

    this.dosenService.createPendidikan(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menambah pendidikan');
        this.loading = false;
      },
    });
  }

  updatePendidikan() {
    this.loading = true;

    this.dosenService
      .updatePendidikan(this.item.idPendidikan, this.formData)
      .subscribe({
        next: () => this.closeModal(true),
        error: () => {
          alert('Gagal mengubah pendidikan');
          this.loading = false;
        },
      });
  }

  deletePendidikan() {
    this.loading = true;

    this.dosenService.deletePendidikan(this.item.idPendidikan).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menghapus pendidikan');
        this.loading = false;
      },
    });
  }

  /* =========================================
     KEAHLIAN CRUD
     ========================================= */

  createKeahlian() {
    this.loading = true;

    const payload = {
      namaKeahlian: this.formData.namaKeahlian,
      dosen: { idDosen: this.idDosen },
    };

    this.dosenService.createKeahlian(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menambah keahlian');
        this.loading = false;
      },
    });
  }

  updateKeahlian() {
    this.loading = true;

    this.dosenService
      .updateKeahlian(this.item.idKeahlian, this.formData)
      .subscribe({
        next: () => this.closeModal(true),
        error: () => {
          alert('Gagal mengubah keahlian');
          this.loading = false;
        },
      });
  }

  deleteKeahlian() {
    this.loading = true;

    this.dosenService.deleteKeahlian(this.item.idKeahlian).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menghapus keahlian');
        this.loading = false;
      },
    });
  }

  /* =========================================
     SERTIFIKASI CRUD
     ========================================= */

  createSertifikasi() {
    this.loading = true;

    const payload = {
      ...this.formData,
      dosen: { idDosen: this.idDosen },
    };

    this.dosenService.createSertifikasi(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menambah sertifikasi');
        this.loading = false;
      },
    });
  }

  updateSertifikasi() {
    this.loading = true;

    this.dosenService
      .updateSertifikasi(this.item.idSertifikasi, this.formData)
      .subscribe({
        next: () => this.closeModal(true),
        error: () => {
          alert('Gagal mengubah sertifikasi');
          this.loading = false;
        },
      });
  }

  deleteSertifikasi() {
    this.loading = true;

    this.dosenService.deleteSertifikasi(this.item.idSertifikasi).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menghapus sertifikasi');
        this.loading = false;
      },
    });
  }

  /* =========================================
     MATA KULIAH CRUD
     ========================================= */

  createMatkul() {
    this.loading = true;

    const payload = {
      ...this.formData,
      dosen: { idDosen: this.idDosen },
    };

    this.dosenService.createMatkul(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menambah mata kuliah');
        this.loading = false;
      },
    });
  }

  updateMatkul() {
    this.loading = true;

    this.dosenService
      .updateMatkul(this.item.idMk, this.formData)
      .subscribe({
        next: () => this.closeModal(true),
        error: () => {
          alert('Gagal mengubah mata kuliah');
          this.loading = false;
        },
      });
  }

  deleteMatkul() {
    this.loading = true;

    this.dosenService.deleteMatkul(this.item.idMk).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menghapus mata kuliah');
        this.loading = false;
      },
    });
  }

  /* =========================================
     LINK EKSTERNAL CRUD
     ========================================= */

  createLink() {
    this.loading = true;

    const payload = {
      ...this.formData,
      dosen: { idDosen: this.idDosen },
    };

    this.dosenService.createLink(payload).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menambah link');
        this.loading = false;
      },
    });
  }

  updateLink() {
    this.loading = true;

    this.dosenService
      .updateLink(this.item.idLink, this.formData)
      .subscribe({
        next: () => this.closeModal(true),
        error: () => {
          alert('Gagal mengubah link');
          this.loading = false;
        },
      });
  }

  deleteLink() {
    this.loading = true;

    this.dosenService.deleteLink(this.item.idLink).subscribe({
      next: () => this.closeModal(true),
      error: () => {
        alert('Gagal menghapus link');
        this.loading = false;
      },
    });
  }
}
