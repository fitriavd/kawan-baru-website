"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const heroImages = ["/images/hero/interior-1.jpg", "/images/hero/outdoor-1.jpg", "/images/hero/kolam-1.jpg"];

export default function HeroBanner({ title, subtitle, backgroundImage, ctaText = "Lihat Menu", ctaLink = "#menu" }: HeroBannerProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
            <Image
              src={image}
              alt={`Kawan Baru Coffee & Kitchen - ${index === 0 ? "Interior" : index === 1 ? "Outdoor" : "Kolam Ikan"}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Clean Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Main Title */}
        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg">Kawan Baru</h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light text-amber-100 tracking-wide">Coffee & Kitchen</h2>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-8"></div>

        {/* Description */}
        <p className="text-lg sm:text-xl mb-6 text-white/95 max-w-2xl mx-auto leading-relaxed">Racikan biji pilihan, suasana tropis-industrial, dan spot foto estetik</p>

        {/* Hours */}
        <div className="inline-flex items-center gap-2 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-10 text-sm font-medium" style={{ backgroundColor: "rgba(221, 76, 39, 0.9)" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Minggu-Kamis: 08.00-24.00 | Jumat-Sabtu: 08.00-01.00
        </div>

        {/* Simple CTA */}
        <div className="flex justify-center">
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 text-white hover:text-white border border-white/30 hover:border-white px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(21, 58, 79, 0.8)" }}
          >
            <span>Jelajahi Lebih Lanjut</span>
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full ${index === currentImage ? "bg-amber-400 w-8 h-2" : "bg-white/60 hover:bg-white/90 w-2 h-2"}`}
            aria-label={`Gambar ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce z-10">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
