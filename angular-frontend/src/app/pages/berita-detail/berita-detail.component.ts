import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface BeritaDetail {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    image: string;
    imageCaption: string;
    tags: string[];
}

interface RelatedArticle {
    id: string;
    title: string;
    image: string;
    date: string;
}

@Component({
    selector: 'app-berita-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './berita-detail.component.html',
    styleUrls: ['./berita-detail.component.css']
})
export class BeritaDetailComponent implements OnInit {
    berita: BeritaDetail | null = null;
    relatedArticles: RelatedArticle[] = [];

    private beritaData: BeritaDetail[] = [
        {
            id: 'featured-1',
            title: 'Polinema PSDKU Lumajang Jalin Kerjasama dengan Pemkab untuk Meningkatkan Pendidikan Tinggi',
            subtitle: 'Langkah strategis untuk memperkuat ekosistem pendidikan vokasi di Kabupaten Lumajang dan sekitarnya',
            content: `
        <p class="lead">Politeknik Negeri Malang (Polinema) PSDKU Lumajang telah resmi menjalin kerjasama strategis dengan Pemerintah Kabupaten Lumajang dalam upaya meningkatkan kualitas pendidikan tinggi di wilayah tersebut.</p>
        
        <p>Penandatanganan nota kesepahaman ini dilakukan oleh Direktur Polinema bersama Bupati Lumajang, yang disaksikan oleh berbagai pejabat dan stakeholder terkait. Kerjasama ini mencakup berbagai aspek, mulai dari pengembangan kurikulum berbasis kebutuhan industri lokal hingga program magang dan penempatan kerja bagi lulusan.</p>

        <figure>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Penandatanganan MoU" />
          <figcaption>Proses penandatanganan nota kesepahaman antara Polinema dan Pemkab Lumajang</figcaption>
        </figure>
        
        <h2>Fokus Utama Kerjasama</h2>
        
        <p>Kerjasama ini dirancang untuk menjawab tantangan kebutuhan sumber daya manusia yang kompeten di era industri 4.0. Dengan kolaborasi yang erat antara perguruan tinggi dan pemerintah daerah, diharapkan dapat tercipta lulusan yang siap kerja dan berkontribusi pada pembangunan ekonomi lokal.</p>

        <blockquote>
          <p>"Kerjasama ini merupakan langkah strategis untuk memastikan bahwa lulusan PSDKU Lumajang tidak hanya memiliki kemampuan akademik, tetapi juga keterampilan praktis yang dibutuhkan industri."</p>
          <cite>— Direktur Polinema</cite>
        </blockquote>
        
        <p>Beberapa poin utama dalam kerjasama ini meliputi:</p>

        <ul>
          <li><strong>Pengembangan Kurikulum</strong> — Program studi yang relevan dengan kebutuhan industri lokal akan dikembangkan bersama dengan masukan dari pelaku usaha dan pemerintah daerah.</li>
          <li><strong>Beasiswa Daerah</strong> — Penyediaan beasiswa bagi mahasiswa berprestasi dari Kabupaten Lumajang untuk mendukung akses pendidikan tinggi.</li>
          <li><strong>Program Magang</strong> — Penempatan mahasiswa di BUMD dan perusahaan mitra untuk pengalaman kerja nyata.</li>
          <li><strong>Pengabdian Masyarakat</strong> — Kegiatan pengabdian untuk mendukung pembangunan daerah di berbagai sektor.</li>
        </ul>
        
        <h2>Dampak yang Diharapkan</h2>

        <p>Dengan kerjasama ini, diharapkan PSDKU Lumajang dapat menjadi motor penggerak pengembangan sumber daya manusia berkualitas di wilayah Lumajang dan sekitarnya. Target utama adalah meningkatkan angka partisipasi kasar pendidikan tinggi (APK-PT) di Kabupaten Lumajang dari 18% menjadi 25% dalam lima tahun ke depan.</p>

        <p>Pemerintah Kabupaten Lumajang juga berkomitmen untuk mendukung pengembangan infrastruktur kampus dan fasilitas pembelajaran yang modern. Hal ini sejalan dengan visi Lumajang sebagai kabupaten yang maju dalam bidang pendidikan dan sumber daya manusia.</p>

        <h2>Langkah Selanjutnya</h2>

        <p>Setelah penandatanganan MoU, kedua belah pihak akan segera membentuk tim teknis untuk menyusun rencana aksi yang lebih detail. Program-program prioritas akan dimulai pada semester genap tahun akademik 2025/2026.</p>
      `,
            category: 'Akademik',
            date: '28 Desember 2025',
            readTime: '5 menit baca',
            author: {
                name: 'Ahmad Fauzi',
                role: 'Tim Humas PSDKU',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
            },
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1400',
            imageCaption: 'Suasana acara penandatanganan kerjasama di Aula Utama PSDKU Lumajang',
            tags: ['Kerjasama', 'Akademik', 'Pemerintah Daerah', 'Lumajang']
        },
        {
            id: 'news-1',
            title: 'PSDKU Polimema Lumajang Adakan Kegiatan Pengabdian Masyarakat',
            subtitle: 'Program pengabdian masyarakat untuk meningkatkan kualitas hidup warga sekitar',
            content: `
        <p class="lead">Dalam rangka menjalankan Tri Dharma Perguruan Tinggi, PSDKU Polinema Lumajang mengadakan kegiatan pengabdian masyarakat di Desa Sukodono, Kecamatan Lumajang.</p>

        <p>Kegiatan ini melibatkan dosen dan mahasiswa dari berbagai program studi untuk memberikan pelatihan dan pendampingan kepada masyarakat setempat.</p>
        
        <h2>Program yang Dilaksanakan</h2>
        
        <p>Beragam program dilaksanakan dalam kegiatan ini, termasuk pelatihan keterampilan digital, pendampingan UMKM, dan edukasi kesehatan masyarakat.</p>
      `,
            category: 'Kemahasiswaan',
            date: '25 Desember 2025',
            readTime: '3 menit baca',
            author: {
                name: 'Siti Nurhaliza',
                role: 'Tim Media PSDKU',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
            },
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400',
            imageCaption: 'Mahasiswa PSDKU memberikan pelatihan kepada warga',
            tags: ['Pengabdian', 'Kemahasiswaan', 'Desa']
        }
    ];

    private relatedData: RelatedArticle[] = [
        { id: 'news-1', title: 'PSDKU Polimema Lumajang Adakan Kegiatan Pengabdian Masyarakat', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400', date: '25 Des 2025' },
        { id: 'news-2', title: 'Wisuda Perdana PSDKU Lumajang Dihadiri Ratusan Tamu', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400', date: '20 Des 2025' },
        { id: 'news-3', title: 'Seminar Nasional Teknologi Informasi dan Komunikasi', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', date: '18 Des 2025' }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.berita = this.beritaData.find(b => b.id === id) || null;
            this.relatedArticles = this.relatedData.filter(r => r.id !== id).slice(0, 3);
        });
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
