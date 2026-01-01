import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface ProgramStudi {
    name: string;
    image: string;
    link: string;
}

@Component({
    selector: 'app-prodi-page',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './prodi-page.component.html',
    styleUrls: ['./prodi-page.component.css']
})
export class ProdiPageComponent {
    programs: ProgramStudi[] = [
        {
            name: 'D-III Teknologi Informasi',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
            link: '/prodi/teknologi-informasi'
        },
        {
            name: 'D-III Teknik Sipil',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
            link: '/prodi/teknik-sipil'
        },
        {
            name: 'D-IV Teknik Rekayasa Otomotif',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200',
            link: '/prodi/teknik-otomotif'
        },
        {
            name: 'D-III Akuntansi',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
            link: '/prodi/akuntansi'
        }
    ];
}
