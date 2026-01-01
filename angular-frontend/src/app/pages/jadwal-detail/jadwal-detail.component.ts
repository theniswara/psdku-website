import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface JadwalItem {
    mataKuliah: string;
    kode: string;
    dosen: string;
    ruangan: string;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    color: string;
}

interface KelasSchedule {
    kelas: string;
    jadwal: JadwalItem[];
}

interface ProdiScheduleData {
    id: string;
    fullName: string;
    semester: string;
    tahunAkademik: string;
    kelasSchedules: KelasSchedule[];
}

@Component({
    selector: 'app-jadwal-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, NavbarComponent, FooterComponent],
    templateUrl: './jadwal-detail.component.html',
    styleUrls: ['./jadwal-detail.component.css']
})
export class JadwalDetailComponent implements OnInit {
    prodi: ProdiScheduleData | null = null;
    activeKelas = '';
    searchQuery = '';
    days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    timeSlots = ['07:00 - 08:40', '08:40 - 10:20', '10:30 - 12:10', '13:00 - 14:40', '14:40 - 16:20', '16:30 - 18:10'];
    currentDay = '';

    private prodiData: ProdiScheduleData[] = [
        {
            id: 'teknologi-informasi',
            fullName: 'D-III Teknologi Informasi',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasSchedules: [
                {
                    kelas: '1A',
                    jadwal: [
                        { mataKuliah: 'Algoritma', kode: 'TI101', dosen: 'Drs. Gunawan', ruangan: 'LAB C', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-purple-500' },
                        { mataKuliah: 'Desain Grafis', kode: 'TI102', dosen: 'Ir. Suharto', ruangan: 'R1', hari: 'Senin', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-yellow-500' },
                        { mataKuliah: 'Agama', kode: 'MK001', dosen: 'Dr. Ahmad', ruangan: 'RS GLA', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-green-500' },
                        { mataKuliah: 'Praktikum Desain', kode: 'TI103', dosen: 'Ir. Suharto', ruangan: 'LAB B', hari: 'Selasa', jamMulai: '08:40', jamSelesai: '12:10', color: 'bg-blue-500' },
                        { mataKuliah: 'Bahasa Inggris', kode: 'MK002', dosen: 'Ms. Sarah', ruangan: 'R2', hari: 'Rabu', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-teal-500' },
                        { mataKuliah: 'Pancasila', kode: 'MK003', dosen: 'Dr. Budi', ruangan: 'R1', hari: 'Rabu', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-orange-500' },
                        { mataKuliah: 'K3', kode: 'TI104', dosen: 'Ir. Joko', ruangan: 'R3', hari: 'Rabu', jamMulai: '10:30', jamSelesai: '12:10', color: 'bg-red-500' },
                        { mataKuliah: 'Alpro-Lanjut', kode: 'TI105', dosen: 'Drs. Gunawan', ruangan: 'LAB A', hari: 'Kamis', jamMulai: '07:00', jamSelesai: '10:20', color: 'bg-indigo-500' },
                        { mataKuliah: 'MATDAS', kode: 'TI106', dosen: 'Dr. Siti', ruangan: 'R1', hari: 'Kamis', jamMulai: '10:30', jamSelesai: '12:10', color: 'bg-pink-500' }
                    ]
                },
                {
                    kelas: '1B',
                    jadwal: [
                        { mataKuliah: 'Desain Grafis', kode: 'TI102', dosen: 'Ir. Suharto', ruangan: 'R1', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-yellow-500' },
                        { mataKuliah: 'Agama', kode: 'MK001', dosen: 'Dr. Ahmad', ruangan: 'RS GLA', hari: 'Senin', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-green-500' },
                        { mataKuliah: 'Praktikum Desain', kode: 'TI103', dosen: 'Ir. Suharto', ruangan: 'LAB B', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '10:20', color: 'bg-blue-500' },
                        { mataKuliah: 'Pancasila', kode: 'MK003', dosen: 'Dr. Budi', ruangan: 'R1', hari: 'Rabu', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-orange-500' },
                        { mataKuliah: 'K3', kode: 'TI104', dosen: 'Ir. Joko', ruangan: 'R3', hari: 'Rabu', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-red-500' },
                        { mataKuliah: 'Algoritma', kode: 'TI101', dosen: 'Drs. Gunawan', ruangan: 'LAB C', hari: 'Kamis', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-purple-500' },
                        { mataKuliah: 'MATDAS', kode: 'TI106', dosen: 'Dr. Siti', ruangan: 'R1', hari: 'Kamis', jamMulai: '13:00', jamSelesai: '14:40', color: 'bg-pink-500' },
                        { mataKuliah: 'Bahasa Inggris', kode: 'MK002', dosen: 'Ms. Sarah', ruangan: 'R2', hari: 'Jumat', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-teal-500' }
                    ]
                },
                {
                    kelas: '1C',
                    jadwal: [
                        { mataKuliah: 'Desain Grafis', kode: 'TI102', dosen: 'Ir. Suharto', ruangan: 'R1', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-yellow-500' },
                        { mataKuliah: 'Agama', kode: 'MK001', dosen: 'Dr. Ahmad', ruangan: 'RS GLA', hari: 'Senin', jamMulai: '10:30', jamSelesai: '12:10', color: 'bg-green-500' },
                        { mataKuliah: 'K3', kode: 'TI104', dosen: 'Ir. Joko', ruangan: 'R3', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-red-500' },
                        { mataKuliah: 'Algoritma', kode: 'TI101', dosen: 'Drs. Gunawan', ruangan: 'LAB C', hari: 'Selasa', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-purple-500' },
                        { mataKuliah: 'Bahasa Inggris', kode: 'MK002', dosen: 'Ms. Sarah', ruangan: 'R2', hari: 'Rabu', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-teal-500' },
                        { mataKuliah: 'Pancasila', kode: 'MK003', dosen: 'Dr. Budi', ruangan: 'R1', hari: 'Rabu', jamMulai: '13:00', jamSelesai: '14:40', color: 'bg-orange-500' },
                        { mataKuliah: 'Praktikum Desain', kode: 'TI103', dosen: 'Ir. Suharto', ruangan: 'LAB B', hari: 'Kamis', jamMulai: '07:00', jamSelesai: '10:20', color: 'bg-blue-500' },
                        { mataKuliah: 'MATDAS', kode: 'TI106', dosen: 'Dr. Siti', ruangan: 'R1', hari: 'Jumat', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-pink-500' }
                    ]
                }
            ]
        },
        {
            id: 'teknik-sipil',
            fullName: 'D-III Teknik Sipil',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasSchedules: [
                {
                    kelas: '1A',
                    jadwal: [
                        { mataKuliah: 'Mekanika Teknik', kode: 'TS101', dosen: 'Dr. Hendra', ruangan: 'R1', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-blue-500' },
                        { mataKuliah: 'Gambar Teknik', kode: 'TS102', dosen: 'Ir. Sugeng', ruangan: 'LAB A', hari: 'Senin', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-green-500' },
                        { mataKuliah: 'Fisika', kode: 'MK004', dosen: 'Dr. Wati', ruangan: 'R2', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-purple-500' }
                    ]
                },
                {
                    kelas: '1B',
                    jadwal: [
                        { mataKuliah: 'Gambar Teknik', kode: 'TS102', dosen: 'Ir. Sugeng', ruangan: 'LAB A', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-green-500' },
                        { mataKuliah: 'Mekanika Teknik', kode: 'TS101', dosen: 'Dr. Hendra', ruangan: 'R1', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-blue-500' }
                    ]
                }
            ]
        },
        {
            id: 'teknik-otomotif',
            fullName: 'D-IV Teknik Rekayasa Otomotif',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasSchedules: [
                {
                    kelas: '1A',
                    jadwal: [
                        { mataKuliah: 'Mesin Otomotif', kode: 'TO101', dosen: 'Ir. Bambang', ruangan: 'Workshop', hari: 'Senin', jamMulai: '07:00', jamSelesai: '10:20', color: 'bg-red-500' },
                        { mataKuliah: 'Elektronika', kode: 'TO102', dosen: 'Dr. Eko', ruangan: 'LAB B', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-indigo-500' }
                    ]
                }
            ]
        },
        {
            id: 'akuntansi',
            fullName: 'D-III Akuntansi',
            semester: 'Semester Ganjil',
            tahunAkademik: '2025/2026',
            kelasSchedules: [
                {
                    kelas: '1A',
                    jadwal: [
                        { mataKuliah: 'Pengantar Akuntansi', kode: 'AK101', dosen: 'Dr. Lina', ruangan: 'R1', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-emerald-500' },
                        { mataKuliah: 'Ekonomi Mikro', kode: 'AK102', dosen: 'Dr. Tono', ruangan: 'R2', hari: 'Senin', jamMulai: '08:40', jamSelesai: '10:20', color: 'bg-amber-500' },
                        { mataKuliah: 'Perpajakan', kode: 'AK103', dosen: 'Dr. Rina', ruangan: 'R1', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-sky-500' }
                    ]
                },
                {
                    kelas: '1B',
                    jadwal: [
                        { mataKuliah: 'Ekonomi Mikro', kode: 'AK102', dosen: 'Dr. Tono', ruangan: 'R2', hari: 'Senin', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-amber-500' },
                        { mataKuliah: 'Pengantar Akuntansi', kode: 'AK101', dosen: 'Dr. Lina', ruangan: 'R1', hari: 'Selasa', jamMulai: '07:00', jamSelesai: '08:40', color: 'bg-emerald-500' }
                    ]
                }
            ]
        }
    ];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // Set current day
        const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        this.currentDay = dayNames[new Date().getDay()];

        this.route.params.subscribe(params => {
            const prodiId = params['prodiId'];
            this.prodi = this.prodiData.find(p => p.id === prodiId) || null;
            if (this.prodi && this.prodi.kelasSchedules.length > 0) {
                this.activeKelas = this.prodi.kelasSchedules[0].kelas;
            }
        });
    }

    get activeSchedule(): KelasSchedule | undefined {
        return this.prodi?.kelasSchedules.find(k => k.kelas === this.activeKelas);
    }

    get filteredJadwal(): JadwalItem[] {
        if (!this.activeSchedule) return [];
        if (!this.searchQuery) return this.activeSchedule.jadwal;
        const query = this.searchQuery.toLowerCase();
        return this.activeSchedule.jadwal.filter(j =>
            j.mataKuliah.toLowerCase().includes(query) ||
            j.dosen.toLowerCase().includes(query) ||
            j.kode.toLowerCase().includes(query)
        );
    }

    getScheduleForDayAndTime(day: string, timeSlot: string): JadwalItem | undefined {
        const [start] = timeSlot.split(' - ');
        return this.filteredJadwal.find(j => j.hari === day && j.jamMulai === start);
    }

    getDaySchedule(day: string): JadwalItem[] {
        return this.filteredJadwal.filter(j => j.hari === day);
    }
}
