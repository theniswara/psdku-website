import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dosen-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dosen-dashboard.component.html',
  styleUrls: ['./dosen-dashboard.component.css']
})
export class DosenDashboardComponent implements OnInit {

  dosen: any;
  presensi: any;
  loading = true;
today: string | number | Date | undefined;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dosen = this.auth.getLoggedInUser();

    if (this.dosen) {
      this.auth.getPresensiStatus(this.dosen.idDosen).subscribe({
        next: (res) => {
          this.presensi = res;
          this.loading = false;
        },
        error: () => {
          this.presensi = null;
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }

  logout() {
    this.auth.logoutBackend(this.dosen.idDosen).subscribe({
      next: () => {
        this.auth.logoutFrontend();
        this.router.navigate(['/login']);
      },
      error: () => {
        this.auth.logoutFrontend();
        this.router.navigate(['/login']);
      }
    });
  }
}
