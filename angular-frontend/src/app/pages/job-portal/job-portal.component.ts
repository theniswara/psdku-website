import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface JobItem {
    id: string;
    title: string;
    company: string;
    position: string;
    location: string;
    period: string;
    logo: string;
    type: 'kerja' | 'magang';
}

@Component({
    selector: 'app-job-portal',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent],
    templateUrl: './job-portal.component.html',
    styleUrls: ['./job-portal.component.css']
})
export class JobPortalComponent {
    searchQuery = '';
    selectedLocation = '';
    selectedSpecialization = '';

    locations = ['Semua Lokasi', 'Malang', 'Lumajang', 'Surabaya', 'Jakarta'];
    specializations = ['Semua Spesialisasi', 'IT & Software', 'Engineering', 'Akuntansi', 'Administrasi'];

    jobListings: JobItem[] = [
        {
            id: 'job-1',
            title: 'IT PROGRAMMER',
            company: 'PT WIJAYA PLYWOOD INDUSTRI',
            position: 'PHP Developer',
            location: 'Jl. Dr. Cipto 18 No. 16 Bedali Lawang, Malang Jawa Timur',
            period: '12 September - 31 Oktober 2025',
            logo: 'https://via.placeholder.com/100x100?text=WPI',
            type: 'magang'
        },
        {
            id: 'job-2',
            title: 'Junior Programmer',
            company: 'JTECH SOLUSINDO',
            position: 'Junior Programmer',
            location: 'Jl. TELUK ETNA I / 14?, Malang Jawa Timur',
            period: '12 September - 31 Oktober 2025',
            logo: 'https://via.placeholder.com/100x100?text=JT',
            type: 'kerja'
        },
        {
            id: 'job-3',
            title: 'Web Development',
            company: 'PT TERA KREASI SEMESTA',
            position: 'Web Developer',
            location: 'Jl. Dr. Cipto 18 No. 16 Bedali Lawang, Malang Jawa Timur',
            period: '12 September - 21 Oktober 2025',
            logo: 'https://via.placeholder.com/100x100?text=TKS',
            type: 'magang'
        },
        {
            id: 'job-4',
            title: 'MAINTENANCE ENGINEERING STAFF',
            company: 'BINUS Group',
            position: 'MAINTENANCE ENGINEERING STAFF',
            location: 'Malang Jawa Timur',
            period: '12 September - 21 Oktober 2025',
            logo: 'https://via.placeholder.com/100x100?text=BN',
            type: 'kerja'
        },
        {
            id: 'job-5',
            title: 'IT PROGRAMMER',
            company: 'PT WIJAYA PLYWOOD INDUSTRI',
            position: 'PHP Developer',
            location: 'Jl. Dr. Cipto 18 No. 16 Bedali Lawang, Malang Jawa Timur',
            period: '12 September - 31 Oktober 2025',
            logo: 'https://via.placeholder.com/100x100?text=WPI',
            type: 'magang'
        },
        {
            id: 'job-6',
            title: 'Junior Programmer',
            company: 'JTECH SOLUSINDO',
            position: 'Junior Programmer',
            location: 'Jl. TELUK ETNA I / 14?, Malang Jawa Timur',
            period: '12 September - 31 Oktober 2025',
            logo: 'https://via.placeholder.com/100x100?text=JT',
            type: 'kerja'
        }
    ];

    currentPage = 1;
    totalPages = 3;

    get pages(): number[] {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    goToPage(page: number) {
        this.currentPage = page;
    }
}
