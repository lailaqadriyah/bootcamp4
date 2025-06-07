import React from 'react';

const dummyArtikel = [
    {
        id: 1,
        judul: "Artikel Pertama",
        konten: "Ini adalah konten dari artikel pertama."
    },
    {
        id: 2,
        judul: "Artikel Kedua",
        konten: "Ini adalah konten dari artikel kedua."
    },
    {
        id: 3,
        judul: "Artikel Ketiga",
        konten: "Ini adalah konten dari artikel ketiga."
    }
]


function Beranda () {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Daftar Artikel</h1>
            <ul className="list-disc pl-5">
                {dummyArtikel.map((artikel) => (
                    <li key={artikel.id} className="mb-2">
                        <h2 className="text-xl font-semibold">{artikel.judul}</h2>
                        <p>{artikel.konten}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Beranda;