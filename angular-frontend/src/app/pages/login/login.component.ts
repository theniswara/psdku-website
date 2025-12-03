import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(private auth: AuthService, private router: Router) {}

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
        this.errorMsg = err.error || 'Login gagal';
      },
    });
  }

showPassword = false;
}
