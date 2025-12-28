import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { QuickAccessComponent } from '../../components/quick-access/quick-access.component';
import { HomeAboutComponent } from '../../components/home-about/home-about.component';
import { HomeProdiComponent } from "../../components/home-prodi/home-prodi.component";
import { HomeBeritaComponent } from '../../components/home-berita/home-berita.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FooterComponent, QuickAccessComponent, HomeAboutComponent, HomeProdiComponent, HomeBeritaComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
