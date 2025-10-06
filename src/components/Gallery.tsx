"use client";

import React, { useState } from "react";
import Image from "next/image";
import cafeInfo from "@/data/cafe-info.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageId: string) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectedImageData = cafeInfo.cafe.gallery.find((img) => img.id === selectedImage);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Galeri Kawan Baru</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">Jelajahi suasana tropis-industrial yang memadukan kenyamanan dan estetika modern</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cafeInfo.cafe.gallery.map((image) => (
              <div key={image.id} className="group cursor-pointer" onClick={() => openModal(image.id)}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <div className="aspect-[4/3] relative">
                    <Image src={image.image} alt={image.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-amber-100 text-sm">{image.description}</p>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-lg text-amber-800">Rasakan langsung suasana nyaman di Kawan Baru Coffee & Kitchen</p>
          </div>
        </div>
      </section>

      {/* Modal for image zoom */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors z-10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-full">
              <Image src={selectedImageData.image} alt={selectedImageData.title} width={1200} height={800} className="w-full h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImageData.title}</h3>
              <p className="text-amber-200">{selectedImageData.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
