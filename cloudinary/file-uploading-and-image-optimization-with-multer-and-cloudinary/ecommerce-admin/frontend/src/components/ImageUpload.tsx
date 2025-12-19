import { useCallback, useRef, useState } from 'react';

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  currentImageUrl?: string;
  error?: string;
}

export default function ImageUpload({
  onFileSelect,
  currentImageUrl,
  error,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(
    currentImageUrl || null
  );
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = useCallback(
    (file: File | null) => {
      if (!file) return;

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a JPEG, PNG, or WebP image.');
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB.');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Pass file to parent
      onFileSelect(file);
    },
    [onFileSelect]
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    handleFileChange(file);
  };

  // Remove image
  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="image-upload">
      <label className="image-upload__label">Product Image *</label>

      {preview ? (
        // Preview state
        <div className="image-upload__preview">
          <img src={preview} alt="Preview" className="image-upload__image" />
          <div className="image-upload__preview-overlay">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="image-upload__change-btn"
            >
              Change
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="image-upload__remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        // Upload state
        <div
          className={`image-upload__dropzone ${
            isDragging ? 'image-upload__dropzone--active' : ''
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="image-upload__dropzone-content">
            <svg
              className="image-upload__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="image-upload__text">
              <span className="image-upload__text--highlight">
                Click to upload
              </span>
              {' or drag and drop'}
            </p>
            <p className="image-upload__hint">JPEG, PNG, or WebP (max 5MB)</p>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="image-upload__input"
      />

      {error && <p className="image-upload__error">{error}</p>}

      <style>{`
        .image-upload {
          margin-bottom: 1.5rem;
        }

        .image-upload__label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .image-upload__dropzone {
          border: 2px dashed #d1d5db;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .image-upload__dropzone:hover,
        .image-upload__dropzone--active {
          border-color: #3b82f6;
          background-color: #eff6ff;
        }

        .image-upload__icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1rem;
          color: #9ca3af;
        }

        .image-upload__text {
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .image-upload__text--highlight {
          color: #3b82f6;
          font-weight: 500;
        }

        .image-upload__hint {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .image-upload__preview {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          aspect-ratio: 1;
          max-width: 300px;
        }

        .image-upload__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-upload__preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-upload__preview:hover .image-upload__preview-overlay {
          opacity: 1;
        }

        .image-upload__change-btn,
        .image-upload__remove-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }

        .image-upload__change-btn {
          background: white;
          color: #374151;
        }

        .image-upload__remove-btn {
          background: #ef4444;
          color: white;
        }

        .image-upload__input {
          display: none;
        }

        .image-upload__error {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
