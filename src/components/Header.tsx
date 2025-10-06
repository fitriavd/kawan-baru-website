"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Beranda", href: "/", type: "link" },
    { name: "Tentang", href: "#about", type: "scroll" },
    { name: "Menu", href: "#menu", type: "scroll" },
    { name: "Galeri", href: "#gallery", type: "scroll" },
    { name: "Kontak", href: "#contact", type: "scroll" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: any) => {
    if (item.type === "scroll") {
      const element = document.querySelector(item.href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`}
      style={{ backgroundColor: isScrolled ? "rgba(221, 76, 39, 0.95)" : "transparent" }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img src="/images/logo.jpg" alt="Kawan Baru Coffee & Kitchen Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-serif font-bold transition-colors duration-300 text-white">Kawan Baru</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigation.map((item) =>
                item.type === "link" ? (
                  <Link key={item.name} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group hover:scale-105 text-white/90 hover:text-white">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-white"></span>
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group hover:scale-105 text-white/90 hover:text-white"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-white"></span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281381739978"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: "#153a4f" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-white hover:text-white/80 hover:bg-white/10"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg rounded-b-lg" style={{ backgroundColor: "#dd4c27" }}>
              {navigation.map((item) =>
                item.type === "link" ? (
                  <Link key={item.name} href={item.href} className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                ) : (
                  <button key={item.name} onClick={() => handleNavClick(item)} className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                    {item.name}
                  </button>
                )
              )}
              <div className="pt-2">
                <a
                  href="https://wa.me/6281381739978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 w-full justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#153a4f" }}
                >
                  <span>📱</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
