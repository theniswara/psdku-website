import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface BeritaItem {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
}

interface AgendaItem {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
}

@Component({
    selector: 'app-berita-page',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent],
    templateUrl: './berita-page.component.html',
    styleUrls: ['./berita-page.component.css']
})
export class BeritaPageComponent {
    searchQuery = '';
    selectedCategory = 'all';

    categories = [
        { value: 'all', label: 'Semua' },
        { value: 'akademik', label: 'Akademik' },
        { value: 'kemahasiswaan', label: 'Kemahasiswaan' },
        { value: 'pengumuman', label: 'Pengumuman' }
    ];

    featuredNews: BeritaItem = {
        id: 'featured-1',
        title: 'Polinema PSDKU Lumajang Jalin Kerjasama dengan Pemkab untuk Meningkatkan Pendidikan Tinggi',
        excerpt: 'Kerjasama ini bertujuan untuk meningkatkan kualitas pendidikan tinggi di wilayah Lumajang dan sekitarnya melalui berbagai program unggulan.',
        category: 'Akademik',
        date: '28 Des 2025',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800'
    };

    latestNews: BeritaItem[] = [
        {
            id: 'news-1',
            title: 'PSDKU Polimema Lumajang Adakan Kegiatan Pengabdian Masyarakat',
            excerpt: 'Tingkatkan Kualitas, Pendidikan dan Pengabdian Masyarakat.',
            category: 'Kemahasiswaan',
            date: '25 Des 2025',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400'
        },
        {
            id: 'news-2',
            title: 'PSDKU Polimema Lumajang Buka Pusat Karir Baru Bersama Link & Kemenaker',
            excerpt: 'Membantu mengembangkan sumber daya manusia.',
            category: 'Pengumuman',
            date: '20 Des 2025',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
        }
    ];

    agendaList: AgendaItem[] = [
        {
            id: 'agenda-1',
            title: 'Seminar Nasional: KNOW YOURSELF - Strategi Adaptif di Era Digital Untuk Sukses Karir di Bidang Informatika',
            date: '15 Januari 2026',
            time: '08:00 - 12:00',
            location: 'Aula Utama'
        },
        {
            id: 'agenda-2',
            title: 'Seminar Nasional: KNOW YOURSELF - Strategi Adaptif di Era Digital Untuk Sukses Karir di Bidang Informatika',
            date: '20 Januari 2026',
            time: '13:00 - 17:00',
            location: 'Ruang Seminar'
        },
        {
            id: 'agenda-3',
            title: 'Seminar Nasional: KNOW YOURSELF - Strategi Adaptif di Era Digital Untuk Sukses Karir di Bidang Informatika',
            date: '25 Januari 2026',
            time: '09:00 - 15:00',
            location: 'Gedung Serba Guna'
        }
    ];

    infoUpdates: BeritaItem[] = [
        {
            id: 'info-1',
            title: 'Informasi Penting: Hotspot server aktif. Join Selasai Tersedianya Internet Polinema Tahun 2025',
            excerpt: 'Silahkan menggunakan akun SIAKAD untuk login.',
            category: 'Info',
            date: '21 Agustus',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400'
        },
        {
            id: 'info-2',
            title: 'Pengumuman Lulus Pelayanan Akademik',
            excerpt: 'Silahkan cek status kelulusan Anda.',
            category: 'Info',
            date: '22 Agustus',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400'
        }
    ];
}
