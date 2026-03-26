import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const next = () => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden bg-slate-100 aspect-video">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <HiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <HiChevronRight size={24} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
