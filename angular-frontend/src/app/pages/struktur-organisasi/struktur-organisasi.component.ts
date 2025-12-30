import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';

interface Leader {
    name: string;
    nip: string;
    position: string;
    photo: string;
    education: string[];
    career: string[];
}

@Component({
    selector: 'app-struktur-organisasi',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './struktur-organisasi.component.html',
    styleUrls: ['./struktur-organisasi.component.css'],
    animations: [
        trigger('fadeAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
            ])
        ])
    ]
})
export class StrukturOrganisasiComponent {
    activeTab: 'struktur' | 'pimpinan' = 'struktur';

    leaders: Leader[] = [
        {
            name: 'Ir. Supriatna Adhisuwignjo, ST., MT.',
            nip: '19710108 199903 1 001',
            position: 'Direktur',
            photo: 'assets/pimpinan/direktur.png', // Placeholder
            education: [
                'S2 - Teknik Elektro, Universitas Brawijaya',
                'S1 - Teknik Elektro, Universitas Brawijaya'
            ],
            career: [
                'Direktur Polinema (2021 - Sekarang)',
                'Wakil Direktur I (2018 - 2021)',
                'Ketua Jurusan Teknik Elektro'
            ]
        },
        {
            name: 'Assoc. Prof. Ratih Indri Hapsari, ST., MT., Ph.D.',
            nip: '19760706 200003 2 001',
            position: 'Wakil Direktur I',
            photo: 'assets/pimpinan/wadir1.png',
            education: [
                'Ph.D. - Water Resources Engineering, Kyoto University',
                'S2 - Water Resources Engineering, Kyoto University'
            ],
            career: [
                'Wakil Direktur I Bidang Akademik',
                'Staf Ahli Wakil Direktur I',
                'Dosen Teknik Sipil'
            ]
        },
        {
            name: 'Jaswadi, SE., M.Si., Ak., CA., CPA.',
            nip: '19741126 199903 1 001',
            position: 'Wakil Direktur II',
            photo: 'assets/pimpinan/wadir2.png',
            education: [
                'S2 - Ilmu Akuntansi, Universitas Gadjah Mada',
                'S1 - Akuntansi, Universitas Brawijaya'
            ],
            career: [
                'Wakil Direktur II Bidang Umum dan Keuangan',
                'Kepala Unit Satuan Pengawasan Internal',
                'Dosen Akuntansi'
            ]
        },
        {
            name: 'Dr. Eng. Anggit Grahito Wicaksono, ST., MT.',
            nip: '19790520 200501 1 001',
            position: 'Wakil Direktur III',
            photo: 'assets/pimpinan/wadir3.png',
            education: [
                'Ph.D. - Electrical Engineering, Kyushu University',
                'S2 - Teknik Elektro, ITS Surabaya'
            ],
            career: [
                'Wakil Direktur III Bidang Kemahasiswaan',
                'Kepala UPT Komputer',
                'Dosen Teknik Kimia'
            ]
        }
    ];

    setActiveTab(tab: 'struktur' | 'pimpinan') {
        this.activeTab = tab;
    }
}
