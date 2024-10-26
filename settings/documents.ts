import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Pembuka",
    href: "/pembuka",  // Halaman awal
    heading: "Ayo Mulai",
    items: [
      {
        title: "Syarat dan Ketentuan",
        href: "/syarat-ketentuan",  // Halaman syarat dan ketentuan
      },
      {
        title: "Ketentuan Konten",
        href: "/ketentuan-konten",  // Halaman ketentuan konten
      },
      {
        title: "Update",
        href: "/update",  // Halaman perubahan dan pembaruan
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Ruang Lingkup",
    href: "/ruang-lingkup",  // Halaman informasi umum
    heading: "Dokumentasi Kerjasama",
    items: [
      {
        title: "Deskripsi Proyek",
        href: "/deskripsi-proyek",  // Halaman deskripsi proyek
      },
      {
        title: "Tujuan dan Sasaran",
        href: "/tujuan-sasaran",  // Halaman tujuan dan sasaran
      },
      {
        title: "Biaya dan Pembayaran",
        href: "/biaya-pembayaran",  // Halaman rincian biaya
      },
      {
        title: "Informasi Tambahan", // Menambahkan halaman Informasi Tambahan
        href: "/informasi-tambahan",  // Halaman Informasi Tambahan
      },
    ],
  },
  {
    title: "Kontak",
    href: "/kontak",  // Halaman kontak untuk informasi lebih lanjut
  },
];
