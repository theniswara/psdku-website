import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DosenService } from '../../services/dosen.service';

@Component({
  selector: 'app-dosen-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dosen-form.component.html',
  styleUrls: ['./dosen-form.component.css']
})
export class DosenFormComponent {

  selectedFile: File | null = null;
  previewImage: string | null = null;  // <-- FIXED

  loading = false;
  errorMsg = '';

  dosen = {
    namaDosen: '',
    nip: '',
    nidn: '',
    jabatan: '',
    prodi: '',
    email: '',
    alamatKantor: '',
    foto: '',
    website: '',
    username: '',
    password: ''
  };

  constructor(
    private dosenService: DosenService,
    private router: Router
  ) {}

  // ===========================
  // FIXED FILE PREVIEW FUNCTION
  // ===========================
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;  // <-- Show preview
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // ===========================
  // SUBMIT FORM
  // ===========================
  submit() {
    this.loading = true;
    this.errorMsg = '';

    this.dosenService.createDosen(this.dosen).subscribe({
      next: (res) => {
        const newId =
          res?.idDosen ??
          res?.id ??
          res?.data?.idDosen ??
          res?.data?.id;

        if (!newId) {
          this.errorMsg = 'ID dosen tidak ditemukan dari response backend.';
          this.loading = false;
          return;
        }

        // If no photo → redirect
        if (!this.selectedFile) {
          this.router.navigate(['/admin/dosen', newId]);
          return;
        }

        // Upload photo
        this.dosenService.uploadFoto(newId, this.selectedFile).subscribe({
          next: () => {
            this.router.navigate(['/admin/dosen', newId]);
          },
          error: (err) => {
            console.error(err);
            alert('Dosen berhasil dibuat, tapi upload foto gagal.');
            this.router.navigate(['/admin/dosen', newId]);
          }
        });

      },
      error: (err) => {
        this.errorMsg = err?.error || 'Gagal membuat dosen.';
        this.loading = false;
      }
    });
  }
}
