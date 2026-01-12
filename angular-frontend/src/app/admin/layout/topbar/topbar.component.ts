import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Adjust path if needed

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topbar.component.html', // ✅ Links to external HTML
  styleUrls: ['./topbar.component.css']    // ✅ Links to external CSS
})
export class TopbarComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter<void>();

  currentUser: any = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // Get real user data from your AuthService
    this.currentUser = this.auth.getLoggedInUser();
  }

  onLogout() {
    this.auth.logout();
  }
}