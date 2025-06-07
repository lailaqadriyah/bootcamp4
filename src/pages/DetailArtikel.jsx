import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";

const isiArtikel = {
    '1': 'React Dasar',
    '2': 'useEffect dan useState',
    '3': 'React Router'
   
}
function DetailArtikel() {
    const { id } = useParams();
    const artikel = isiArtikel[id];
    return (
        <div>
            <h1>
                Detail Artikel
            </h1>
            {
                artikel ? (
                    <ReactMarkDown>{artikel}</ReactMarkDown>
                ) : (
                    <p>Artikel tidak ditemukan</p>
                )
            }
        </div>
    )
}

export default DetailArtikel;