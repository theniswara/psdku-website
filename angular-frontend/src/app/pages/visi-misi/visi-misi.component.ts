import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-visi-misi',
    standalone: true,
    imports: [CommonModule, NavbarComponent, FooterComponent],
    templateUrl: './visi-misi.component.html',
    styleUrls: ['./visi-misi.component.css']
})
export class VisiMisiComponent {
    visi = 'Menjadi Lembaga Pendidikan Tinggi Vokasi yang Unggul dalam Persaingan Global';

    misi = [
        'Menyelenggarakan dan mengembangkan pendidikan tinggi vokasi yang unggul, inovatif, dan berdaya saing global',
        'Menyelenggarakan penelitian terapan dan pengabdian kepada masyarakat yang bermanfaat bagi pengembangan ilmu pengetahuan dan teknologi serta kesejahteraan masyarakat',
        'Menyelenggarakan sistem pengelolaan pendidikan dengan berdasar pada prinsip-prinsip tata kelola yang baik',
        'Mengembangkan kerja sama yang paling menguntungkan dengan berbagai pihak baik di dalam maupun di luar negeri pada bidang-bidang yang relevan'
    ];

    tujuan = [
        'Menghasilkan lulusan dengan hard skill dan soft skill yang unggul dan berdaya saing tinggi yang selaras dengan dunia kerja untuk mendukung pembelajaran seumur hidup',
        'Menghasilkan penelitian terapan dan pengabdian kepada masyarakat untuk meningkatkan kemajuan ilmu pengetahuan dan teknologi serta mendorong hilirisasi agar bermanfaat bagi dunia usaha dan industri, serta meningkatkan kesejahteraan masyarakat',
        'Mewujudkan sistem pengelolaan pendidikan yang efektif dan akuntabel dengan menerapkan prinsip-prinsip tata kelola yang baik agar dapat memberikan layanan yang maksimal bagi pemangku kepentingan',
        'Menghasilkan dan menguatkan kerja sama yang produktif dengan berbagai mitra di tingkat nasional maupun internasional'
    ];

    sasaran = [
        'Peningkatan kualitas dan akses perguruan tinggi vokasi berstandar internasional untuk mencetak lulusan berdaya saing global',
        'Penguatan kualitas pendidik dan tenaga kependidikan perguruan tinggi vokasi yang relevan dengan kebutuhan dunia kerja',
        'Peningkatan pusat teknologi terapan yang berfokus pada penelitian dan inovasi untuk mendorong kemajuan ilmu pengetahuan dan teknologi, integrasi pembelajaran, serta implementasi praktis',
        'Penyelenggaraan pengabdian masyarakat dari Civitas Akademika didukung fasilitas riset untuk mendukung pembangunan berkelanjutan',
        'Penyusunan tata kelola kampus yang modern, terintegrasi, dan adaptif melalui integrasi teknologi informasi dan komunikasi untuk efisiensi layanan Tridharma',
        'Pengembangan fasilitas pembelajaran dan sarana prasarana kampus untuk mendukung metode pembelajaran yang inovatif sesuai dengan kebutuhan global didukung dengan berbagai sumber pendanaan',
        'Pengembangan jejaring kerjasama internasional dalam rangka mewujudkan daya saing di tingkat global untuk mendukung sinergi dengan pendidikan, penelitian, dan pengabdian masyarakat'
    ];
}
