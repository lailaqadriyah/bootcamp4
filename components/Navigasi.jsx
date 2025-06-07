import React from 'react';
import { Link } from 'react-router-dom';

function Navigasi() {
    return (
    <nav>
        <ul className="list-disc">
            <li>
                <Link to="/">Beranda</Link>
            </li>
            <li>
                <Link to="/tentang">Tentang</Link>
            </li>
            <li>
                <Link to="/kontak">Kontak</Link>
            </li>
            <li>
                <Link to="/profil/username">Profil Pengguna</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Navigasi;