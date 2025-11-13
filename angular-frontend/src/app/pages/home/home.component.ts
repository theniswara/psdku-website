import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
