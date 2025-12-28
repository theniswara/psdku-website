import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-tentang-kami',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './tentang-kami.component.html',
    styleUrls: ['./tentang-kami.component.css']
})
export class TentangKamiComponent {
    // Director information
    direktur = {
        nama: 'Ir. Supriatna Adhisuwignjo, ST., MT.',
        nip: 'NIP. 19710108 199903 1 001',
        foto: 'assets/direktur.png' // Placeholder - user should add real image
    };

    // Campus profile paragraphs
    profilParagraphs = [
        'Polinema adalah institusi pendidikan tinggi vokasi yang terletak di kota Malang. Malang adalah kota terbesar kedua di Jawa Timur,Indonesia. Malang merupakan tempat yang nyaman untuk belajar karena udaranya yang sejuk dan populasi yang tidak begitu padat (sekitar 800 ribu penduduk). Di Malang terdapat banyak sekolah, universitas dan institusi pendidikan lainnya dengan kualitas yang bagus. Selain itu, Malang merupakan tempat yang mudah dijangkau. Kota ini dapat ditempuh dalam waktu 1 jam dari bandara interasional Juanda, Surabaya. Fasilitas transportasi umum dalam kota yang bisa digunakan untuk menuju ke Polinema juga sangat memadai.',
        'Polinema terus berkembang untuk menjadi institusi pendidikan vokasi yang superior dan siap bersaing di dunia global. Polinema memiliki sistem pendidikan yang inovatif dan ketrampilan kompetitif yang secara global dibutuhkan oleh industri, badan pemerintahan dan masyarakat. Polinema mendukung penelitian terapan dan pengabdian masyarakat dalam bidang ilmu pengetahuan dan pengembangan teknologi serta kesejahteraan masyarakat. Polinema juga berkomitmen untuk melaksanakan sistem manajemen pendidikan dengan prinsip pemerintahan yang baik. Polinema juga yakin bahwa atmosfer akademik yang kondusif sangat penting untuk memperbaiki kualitas sumber daya manusia dan pengajaran yang mendukung belajar sepanjang hayat dan pertumbuhan jiwa wirausaha.'
    ];

    // Director's welcome message paragraphs
    sambutanParagraphs = [
        'Assalamualaikum Wr.Wb.',
        'Selamat datang di Politeknik Negeri Malang, kampus yang mencetak calon tenaga kerja yang profesional dan berdaya saing global. Sebagai salah satu perguruan tinggi vokasi terbaik di Indonesia, Politeknik Negeri Malang atau yang dikenal dengan POLINEMA berupaya untuk menghadirkan pendidikan yang berkualitas dan berkontribusi dalam mencerdaskan anak bangsa. Dengan pendidikan hard skill dan soft skill, pendekatan link and match serta sistem pendidikan yang menyajikan project-based learning dan case method, POLINEMA menghasilkan lulusan dengan pengetahuan, keterampilan serta sikap/attitude yang sesuai dengan kebutuhan industri.',
        'POLINEMA memiliki 7 Jurusan dengan 46 Program Studi pada jenjang Diploma II, Diploma III, Diploma IV dan Magister Terapan di kampus utama dan tiga kampus PSDKU yang ada di Kota Kediri, Kabupaten Lumajang dan Kabupaten Pamekasan.',
        'Dalam rangka mencapai visi nya menjadi lembaga pendidikan tinggi vokasi yang unggul dalam persaingan global, POLINEMA saat ini memiliki 8 Program Studi kelas internasional dan 10 Program Studi Double Degree yang bekerja sama dengan Management and Science University (MSU) Malaysia, Shenyang Jianzu University (SJU) China, Shandong University of Science and Technology (SDUST) China, dan Shenyang Aerospace University (SAU) China.',
        'POLINEMA juga memiliki jaringan kerja sama yang luas di dalam dan luar negeri dengan institusi pendidikan, lembaga pemerintah, industri, organisasi non pemerintah dan berbagai pihak lainnya. Bersama mitranya, POLINEMA bersinergi dalam berbagai program, diantaranya pembelajaran, penyusunan kurikulum, magang mahasiswa, dosen industri, penelitian, pengabdian masyarakat, beasiswa dan rekrutmen.',
        'POLINEMA mengundang anda untuk merasakan pengalaman akademis di  salah satu kampus hijau versi UI GreenMetric World University Ranking dengan lingkungan yang dinamis dan ramah.',
        'Wassalamualaikum warahmatulahi wabarakatuh'
    ];
}
