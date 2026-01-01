import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface BeritaItem {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
}

@Component({
    selector: 'app-berita-list',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
    templateUrl: './berita-list.component.html',
    styleUrls: ['./berita-list.component.css']
})
export class BeritaListComponent {
    currentPage = 1;
    totalPages = 3;

    newsList: BeritaItem[] = [
        { id: 'news-1', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '25 Des 2025', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400' },
        { id: 'news-2', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '24 Des 2025', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400' },
        { id: 'news-3', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '23 Des 2025', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400' },
        { id: 'news-4', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '22 Des 2025', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400' },
        { id: 'news-5', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '21 Des 2025', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400' },
        { id: 'news-6', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '20 Des 2025', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400' },
        { id: 'news-7', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '19 Des 2025', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400' },
        { id: 'news-8', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '18 Des 2025', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400' },
        { id: 'news-9', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', excerpt: 'Mauris quis ipsum at ex lacule venenatis.', category: 'Teknologi', date: '17 Des 2025', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400' }
    ];

    get pages(): number[] {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    goToPage(page: number) {
        this.currentPage = page;
    }
}
