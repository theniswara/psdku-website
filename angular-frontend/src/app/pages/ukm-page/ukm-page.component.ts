import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Organisasi {
    id: string;
    name: string;
    shortName: string;
    description: string;
    logo: string;
}

@Component({
    selector: 'app-ukm-page',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './ukm-page.component.html',
    styleUrls: ['./ukm-page.component.css']
})
export class UkmPageComponent {
    organisasiList: Organisasi[] = [
        {
            id: 'bem',
            name: 'Badan Eksekutif Mahasiswa (BEM)',
            shortName: 'BEM',
            description: 'Badan Eksekutif Mahasiswa (BEM) merupakan organisasi mahasiswa tertinggi di tingkat institusi yang bertugas sebagai penghubung antara mahasiswa dan pihak akademik. BEM menjadwalkan pelayanan, mengadakan acara kemahasiswaan seperti kegiatan sosial, pelatihan karya tulis, dan lain-lain secara berkala.',
            logo: 'assets/BEM.png'
        },
        {
            id: 'hmti',
            name: 'Himpunan Mahasiswa Teknologi Informasi',
            shortName: 'HMTI',
            description: 'Himpunan Mahasiswa Teknologi Informasi yang melibatkan mahasiswa di bidang teknologi dan komputer. Fokus pada pengembangan ilmu pengetahuan, kreativitas, dan kompetensi mahasiswa. HMTI mengadakan kegiatan seperti pelatihan programming, webinar teknologi, dan lomba IT tingkat nasional.',
            logo: 'assets/HMTI.png'
        },
        {
            id: 'hms',
            name: 'Himpunan Mahasiswa Sipil',
            shortName: 'HMS',
            description: 'Himpunan Mahasiswa Sipil yang berfokus pada pengembangan mahasiswa di bidang teknik sipil, arsitektur, dan konstruksi. Mengadakan kegiatan seperti kunjungan proyek, seminar struktur, dan pelatihan AutoCAD untuk meningkatkan kompetensi teknis mahasiswa.',
            logo: 'assets/HMS.png'
        },
        {
            id: 'hmak',
            name: 'Himpunan Mahasiswa Akuntansi',
            shortName: 'HIMA AK',
            description: 'Himpunan Mahasiswa Akuntansi bertujuan untuk mengembangkan wawasan dan skill meliputi softskill dan hardskill untuk memaksimalkan potensi mahasiswa akuntansi. Kegiatan meliputi pelatihan pajak, seminar keuangan, dan lomba akuntansi tingkat regional.',
            logo: 'assets/HIMA AK.png'
        },
        {
            id: 'hmtro',
            name: 'Himpunan Mahasiswa Teknik Rekayasa Otomotif',
            shortName: 'HMTRO',
            description: 'Himpunan Mahasiswa Teknik Rekayasa Otomotif fokus pada pengembangan mahasiswa di bidang teknik otomotif dan rekayasa kendaraan. Mengadakan kegiatan workshop mesin, kompetisi modifikasi, dan kunjungan industri otomotif untuk memperluas wawasan mahasiswa.',
            logo: 'assets/HMTRO.png'
        },
        {
            id: 'mapala',
            name: 'Mahasiswa Pecinta Alam (MAPALA)',
            shortName: 'MAPALA',
            description: 'MAPALA adalah organisasi yang bergerak di bidang kegiatan alam bebas seperti pendakian gunung, camping, dan pelestarian lingkungan. Anggota MAPALA aktif dalam berbagai ekspedisi dan kegiatan sosial lingkungan.',
            logo: 'assets/MAPALA.png'
        },
        {
            id: 'wirausaha',
            name: 'Unit Kegiatan Mahasiswa Kewirausahaan',
            shortName: 'UKM Wirausaha',
            description: 'UKM Kewirausahaan menyediakan wadah bagi mahasiswa yang memiliki minat di bidang bisnis dan entrepreneurship. Mengadakan kegiatan pelatihan bisnis, bazar, dan mentoring untuk mengembangkan jiwa wirausaha mahasiswa.',
            logo: 'assets/Wirausaha.png'
        }
    ];
}
