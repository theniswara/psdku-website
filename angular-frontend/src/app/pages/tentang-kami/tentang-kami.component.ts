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
        'Polinema adalah institusi pendidikan tinggi vokasi yang terletak di kota Malang. Malang adalah kota terbesar kedua di Jawa Timur Indonesia. Malang merupakan tempat yang nyaman untuk belajar karena udaranya yang sejuk dan populasi yang tidak begitu padat (sekitar 850 ribu penduduk). Di Malang terdapat banyak website, universitas dan institusi pendidikan berbasis dengan kualitas yang bajar. Selain itu, Malang merupakan tempat yang mudah dijangkau. Kota ini dapat ditempuh dalam waktu 1 jam dari bandara Internasional Juanda, Surabaya. Fasilitas transportasi umum dalam kota yang bisa digunakan untuk menuju ke Polinema juga sangat memadai.',
        'Polinema terus berkembang untuk menjadi institusi pendidikan vokasi yang sesuaiter dan siap bersaing di era global. Polinema memiliki sistem pendidikan yang inovatif dan keterampilan kompetitif yang secara global dibutuhkan oleh industri, calon pemerintahan dan masyarakat. Polinema mendukung penelitian terapan dan pengabdian masyarakat dalam bidang ilmu pengetahuan dan pengembangan teknologi guna keperlehteraan masyarakat. Polinema juga berkomitmen untuk melakukan sistem manajemen pendidikan dengan prinsip pemerintahan yang baik. Polinema juga selalu menawarkan akademik yang kondusif tampat pelatihan untuk memberikakan budaya mutu melalui dan pengajaran yang mendukung diskusi sepanjang hayat dan perlindungan jiwa wirausaha.'
    ];

    // Director's welcome message paragraphs
    sambutanParagraphs = [
        'Assalamualaikum Wr Wb.',
        'Selamat datang di Politeknik Negeri Malang, kampus yang mencetak calon tenaga kerja yang profesional dan berdaya saing global. Sebagai salah satu perguruan tinggi vokasi terbaik di Indonesia, Politeknik Negeri Malang atau yang dikenal dengan POLINEMA berpegang untuk menghasilkan pendidikan yang berkualitas dan berkomitmen dalam mencerahkankota serta bangsa. Dengan pendidikan hard skill dan soft skill, penyampaian riset dan praktik serta akses pendidikan project-based learning and case method, POLINEMA menghasilkan lulusan dengan pengetahuan, keterampilan serta etos kerja/attitude yang sesuai dengan kebutuhan industri.',
        'POLINEMA memiliki 7 Jurusan dengan 48 Program Studi pada jenjang Diploma II, Diploma III, Diploma IV Sarjana Magister Terapan di kampus utama dan tiga kampus PSDKU yang ada di Kota Kediri, Kabupaten Lumajang dan Kabupaten Pamekasan.',
        'Dalam rangka mencapai visi misi menjadi lembaga pendidikan tinggi vokasi yang unggul dalam persaingan global, POLINEMA saat ini memiliki 8 Program Studi kelas Internasional dan 10 Program Studi Double Degree yang bekerja sama dengan Management and Science University (MSU) Malaysia, Shenzhen Jiuzhou University (SJU) China, Shandong University of Science and Technology (SDUST) China, dan Shenyang Aerospace University (SAU) China.',
        'POLINEMA juga memiliki jaringan kerja sama yang luas di dalam dan luar negeri dengan institusi pendidikan, lembaga pemerintah, industri, organisasi dan primer nirlaba dan lembaga pihak lainnya. Bersama mitra ini, POLINEMA bersinergi dan berbagai program, di antaranya pertukaran pelajar/ham, penyusunan kurikulum, magang mahasiswa, dosen industri, penelitian, pengabdian masyarakat, beasiswa dan rekrutmen.',
        'POLINEMA menaruhnya moto untuk mewujudkan penerapan akademik di seluruh satu kampus hijau serta LI Greenmetric World University Ranking dengan lingkungan yang bersih dan ramah.',
        'Wassalamualaikum warahmatulahi wabarakatuh'
    ];
}
