import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const session = localStorage.getItem('userSession');

    if (!session) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}
