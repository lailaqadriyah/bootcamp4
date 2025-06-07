import React from "react";
import { useParams } from "react-router-dom"; //supaya halaman dinamis terhadap parameter yang digunakan

function ProfilPengguna() {
    const { username } = useParams(); //mengambil parameter username dari URL
    return (
        <div>
            <h1>Profile Pengguna</h1>
            <h2>Username: { username }</h2>
        </div>
    )
}

export default ProfilPengguna;