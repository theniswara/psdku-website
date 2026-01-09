export interface MenuItem {
  title: string;
  icon?: string;
  link?: string;
  type: 'header' | 'link' | 'dropdown';
  active?: boolean;
  isOpen?: boolean; // For dropdown state
  children?: MenuItem[];
}

export const ADMIN_MENU: MenuItem[] = [
  {
    title: 'MAIN MENU',
    type: 'header'
  },
  {
    title: 'Dashboard',
    icon: 'fa-solid fa-chart-pie',
    link: '/admin/dashboard',
    type: 'link'
  },
  {
    title: 'AKADEMIK',
    type: 'header'
  },
  {
    title: 'Data Dosen',
    icon: 'fa-solid fa-chalkboard-user',
    type: 'dropdown',
    isOpen: false,
    children: [
      { title: 'Semua Dosen', link: '/admin/dosen', type: 'link' },
      { title: 'Tambah Dosen', link: '/admin/dosen/add', type: 'link' },
      { title: 'Jadwal Mengajar', link: '/admin/dosen/jadwal', type: 'link' }
    ]
  },
  {
    title: 'Rekap Presensi',
    icon: 'fa-solid fa-clipboard-check',
    link: '/admin/presensi',
    type: 'link'
  },
  {
    title: 'Mahasiswa',
    icon: 'fa-solid fa-user-graduate',
    type: 'dropdown',
    isOpen: false,
    children: [
      { title: 'Data Mahasiswa', link: '/admin/mahasiswa', type: 'link' },
      { title: 'Nilai & IPK', link: '/admin/mahasiswa/nilai', type: 'link' }
    ]
  },
  {
    title: 'PENGATURAN',
    type: 'header'
  },
  {
    title: 'Manajemen User',
    icon: 'fa-solid fa-users-gear',
    link: '/admin/users',
    type: 'link'
  }
];