import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Facility {
    name: string;
    description: string;
    capacity: string;
    hours: string;
    image: string;
}

interface FacilityCategory {
    title: string;
    items: Facility[];
}

@Component({
    selector: 'app-sarana-prasarana',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './sarana-prasarana.component.html',
    styleUrls: ['./sarana-prasarana.component.css']
})
export class SaranaPrasaranaComponent {

    facilities: FacilityCategory[] = [
        {
            title: 'Fasilitas Akademik',
            items: [
                {
                    name: 'Laboratorium Komputer',
                    description: 'Laboratorium komputer modern dengan spesifikasi tinggi untuk menunjang praktikum pemrograman, desain grafis, dan jaringan komputer.',
                    capacity: '30 Mahasiswa',
                    hours: '07.00 - 16.00 (Senin - Jumat)',
                    image: 'https://images.unsplash.com/photo-1598981493990-84a8c033703d?w=800&q=80'
                },
                {
                    name: 'Auditorium',
                    description: 'Ruang serbaguna untuk seminar, kuliah tamu, dan kegiatan mahasiswa dengan sistem audio visual lengkap.',
                    capacity: '100 Mahasiswa',
                    hours: '07.00 - 16.00 (Senin - Jumat)',
                    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80'
                },
                {
                    name: 'Ruang Kuliah',
                    description: 'Kelas yang nyaman dilengkapi AC dan LCD proyektor untuk mendukung proses belajar mengajar yang kondusif.',
                    capacity: '40 Mahasiswa',
                    hours: '07.00 - 18.00 (Senin - Jumat)',
                    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
                },
                {
                    name: 'Laboratorium Teknik',
                    description: 'Fasilitas praktikum untuk program studi teknik dengan peralatan standar industri yang lengkap.',
                    capacity: '20 Mahasiswa',
                    hours: '07.00 - 16.00 (Senin - Jumat)',
                    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
                }
            ]
        },
        {
            title: 'Fasilitas Penunjang',
            items: [
                {
                    name: 'Ruang Organisasi Mahasiswa',
                    description: 'Sekretariat untuk Himpunan Mahasiswa dan UKM berkumpul dan merencanakan kegiatan organisasi.',
                    capacity: '15 Mahasiswa',
                    hours: '07.00 - 18.00 (Disewakan)',
                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
                },
                {
                    name: 'Perpustakaan',
                    description: 'Koleksi buku lengkap, jurnal, dan area baca yang tenang untuk mendukung riset dan pembelajaran mandiri.',
                    capacity: '50 Mahasiswa',
                    hours: '07.00 - 16.00 (Senin - Jumat)',
                    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80'
                }
            ]
        },
        {
            title: 'Fasilitas Umum',
            items: [
                {
                    name: 'Kantin',
                    description: 'Area makan yang bersih dan higienis menyajikan berbagai pilihan makanan dan minuman dengan harga terjangkau.',
                    capacity: '60 Mahasiswa',
                    hours: '07.00 - 16.00 (Senin - Jumat)',
                    image: 'https://images.unsplash.com/photo-1565538420148-38687a7af7d6?w=800&q=80'
                },
                {
                    name: 'Musholla',
                    description: 'Tempat ibadah yang nyaman dan bersih untuk civitas akademika, dilengkapi tempat wudhu yang memadai.',
                    capacity: '30 Jamaah',
                    hours: '04.00 - 19.00 (Setiap Hari)',
                    image: 'https://images.unsplash.com/photo-1537202108838-e70985cb1d65?w=800&q=80'
                }
            ]
        }
    ];
}
