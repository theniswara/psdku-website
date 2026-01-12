import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  id = '';
  password = '';
  errorMsg = '';
  isDev = environment.showDevLogin;

  constructor(private auth: AuthService, private router: Router) { }

  doLogin() {
    const body = {
      id: this.id,
      password: this.password,
    };

    this.auth.login(body).subscribe({
      next: (res) => {
        this.auth.saveSession(res);

        setTimeout(() => {
          if (res.role === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (res.role === 'dosen') {
            this.router.navigate(['/dosen-dashboard']);
          }
        }, 0);
      },
      error: (err) => {
        // Handle different error response formats
        if (typeof err.error === 'string') {
          this.errorMsg = err.error;
        } else if (err.error?.message) {
          this.errorMsg = err.error.message;
        } else if (err.status === 0) {
          this.errorMsg = 'Tidak dapat terhubung ke server. Gunakan tombol "Dev Login" untuk testing lokal.';
        } else {
          this.errorMsg = 'Login gagal. Periksa NIDN dan password Anda.';
        }
      },
    });
  }

  showPassword = false;
  devLogin() {
    this.auth.loginDev('admin');
    this.router.navigate(['/admin-dashboard']);
  }
}
