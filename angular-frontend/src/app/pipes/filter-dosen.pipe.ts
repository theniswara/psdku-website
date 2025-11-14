import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDosen',
  standalone: true
})
export class FilterDosenPipe implements PipeTransform {
  transform(list: any[], keyword: string, prodi: string): any[] {
    if (!list) return [];

    let result = list;

    if (keyword) {
      result = result.filter(d =>
        d.namaDosen?.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (prodi) {
      result = result.filter(d => d.prodi === prodi);
    }

    return result;
  }
}
