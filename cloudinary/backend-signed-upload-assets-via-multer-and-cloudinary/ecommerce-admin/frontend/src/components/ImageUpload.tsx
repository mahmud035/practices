import React, { useState } from 'react';
import type { ProductImage } from '../api/products';

interface ImageGalleryProps {
  images: ProductImage[];
  productTitle: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  productTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg text-gray-400">
        No images available
      </div>
    );
  }

  const selectedImage = images[selectedIndex];

  // Generate Cloudinary transformation URLs
  const getThumbnailUrl = (url: string) => {
    return url.replace('/upload/', '/upload/w_100,h_100,c_fill,q_auto,f_auto/');
  };

  const getMainUrl = (url: string) => {
    return url.replace(
      '/upload/',
      '/upload/w_600,h_600,c_limit,q_auto,f_auto/'
    );
  };

  const getFullUrl = (url: string) => {
    return url.replace(
      '/upload/',
      '/upload/w_1200,h_1200,c_limit,q_auto,f_auto/'
    );
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setIsLightboxOpen(false);
  };

  return (
    <div
      className="relative outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Main Image */}
      <div
        className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in group"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={getMainUrl(selectedImage.url)}
          alt={`${productTitle} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/50 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
          Click to zoom
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={img.public_id}
              className={`shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden cursor-pointer p-0 bg-gray-100 transition-colors
                ${
                  index === selectedIndex
                    ? 'border-blue-500'
                    : 'border-transparent hover:border-blue-300'
                }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={getThumbnailUrl(img.url)}
                alt={`${productTitle} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 border-none rounded-full bg-white/90 cursor-pointer flex items-center justify-center shadow-md opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 border-none rounded-full bg-white/90 cursor-pointer flex items-center justify-center shadow-md opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getFullUrl(selectedImage.url)}
              alt={`${productTitle} - Full size`}
              className="max-w-full max-h-[90vh] object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  className="absolute top-1/2 -left-16 -translate-y-1/2 w-12 h-12 border-none rounded-full bg-white/10 cursor-pointer flex items-center justify-center hover:bg-white/20"
                  onClick={handlePrevious}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 -right-16 -translate-y-1/2 w-12 h-12 border-none rounded-full bg-white/10 cursor-pointer flex items-center justify-center hover:bg-white/20"
                  onClick={handleNext}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <button
              className="absolute -top-12 right-0 w-10 h-10 border-none rounded-full bg-white/10 cursor-pointer flex items-center justify-center hover:bg-white/20"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
