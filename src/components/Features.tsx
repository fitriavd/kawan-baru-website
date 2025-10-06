"use client";

import { useState } from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

function FeatureItem({ icon, title, description, index }: FeatureItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-center group p-8 rounded-2xl hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative mb-6">
        <div className={`text-5xl mb-4 transition-all duration-500 ${isHovered ? "scale-125 rotate-12" : "scale-100"}`}>{icon}</div>

        {/* Floating Background */}
        <div className={`absolute -inset-4 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-full blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}></div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>

      {/* Animated Border */}
      <div className={`w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-6 transition-all duration-500 ${isHovered ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}></div>
    </div>
  );
}

interface FeaturesProps {
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 relative">
              Kenapa Memilih Kawan Baru?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">Tempat yang sempurna untuk berbagai kebutuhan — dari ngobrol santai hingga produktivitas maksimal</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
