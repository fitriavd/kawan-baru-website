"use client";

import HeroBanner from "@/components/HeroBanner";
import Header from "@/components/Header";
import MenuPosters from "@/components/MenuPosters";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

// Import data
import cafeInfo from "@/data/cafe-info.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroBanner />

        <Features features={cafeInfo.cafe.features} />

        <section id="gallery">
          <Gallery />
        </section>

        <div id="menu">
          <MenuPosters />
        </div>

        {/* About Section */}
        <section id="about" className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-amber-700 font-medium text-sm">Tentang Kami</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cerita di Balik <span className="text-amber-600">{cafeInfo.cafe.name}</span>
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="text-amber-600 font-semibold">{cafeInfo.cafe.name}</span> adalah café yang kembali hits setelah renovasi, memadukan konsep{" "}
                    <span className="font-semibold text-gray-900">tropis dan industrial</span> yang unik di Bogor.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Terletak strategis di Jl. Pajajaran Indah V, Baranangsiang — kami menyediakan ruang nyaman untuk nongkrong, WFC, meeting, atau acara kecil dengan fasilitas lengkap.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: "❄️", label: "AC Sejuk", desc: "Ruangan ber-AC" },
                    { icon: "📶", label: "WiFi Kencang", desc: "Internet stabil" },
                    { icon: "📸", label: "Photobooth", desc: "Cetak foto kenangan" },
                    { icon: "🐠", label: "Kolam Ikan", desc: "Suasana alami" },
                    { icon: "🎵", label: "Suara Kawan", desc: "Live music" },
                    { icon: "🅿️", label: "Parkir Luas", desc: "Area parkir" },
                  ].map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors duration-300">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.label}</h4>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative">
                  <div className="aspect-square bg-amber-100 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                    <img src="/images/hero/interior-1.jpg" alt="Interior Kawan Baru Coffee & Kitchen" className="w-full h-full object-cover" />
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Buka Setiap Hari</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-2xl shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                    <div className="text-center">
                      <div className="font-bold text-lg">4.8⭐</div>
                      <div className="text-xs opacity-90">Rating Pengunjung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-20 max-w-6xl mx-auto">
              <div className="bg-amber-50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Tips Berkunjung</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {cafeInfo.cafe.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">{index + 1}</div>
                        <p className="text-gray-700 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Kunjungi Kami</h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">Temukan lokasi kami dan nikmati pengalaman ngopi yang tak terlupakan</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d106.809!3d-6.586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMTMuNiJTIDEwNsKwNDgnMzIuNCJF!5e0!3m2!1sen!2sid!4v1633072800000!5m2!1sen!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kawan Baru Coffee & Kitchen"
                />
              </div>

              {/* WhatsApp CTA */}
              <div className="text-center">
                <a
                  href={`https://wa.me/${cafeInfo.cafe.address.whatsapp}?text=${encodeURIComponent("Halo! Saya ingin reservasi meja di Kawan Baru Coffee & Kitchen.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:opacity-90"
                  style={{ backgroundColor: "#dd4c27" }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
                  </svg>
                  Chat untuk Reservasi
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
