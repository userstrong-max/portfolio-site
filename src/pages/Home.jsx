import React from 'react';
import { items } from '../data/items';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Masonry Layout Container */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
        {items.map((item) => (
          <a
            key={item.id} 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-inside-avoid group cursor-pointer block"
          >
            {/* Image Container */}
            <div className="overflow-hidden bg-stone-100 mb-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full h-auto object-cover ${item.height} transition-opacity duration-500 hover:opacity-95`}
              />
            </div>
            
            {/* Text / Metadata under Image */}
            <div className="pl-1">
              <h2 className="text-sm font-medium text-stone-900 mb-1">{item.title}</h2>
              <p className="text-xs text-stone-500 leading-relaxed max-w-sm">
                {item.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
