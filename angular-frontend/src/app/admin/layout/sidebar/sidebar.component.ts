import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ADMIN_MENU, MenuItem } from '../admin-menu';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isCollapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();

  menuItems = ADMIN_MENU;
  currentUser: any = null;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkActiveMenu();
      }
    });
  }

  ngOnInit(): void {
    this.currentUser = this.auth.getLoggedInUser();
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved) {
      this.isCollapsed = saved === 'true';
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
    localStorage.setItem('sidebar-collapsed', String(this.isCollapsed));
  }

  toggleDropdown(item: MenuItem) {
    item.isOpen = !item.isOpen;
  }

  onDropdownClick(item: MenuItem) {
    if (!this.isCollapsed) {
      this.toggleDropdown(item);
    }
  }

  hasEnabledChildren(item: MenuItem): boolean {
    return item.children?.some(child => !child.disabled) || false;
  }

  checkActiveMenu() {
    const currentUrl = this.router.url;
    this.menuItems.forEach(item => {
      if (item.children) {
        const hasActiveChild = item.children.some(child => currentUrl.includes(child.link || ''));
        if (hasActiveChild) {
          item.isOpen = true;
        }
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}