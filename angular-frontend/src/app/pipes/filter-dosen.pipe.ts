import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDosen',
  standalone: true
})
export class FilterDosenPipe implements PipeTransform {

  // Added 'status' parameter
  transform(items: any[], keyword: string, prodi: string, status?: string): any[] {
    if (!items) return [];

    const search = keyword ? keyword.toLowerCase() : '';
    const filterProdi = prodi ? prodi.toLowerCase() : '';
    const filterStatus = status ? status.toLowerCase() : '';

    return items.filter(item => {
      // 1. Keyword Search
      const nameMatch = item.namaDosen && item.namaDosen.toLowerCase().includes(search);
      const nidnMatch = item.nidn && item.nidn.toLowerCase().includes(search);
      const matchesKeyword = !search || nameMatch || nidnMatch;

      // 2. Prodi Filter
      const itemProdi = item.prodi ? item.prodi.toLowerCase() : '';
      const matchesProdi = !filterProdi || itemProdi === filterProdi;

      // 3. Status Filter (Hadir vs Offline)
      let matchesStatus = true;
      if (filterStatus) {
        if (filterStatus === 'offline') {
           // Matches if status is missing or empty
           matchesStatus = !item.statusPresensi; 
        } else {
           // Matches exact string 'Hadir', etc.
           matchesStatus = item.statusPresensi && item.statusPresensi.toLowerCase() === filterStatus;
        }
      }

      return matchesKeyword && matchesProdi && matchesStatus;
    });
  }
}