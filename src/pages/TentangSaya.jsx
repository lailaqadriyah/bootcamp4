import React from "react";


function TentangSaya() {

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-blue-700 mb-2 text-center">
        Tentang Saya
      </h1>
      <div>
        <img src="/img/fotosaya.jpg" alt="" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 relative z-0 transition-all duration-300 hover:scale-110"/>
      </div>
     <p className="text-lg text-gray-700 text-center">
        <span className="font-semibold">Nama Lengkap:</span> Laila Qadriyah
      </p>
      <p className="text-lg text-gray-700 text-center">
        <span className="font-semibold">NIM:</span> 2311522022
      </p>
      <p className="text-lg text-gray-700 text-center">
        <span className="font-semibold">Divisi:</span> Web Programming
      </p>
    </div>
  );
}

export default TentangSaya;
