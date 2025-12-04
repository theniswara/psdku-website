import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DosenService } from '../../services/dosen.service';

@Component({
  selector: 'app-dosen-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dosen-form.component.html',
  styleUrls: ['./dosen-form.component.css']
})
export class DosenFormComponent {

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

        this.router.navigate(['/admin/dosen', newId]);
      },
      error: (err) => {
        this.errorMsg = err?.error || 'Gagal membuat dosen.';
        this.loading = false;
      }
    });
  }
}
