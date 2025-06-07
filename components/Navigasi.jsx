import React from "react";
import { Link } from "react-router-dom";

function Navigasi() {
  return (
    <nav className="bg-blue-900 text-white py-6 px-8 text-xl font-medium uppercase mb-6 mt-6 shadow-lg">
      <div className="flex justify-center items-center max-w-6xl mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang" className="hover:text-yellow-500">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/kontak" className="hover:text-yellow-500">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigasi;
