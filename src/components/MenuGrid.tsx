"use client";

import Image from "next/image";
import { useState } from "react";

interface MenuCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export function MenuCard({ name, price, description, image, category }: MenuCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{category}</span>
        </div>

        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full bg-white/90 backdrop-blur-sm text-amber-800 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">Lihat Detail</button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">{name}</h3>
          <span className="text-amber-600 font-bold text-lg bg-amber-50 px-3 py-1 rounded-full">{price}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Rating Stars Placeholder */}
        <div className="flex items-center mt-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500 ml-2">4.8</span>
        </div>
      </div>
    </div>
  );
}

interface MenuGridProps {
  title: string;
  description?: string;
  items: Array<{
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
  }>;
  showAll?: boolean;
  maxItems?: number;
}

export default function MenuGrid({ title, description, items, showAll = false, maxItems = 6 }: MenuGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filteredItems, setFilteredItems] = useState(items);

  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category === category));
    }
  };

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, maxItems);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="menu">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 relative">
              {title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </h2>
          </div>
          {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">{description}</p>}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, index) => (
            <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <MenuCard name={item.name} price={item.price} description={item.description} image={item.image} category={item.category} />
            </div>
          ))}
        </div>

        {!showAll && filteredItems.length > maxItems && (
          <div className="text-center mt-12">
            <a
              href="/menu"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Lihat Menu Lengkap
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
