export interface MenuItem {
  title: string;
  icon?: string;
  link?: string;
  type: 'header' | 'link' | 'dropdown';
  active?: boolean;
  isOpen?: boolean;
  children?: MenuItem[];
  badge?: string;
  disabled?: boolean;
}

/**
 * ADMIN MENU STRUCTURE
 * Based on best practices from TailAdmin, Metronic, and university CMS patterns:
 * 
 * 1. Dashboard (Overview) - Always first
 * 2. Content Management (Berita/News) - High usage, top priority
 * 3. Academic Data (Dosen, Jadwal) - Core operations
 * 4. Student Affairs (Mahasiswa, Alumni, UKM)
 * 5. Admissions (PMB) - Seasonal but important
 * 6. Settings - Always last
 */
export const ADMIN_MENU: MenuItem[] = [
  // ========== MAIN ==========
  {
    title: 'MAIN',
    type: 'header'
  },
  {
    title: 'Dashboard',
    icon: 'fa-solid fa-house',
    link: '/admin/dashboard',
    type: 'link'
  },

  // ========== CONTENT (High Priority - Frequently Used) ==========
  {
    title: 'KONTEN',
    type: 'header'
  },
  {
    title: 'Berita',
    icon: 'fa-solid fa-newspaper',
    type: 'dropdown',
    isOpen: false,
    children: [
      { title: 'Semua Berita', link: '/admin/berita', type: 'link', disabled: true },
      { title: 'Tambah Berita', link: '/admin/berita/add', type: 'link', disabled: true },
    ]
  },
  {
    title: 'Halaman',
    icon: 'fa-solid fa-file-lines',
    link: '/admin/pages',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },

  // ========== ACADEMIC ==========
  {
    title: 'AKADEMIK',
    type: 'header'
  },
  {
    title: 'Dosen',
    icon: 'fa-solid fa-chalkboard-user',
    type: 'dropdown',
    isOpen: false,
    children: [
      { title: 'Semua Dosen', link: '/admin/dosen', type: 'link' },
      { title: 'Tambah Dosen', link: '/admin/dosen/add', type: 'link' },
    ]
  },
  {
    title: 'Presensi',
    icon: 'fa-solid fa-clipboard-check',
    link: '/admin/presensi',
    type: 'link'
  },
  {
    title: 'Jadwal',
    icon: 'fa-solid fa-calendar-days',
    link: '/admin/jadwal',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },

  // ========== STUDENT AFFAIRS ==========
  {
    title: 'KEMAHASISWAAN',
    type: 'header'
  },
  {
    title: 'Mahasiswa',
    icon: 'fa-solid fa-user-graduate',
    link: '/admin/mahasiswa',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },
  {
    title: 'Alumni',
    icon: 'fa-solid fa-graduation-cap',
    link: '/admin/alumni',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },
  {
    title: 'UKM',
    icon: 'fa-solid fa-users',
    link: '/admin/ukm',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },

  // ========== ADMISSIONS ==========
  {
    title: 'PENERIMAAN',
    type: 'header'
  },
  {
    title: 'PMB',
    icon: 'fa-solid fa-clipboard-list',
    type: 'dropdown',
    isOpen: false,
    children: [
      { title: 'Pendaftar', link: '/admin/pmb/pendaftar', type: 'link', disabled: true },
      { title: 'Gelombang', link: '/admin/pmb/gelombang', type: 'link', disabled: true },
    ]
  },

  // ========== SETTINGS (Always Last) ==========
  {
    title: 'PENGATURAN',
    type: 'header'
  },
  {
    title: 'Settings',
    icon: 'fa-solid fa-gear',
    link: '/admin/settings',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },
  {
    title: 'Users',
    icon: 'fa-solid fa-users-gear',
    link: '/admin/users',
    type: 'link',
    badge: 'Soon',
    disabled: true
  },
];