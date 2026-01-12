import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { DosenService } from '../../../services/dosen.service';
import { FilterDosenPipe } from '../../../pipes/filter-dosen.pipe';
import { AdminModalComponent } from '../../shared/admin-modal/admin-modal.component';

@Component({
    selector: 'app-dosen-list',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, FilterDosenPipe, AdminModalComponent],
    templateUrl: './dosen-list.component.html', // <--- Connects to external HTML
    styleUrls: ['./dosen-list.component.css']    // <--- Connects to external CSS
})
export class DosenListComponent implements OnInit {

    dosenList: any[] = [];
    loading = true;

    // Filters
    searchKeyword: string = '';
    selectedProdi: string = '';
    selectedStatus: string = '';

    // Modal State
    showModal = false;
    modalType: string | null = null;
    selectedDosenId: number = 0;

    constructor(private dosenService: DosenService) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.loading = true;
        forkJoin({
            dosenAll: this.dosenService.getAllDosen(),
            statusAll: this.dosenService.getStatusToday()
        }).subscribe({
            next: ({ dosenAll, statusAll }) => {
                const statusMap = new Map<any, any>();
                (statusAll || []).forEach((s: any) => {
                    const key = s.idDosen ?? s.id;
                    if (key != null) statusMap.set(key, s);
                });

                this.dosenList = (dosenAll || []).map((d: any) => {
                    const key = d.idDosen ?? d.id;
                    const status = statusMap.get(key) || {};
                    return { ...d, ...status };
                });
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading dosen', err);
                this.loading = false;
            }
        });
    }

    openDeleteModal(id: number) {
        this.selectedDosenId = id;
        this.modalType = 'delete-dosen';
        this.showModal = true;
    }

    closeModal(refresh: boolean) {
        this.showModal = false;
        this.selectedDosenId = 0;
        this.modalType = null;
        if (refresh) this.loadData();
    }

    resetFilters() {
        this.searchKeyword = '';
        this.selectedProdi = '';
        this.selectedStatus = '';
    }

    get prodiList() {
        return [...new Set(this.dosenList.map(d => d.prodi).filter(p => p))];
    }
}
