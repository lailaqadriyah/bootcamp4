import React from "react";
import { useParams } from "react-router-dom";

const isiArtikel = {
  1: `Materi ini membahas dasar-dasar HTML yang merupakan fondasi dari semua halaman web. Topik dimulai dari struktur tag HTML seperti doctype, html, head, dan body. Elemen-elemen penting seperti heading (h1 hingga h6) digunakan untuk memberi struktur hierarkis pada teks. Paragraf (p), gambar (img), dan link (a) diperkenalkan sebagai elemen dasar dalam menyajikan konten. Selain itu, materi juga mencakup pengenalan CSS (Cascading Style Sheets) yang digunakan untuk mempercantik tampilan halaman web. Pembahasan meliputi penggunaan selector, properti styling seperti warna, margin, padding, serta bagaimana cara menghubungkan CSS ke HTML baik melalui inline, internal, maupun eksternal stylesheet. Dengan pemahaman ini, pengguna dapat mulai membangun halaman web yang menarik dan terstruktur dengan baik.`,

  2: `Dasar-dasar React mencakup pengenalan terhadap JSX (JavaScript XML), sebuah ekstensi sintaks yang memungkinkan penulisan elemen HTML di dalam JavaScript. Ini membuat kode menjadi lebih mudah dipahami dan dikelola. Materi juga menjelaskan struktur komponen React, baik komponen fungsional maupun class-based, serta konsep props (properties) yang digunakan untuk mengirim data dari komponen induk ke komponen anak. Selain itu, pengguna akan belajar bagaimana membangun antarmuka pengguna berbasis komponen yang dapat digunakan ulang, menjaga keterpisahan logika dan tampilan. Pemahaman mengenai cara kerja virtual DOM dan bagaimana React secara efisien melakukan re-render berdasarkan perubahan data juga dibahas untuk memberikan pemahaman menyeluruh terhadap kerangka kerja ini.`,

  3: `State dan Event dalam React memungkinkan komponen untuk memiliki perilaku interaktif dan dinamis. State adalah objek yang menyimpan data internal komponen, yang dapat berubah seiring waktu dan memicu pembaruan tampilan secara otomatis. Event, seperti onClick, onChange, dan onSubmit, memungkinkan komponen merespons aksi pengguna secara langsung. Materi ini menjelaskan cara menginisialisasi state dengan hook useState, memodifikasi nilainya, dan menanganinya melalui fungsi event handler. Contoh aplikasi meliputi tombol yang menghitung klik, formulir yang menangkap input pengguna, dan kondisi yang menyesuaikan tampilan berdasarkan interaksi. Konsep ini sangat penting untuk membangun aplikasi modern yang responsif dan user-friendly.`,

  4: `React Router Dom adalah library pihak ketiga yang memungkinkan navigasi antar halaman dalam aplikasi React tanpa harus melakukan reload halaman. Dengan konsep Single Page Application (SPA), pengguna dapat berpindah antar tampilan dengan cepat dan mulus. Materi ini mencakup penggunaan komponen seperti BrowserRouter sebagai pembungkus utama, Route untuk mendefinisikan jalur dan komponen yang ditampilkan, serta Link dan NavLink untuk membuat tautan navigasi. Selain itu, dibahas pula penggunaan parameter dinamis dalam URL, nested routes untuk membuat hierarki rute, serta teknik redirect dan navigasi programatis. Pemahaman tentang React Router sangat penting dalam membangun aplikasi web berskala besar dengan banyak tampilan atau halaman.`,

  5: `Lifecycle React menggambarkan tahapan-tahapan yang dialami sebuah komponen mulai dari saat dibuat (mounting), diperbarui (updating), hingga dihapus (unmounting). Dalam React versi modern yang berbasis fungsi, manajemen siklus hidup dilakukan menggunakan hook seperti useEffect. Hook ini memungkinkan eksekusi kode efek samping (side effects), seperti pengambilan data dari API, manipulasi DOM, atau integrasi dengan library eksternal, tepat setelah render terjadi atau saat dependensi tertentu berubah. Materi ini juga membahas bagaimana membatalkan efek samping dengan clean-up function untuk mencegah memory leak. Pemahaman lifecycle sangat penting untuk mengontrol perilaku komponen dalam aplikasi React yang kompleks dan real-time.`,

  6: `Form dalam React dirancang untuk mengelola input pengguna secara terkontrol (controlled component), di mana nilai input dikaitkan langsung dengan state komponen. Materi ini membahas cara binding input menggunakan atribut value dan event handler onChange untuk memperbarui state secara real-time. Validasi dilakukan dengan memeriksa nilai input terhadap aturan tertentu sebelum data dikirim, seperti memastikan email valid atau password memiliki panjang minimum. Selain validasi manual, pengguna juga diperkenalkan pada penggunaan library pihak ketiga seperti Formik dan Yup untuk mempermudah penanganan form dan validasi yang lebih kompleks. Form dalam React adalah aspek penting untuk interaksi pengguna, seperti login, pendaftaran, dan pengisian data.`  
};


function DetailArtikel() {
  const { id } = useParams();
  const artikel = isiArtikel[id];
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detail Artikel</h1>
      {artikel ? (
        <div className="space-y-2">
          {artikel.split("\n").map((line, index) => (
            <p key={index} className="text-gray-800">
              {line}
            </p>
          ))}
        </div>
      ) : (
        <p>Artikel tidak ditemukan.</p>
      )}
    </div>
  );
}

export default DetailArtikel;
