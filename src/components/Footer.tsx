export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#153a4f" }}>
      {/* Menggunakan warna brand navy blue */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <img src="/images/logo.jpg" alt="Kawan Baru Coffee & Kitchen Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Kawan Baru</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">Coffee & Kitchen dengan konsep tropis-industrial di jantung Bogor.</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Alamat</h4>
            <div className="text-white/90 text-sm space-y-1">
              <p>Jl. Pajajaran Indah V No. R5</p>
              <p>(RT 01/RW 11)</p>
              <p>Baranangsiang, Bogor Timur</p>
              <p>Kota Bogor, Jawa Barat 16143</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Jam Operasional</h4>
            <div className="text-white/90 text-sm space-y-1">
              <div className="flex justify-between">
                <span>Minggu - Kamis:</span>
                <span>08.00 - 24.00</span>
              </div>
              <div className="flex justify-between">
                <span>Jumat - Sabtu:</span>
                <span>08.00 - 01.00</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Hubungi Kami</h4>

            <div className="space-y-3">
              <p className="text-white/90 text-sm">📞 0813-8173-9978</p>

              {/* Social Links */}
              <div>
                <p className="text-white mb-2 text-sm font-medium">Ikuti Kami:</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/kawanbaru.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    style={{ backgroundColor: "#dd4c27" }}
                    title="Instagram @kawanbaru.co"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/80 text-sm">© 2025 Kawan Baru Coffee & Kitchen. All rights reserved.</p>
            <p className="text-white/60 text-xs">Made with ❤️ by Fitria Vuspita Dewi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
