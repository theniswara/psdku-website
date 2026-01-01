import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface ProdiData {
    id: string;
    name: string;
    fullName: string;
    description: string;
    image: string;
    kompetensi: string[];
    profil: string[];
    peluangKerja: string;
}

@Component({
    selector: 'app-prodi-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './prodi-detail.component.html',
    styleUrls: ['./prodi-detail.component.css']
})
export class ProdiDetailComponent implements OnInit {
    prodi: ProdiData | null = null;

    private prodiList: ProdiData[] = [
        {
            id: 'teknologi-informasi',
            name: 'Teknologi Informasi',
            fullName: 'D-III Teknologi Informasi',
            description: 'Program studi D-III Teknologi Informasi merupakan salah satu dari program studi di Jurusan Teknologi Informasi yang dirancang secara khusus guna menghasilkan tenaga ahli di bidang teknologi informasi yang memiliki kemampuan dalam pengembangan perangkat lunak, manajemen basis data, jaringan komputer, dan keamanan siber.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
            kompetensi: [
                'Mampu merancang dan mengembangkan aplikasi berbasis web dan mobile',
                'Memiliki kemampuan dalam administrasi jaringan dan sistem operasi',
                'Mampu mengelola dan menganalisis basis data',
                'Memiliki kemampuan dalam keamanan siber dasar'
            ],
            profil: [
                'Web Developer & Mobile Developer',
                'Database Administrator',
                'Network Administrator',
                'IT Support Specialist',
                'Quality Assurance Tester'
            ],
            peluangKerja: 'Lulusan Program Studi D-III Teknologi Informasi telah berhasil terserap di dunia usaha dan industri, diantaranya perusahaan bidang IT, startup teknologi, perbankan, e-commerce, instansi pemerintah, BUMN, dan berbagai sektor industri lainnya.'
        },
        {
            id: 'teknik-sipil',
            name: 'Teknik Sipil',
            fullName: 'D-III Teknik Sipil',
            description: 'Program studi D-III Teknik Sipil merupakan program studi yang mencetak tenaga profesional di bidang konstruksi dan infrastruktur. Lulusan dibekali kemampuan dalam perencanaan, pelaksanaan, dan pengawasan proyek konstruksi gedung, jalan, jembatan, dan infrastruktur lainnya.',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
            kompetensi: [
                'Mampu membuat gambar teknik dan RAB konstruksi',
                'Memiliki kemampuan dalam pengawasan pelaksanaan proyek',
                'Mampu melakukan pengujian material konstruksi',
                'Memiliki kemampuan dalam perencanaan struktur bangunan'
            ],
            profil: [
                'Pengawas Proyek Konstruksi',
                'Estimator & Quantity Surveyor',
                'Drafter Konstruksi',
                'Teknisi Laboratorium Material',
                'Site Engineer'
            ],
            peluangKerja: 'Lulusan Program Studi D-III Teknik Sipil telah berhasil terserap di dunia usaha dan industri, diantaranya perusahaan kontraktor, konsultan perencanaan, BUMN konstruksi, Kementerian PUPR, dan Dinas Pekerjaan Umum.'
        },
        {
            id: 'teknik-otomotif',
            name: 'Teknik Rekayasa Otomotif',
            fullName: 'D-IV Teknik Rekayasa Otomotif',
            description: 'Program studi D-IV Teknik Rekayasa Otomotif mencetak lulusan yang memiliki keahlian dalam perancangan, perawatan, dan perbaikan kendaraan bermotor. Kurikulum berbasis industri dengan praktik langsung menggunakan peralatan modern.',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200',
            kompetensi: [
                'Mampu melakukan diagnosis dan perbaikan sistem kendaraan',
                'Memiliki kemampuan dalam perancangan komponen otomotif',
                'Mampu mengoperasikan peralatan bengkel modern',
                'Memiliki kemampuan dalam manajemen bengkel otomotif'
            ],
            profil: [
                'Teknisi Otomotif Senior',
                'Quality Control Automotive',
                'Service Advisor',
                'Parts Analyst',
                'Workshop Manager'
            ],
            peluangKerja: 'Lulusan Program Studi D-IV Teknik Rekayasa Otomotif telah berhasil terserap di industri manufaktur otomotif, dealer resmi, bengkel authorized, Industri aftermarket, dan wirausaha di bidang otomotif.'
        },
        {
            id: 'akuntansi',
            name: 'Akuntansi',
            fullName: 'D-III Akuntansi',
            description: 'Program studi D-III Akuntansi menghasilkan tenaga profesional di bidang akuntansi yang mampu menyusun laporan keuangan, melakukan audit, perpajakan, dan analisis keuangan. Lulusan dibekali sertifikasi kompetensi yang diakui industri.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
            kompetensi: [
                'Mampu menyusun laporan keuangan sesuai standar akuntansi',
                'Memiliki kemampuan dalam perpajakan dan pelaporan SPT',
                'Mampu mengoperasikan software akuntansi modern',
                'Memiliki kemampuan dalam analisis laporan keuangan'
            ],
            profil: [
                'Staff Akuntansi & Finance',
                'Tax Officer',
                'Internal Auditor',
                'Accounts Payable/Receivable Specialist',
                'Financial Analyst'
            ],
            peluangKerja: 'Lulusan Program Studi D-III Akuntansi telah berhasil terserap di berbagai sektor industri, perbankan, Kantor Akuntan Publik, konsultan pajak, BUMN, instansi pemerintah, dan wirausaha.'
        }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const prodiId = params['id'];
            this.prodi = this.prodiList.find(p => p.id === prodiId) || null;
        });
    }
}
