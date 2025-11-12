import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosenService } from '../../services/dosen.service';

@Component({
  selector: 'app-dosen-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dosen-list.component.html',
  styleUrls: ['./dosen-list.component.css']
})
export class DosenListComponent implements OnInit {

  dosenList: any[] = [];

  constructor(private dosenService: DosenService) {}

  ngOnInit(): void {
    this.loadDosen();
  }

  loadDosen(): void {
    this.dosenService.getAllDosenStatusToday().subscribe({
      next: (data) => this.dosenList = data,
      error: (err) => console.error('Error fetching data', err)
    });
  }
}
