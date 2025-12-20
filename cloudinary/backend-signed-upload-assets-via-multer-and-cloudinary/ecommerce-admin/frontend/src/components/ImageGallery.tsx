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
      <div className="image-gallery__placeholder">No images available</div>
    );
  }

  const selectedImage = images[selectedIndex];

  // Generate Cloudinary transformation URLs
  const getThumbnailUrl = (url: string) => {
    // Insert transformation before /upload/
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
    <div className="image-gallery" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Main Image */}
      <div
        className="image-gallery__main"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={getMainUrl(selectedImage.url)}
          alt={`${productTitle} - Image ${selectedIndex + 1}`}
          className="image-gallery__main-img"
        />
        <div className="image-gallery__zoom-hint">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="image-gallery__thumbnails">
          {images.map((img, index) => (
            <button
              key={img.public_id}
              className={`image-gallery__thumbnail ${
                index === selectedIndex
                  ? 'image-gallery__thumbnail--active'
                  : ''
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={getThumbnailUrl(img.url)}
                alt={`${productTitle} - Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Navigation arrows for main image */}
      {images.length > 1 && (
        <>
          <button
            className="image-gallery__nav image-gallery__nav--prev"
            onClick={handlePrevious}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="image-gallery__nav image-gallery__nav--next"
            onClick={handleNext}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getFullUrl(selectedImage.url)}
              alt={`${productTitle} - Full size`}
              className="lightbox__img"
            />

            {images.length > 1 && (
              <>
                <button
                  className="lightbox__nav lightbox__nav--prev"
                  onClick={handlePrevious}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="lightbox__nav lightbox__nav--next"
                  onClick={handleNext}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="lightbox__close"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="lightbox__counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .image-gallery {
          position: relative;
          outline: none;
        }

        .image-gallery__main {
          position: relative;
          aspect-ratio: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #f3f4f6;
          cursor: zoom-in;
        }

        .image-gallery__main-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .image-gallery__zoom-hint {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          font-size: 0.75rem;
          border-radius: 0.25rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-gallery__main:hover .image-gallery__zoom-hint {
          opacity: 1;
        }

        .image-gallery__zoom-hint svg {
          width: 1rem;
          height: 1rem;
        }

        .image-gallery__thumbnails {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .image-gallery__thumbnail {
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          border: 2px solid transparent;
          border-radius: 0.375rem;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          background: #f3f4f6;
          transition: border-color 0.2s;
        }

        .image-gallery__thumbnail:hover {
          border-color: #93c5fd;
        }

        .image-gallery__thumbnail--active {
          border-color: #3b82f6;
        }

        .image-gallery__thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-gallery__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-gallery:hover .image-gallery__nav {
          opacity: 1;
        }

        .image-gallery__nav:hover {
          background: white;
        }

        .image-gallery__nav svg {
          width: 1.25rem;
          height: 1.25rem;
          color: #374151;
        }

        .image-gallery__nav--prev {
          left: 0.5rem;
        }

        .image-gallery__nav--next {
          right: 0.5rem;
        }

        .image-gallery__placeholder {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          border-radius: 0.5rem;
          color: #9ca3af;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox__content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .lightbox__img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox__nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox__nav svg {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .lightbox__nav--prev {
          left: -4rem;
        }

        .lightbox__nav--next {
          right: -4rem;
        }

        .lightbox__close {
          position: absolute;
          top: -3rem;
          right: 0;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox__close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox__close svg {
          width: 1.25rem;
          height: 1.25rem;
          color: white;
        }

        .lightbox__counter {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .lightbox__nav--prev {
            left: 0.5rem;
          }
          .lightbox__nav--next {
            right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};
