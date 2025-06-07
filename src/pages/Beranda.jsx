import React from "react";
import { Link } from "react-router-dom";

const daftarArtikel = [
  {
    id: 1,
    judul: "Web Dasar HTML & CSS",
    konten: "Pengenalan struktur dasar HTML dan styling menggunakan CSS untuk membangun tampilan web."
  },
  {
    id: 2,
    judul: "Pengenalan Dasar Dasar React Js",
    konten: "Penjelasan tentang komponen, JSX, dan cara membuat aplikasi sederhana menggunakan React."
  },
  {
    id: 3,
    judul: "React State dan Event",
    konten: "Membahas bagaimana mengelola data (state) dalam komponen dan menangani event seperti klik."
  },
  {
    id: 4,
    judul: "React-Router-Dom",
    konten: "Cara membuat navigasi antar halaman di React menggunakan react-router-dom."
  },
  {
    id: 5,
    judul: "Lifecycle pada React",
    konten: "Penjelasan tahapan hidup komponen React dan bagaimana memanfaatkannya dengan hook."
  },
  {
    id: 6,
    judul: "Form dan Validasi",
    konten: "Cara membuat form di React serta melakukan validasi input pengguna."
  }
];


function Beranda() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Daftar Artikel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {daftarArtikel.map((artikel) => (
          <Link to={`/artikel/${artikel.id}`} key={artikel.id}>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200">
              <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                {artikel.judul}
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {artikel.konten}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Beranda;
