import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isSubMenuOpen = false;
  constructor(private router: Router) {}

  scrollToFooter(event: Event) {
    event.preventDefault();
    // close mobile menu if open
    this.isMenuOpen = false;

    const targetId = 'hubungi';
    const doScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    // First try to scroll on the current page. If the target doesn't exist,
    // navigate to home and scroll there (preserves previous behavior).
    if (!doScroll()) {
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => setTimeout(doScroll, 120));
      } else {
        // nothing found and we're on home (rare) — no-op
      }
    }
  }
}
