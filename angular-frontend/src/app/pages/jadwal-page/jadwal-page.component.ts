import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface ProdiScheduleInfo {
    id: string;
    name: string;
    fullName: string;
    semester: string;
    tahunAkademik: string;
    kelasCount: number;
    image: string;
}

@Component({
    selector: 'app-jadwal-page',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent],
    templateUrl: './jadwal-page.component.html',
    styleUrls: ['./jadwal-page.component.css']
})
export class JadwalPageComponent {
    selectedSemester = 'ganjil';
    selectedTahun = '2025/2026';
    searchQuery = '';

    semesters = [
        { value: 'ganjil', label: 'Semester Ganjil' },
        { value: 'genap', label: 'Semester Genap' }
    ];

    tahunAkademik = [
        { value: '2025/2026', label: 'TA 2025/2026' },
        { value: '2024/2025', label: 'TA 2024/2025' }
    ];

    prodiList: ProdiScheduleInfo[] = [
        {
            id: 'teknologi-informasi',
            name: 'Teknologi Informasi',
            fullName: 'D-III Teknologi Informasi',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasCount: 3,
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
        },
        {
            id: 'teknik-sipil',
            name: 'Teknik Sipil',
            fullName: 'D-III Teknik Sipil',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasCount: 2,
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800'
        },
        {
            id: 'teknik-otomotif',
            name: 'Teknik Rekayasa Otomotif',
            fullName: 'D-IV Teknik Rekayasa Otomotif',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasCount: 2,
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800'
        },
        {
            id: 'akuntansi',
            name: 'Akuntansi',
            fullName: 'D-III Akuntansi',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasCount: 3,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800'
        }
    ];

    get filteredProdi() {
        if (!this.searchQuery) return this.prodiList;
        const query = this.searchQuery.toLowerCase();
        return this.prodiList.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.fullName.toLowerCase().includes(query)
        );
    }
}
