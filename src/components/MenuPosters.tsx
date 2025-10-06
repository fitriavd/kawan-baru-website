import React, { useState } from "react";
import Image from "next/image";
import menuData from "@/data/menu.json";

const MenuPosters = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const openModal = (posterId: string) => {
    setSelectedPoster(posterId);
  };

  const closeModal = () => {
    setSelectedPoster(null);
  };

  const selectedPosterData = menuData.posters.find((p) => p.id === selectedPoster);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Menu Lengkap</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">Lihat koleksi lengkap menu kami dengan berbagai pilihan kopi, makanan, dan minuman segar</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menuData.posters.map((poster) => (
              <div key={poster.id} className="group cursor-pointer" onClick={() => openModal(poster.id)}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
                  <div className="aspect-[3/4] relative">
                    <Image src={poster.image} alt={poster.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{poster.title}</h3>
                      <p className="text-amber-100 mb-4">{poster.description}</p>
                      <div className="flex items-center gap-2 text-amber-200 font-medium">
                        <span>Lihat Detail</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Text */}
          <div className="text-center mt-12">
            <p className="text-lg text-amber-700">Lihat menu lengkap dan nikmati berbagai pilihan kopi serta makanan lezat</p>
          </div>
        </div>
      </section>

      {/* Modal for poster zoom */}
      {selectedPoster && selectedPosterData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors z-10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-full">
              <Image src={selectedPosterData.image} alt={selectedPosterData.title} width={800} height={1000} className="w-full h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedPosterData.title}</h3>
              <p className="text-amber-200">{selectedPosterData.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuPosters;
