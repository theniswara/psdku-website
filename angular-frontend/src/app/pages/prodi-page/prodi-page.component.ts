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
            image: 'assets/TI.png',
            link: '/prodi/teknologi-informasi'
        },
        {
            name: 'D-III Teknik Sipil',
            image: 'assets/SIPIL.png',
            link: '/prodi/teknik-sipil'
        },
        {
            name: 'D-IV Teknik Rekayasa Otomotif',
            image: 'assets/TRO.png',
            link: '/prodi/teknik-otomotif'
        },
        {
            name: 'D-III Akuntansi',
            image: 'assets/AK.png',
            link: '/prodi/akuntansi'
        }
    ];
}
