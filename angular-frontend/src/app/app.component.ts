import { Component } from '@angular/core';
import { DosenListComponent } from './components/dosen-list/dosen-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DosenListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
}
