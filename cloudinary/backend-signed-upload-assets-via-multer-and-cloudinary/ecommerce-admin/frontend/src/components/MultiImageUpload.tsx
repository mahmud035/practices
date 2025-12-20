import React, { useCallback, useRef, useState } from 'react';
import {
  deleteUploadedImage,
  type UploadedImage,
  uploadImage,
} from '../api/products';

export interface ImageUploadState {
  id: string;
  file: File;
  preview: string;
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress: number;
  error?: string;
  cloudinary?: UploadedImage;
}

interface MultiImageUploadProps {
  maxImages?: number;
  value: ImageUploadState[];
  onChange: (
    images:
      | ImageUploadState[]
      | ((prev: ImageUploadState[]) => ImageUploadState[])
  ) => void;
}

export const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
  maxImages = 10,
  value: images,
  onChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateId = () =>
    `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Upload a single image
  const uploadSingleImage = useCallback(
    async (imageId: string, file: File) => {
      // Update status to uploading using functional update
      onChange((prev) =>
        prev.map((img) =>
          img.id === imageId
            ? { ...img, status: 'uploading' as const, progress: 0 }
            : img
        )
      );

      try {
        const result = await uploadImage(file, (progress) => {
          onChange((prev) =>
            prev.map((img) => (img.id === imageId ? { ...img, progress } : img))
          );
        });

        // Update with success
        onChange((prev) =>
          prev.map((img) =>
            img.id === imageId
              ? {
                  ...img,
                  status: 'success' as const,
                  progress: 100,
                  cloudinary: result,
                }
              : img
          )
        );
      } catch (error) {
        onChange((prev) =>
          prev.map((img) =>
            img.id === imageId
              ? {
                  ...img,
                  status: 'error' as const,
                  error:
                    error instanceof Error ? error.message : 'Upload failed',
                }
              : img
          )
        );
      }
    },
    [onChange]
  );

  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files);

      const remainingSlots = maxImages - images.length;
      if (remainingSlots <= 0) {
        alert(`Maximum ${maxImages} images allowed`);
        return;
      }

      const filesToAdd = fileArray.slice(0, remainingSlots);

      const validFiles = filesToAdd.filter((file) => {
        const validTypes = [
          'image/jpeg',
          'image/png',
          'image/webp',
          'image/avif',
        ];
        const maxSize = 5 * 1024 * 1024;

        if (!validTypes.includes(file.type)) {
          alert(`${file.name}: Invalid file type`);
          return false;
        }
        if (file.size > maxSize) {
          alert(`${file.name}: File too large (max 5MB)`);
          return false;
        }
        return true;
      });

      if (validFiles.length === 0) return;

      const newImageStates: ImageUploadState[] = validFiles.map((file) => ({
        id: generateId(),
        file,
        preview: URL.createObjectURL(file),
        status: 'pending' as const,
        progress: 0,
      }));

      // Add to state
      onChange((prev) => [...prev, ...newImageStates]);

      // Start uploads after state update
      setTimeout(() => {
        newImageStates.forEach((imageState) => {
          uploadSingleImage(imageState.id, imageState.file);
        });
      }, 10);
    },
    [images.length, maxImages, onChange, uploadSingleImage]
  );

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
    handleFiles(e.dataTransfer.files);
  };

  const handleRemove = async (imageState: ImageUploadState) => {
    if (imageState.cloudinary) {
      try {
        await deleteUploadedImage(imageState.cloudinary.public_id);
      } catch (error) {
        console.error('Failed to delete from Cloudinary:', error);
      }
    }

    URL.revokeObjectURL(imageState.preview);
    onChange((prev) => prev.filter((img) => img.id !== imageState.id));
  };

  const handleRetry = (imageState: ImageUploadState) => {
    uploadSingleImage(imageState.id, imageState.file);
  };

  const handleMoveImage = (fromIndex: number, toIndex: number) => {
    onChange((prev) => {
      const newImages = [...prev];
      const [movedImage] = newImages.splice(fromIndex, 1);
      newImages.splice(toIndex, 0, movedImage);
      return newImages;
    });
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium text-gray-700">
        Product Images *{' '}
        <span className="font-normal text-gray-500">
          ({images.length}/{maxImages})
        </span>
      </label>

      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all
          ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
          }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <svg
          className="w-10 h-10 mx-auto mb-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p className="text-gray-600 mb-1">
          <span className="text-blue-500 font-medium">Click to upload</span> or
          drag and drop
        </p>
        <p className="text-sm text-gray-400">
          JPEG, PNG, WebP, Avif (max 5MB each, up to {maxImages} images)
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="hidden"
      />

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 mt-4">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`group relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-move
                ${img.status === 'error' ? 'border-2 border-red-500' : ''}`}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', index.toString());
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const fromIndex = parseInt(
                  e.dataTransfer.getData('text/plain')
                );
                if (!isNaN(fromIndex) && fromIndex !== index) {
                  handleMoveImage(fromIndex, index);
                }
              }}
            >
              {/* Image */}
              <img
                src={img.preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />

              {/* Primary badge */}
              {index === 0 && (
                <span className="absolute top-1 left-1 px-2 py-0.5 bg-blue-500 text-white text-[10px] font-semibold rounded uppercase z-10">
                  Primary
                </span>
              )}

              {/* Progress overlay */}
              {img.status === 'uploading' && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 z-20">
                  <div className="w-4/5 h-1 bg-white/30 rounded overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-[width] duration-200"
                      style={{ width: `${img.progress}%` }}
                    />
                  </div>
                  <span className="text-white text-xs font-medium">
                    {img.progress}%
                  </span>
                </div>
              )}

              {/* Success indicator */}
              {img.status === 'success' && (
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}

              {/* Error overlay */}
              {img.status === 'error' && (
                <div className="absolute inset-0 bg-red-500/90 flex flex-col items-center justify-center gap-2 p-2 z-20">
                  <span className="text-white text-xs text-center">
                    {img.error}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRetry(img);
                    }}
                    className="px-3 py-1 bg-white text-red-500 rounded text-xs font-medium hover:bg-gray-100"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Action buttons - visible on hover */}
              <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {index !== 0 && img.status === 'success' && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMoveImage(index, 0);
                    }}
                    className="w-6 h-6 rounded bg-black/50 text-white flex items-center justify-center text-sm hover:bg-black/70"
                    title="Set as primary"
                  >
                    ⭐
                  </button>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(img);
                  }}
                  className="w-6 h-6 rounded bg-black/50 text-white flex items-center justify-center text-sm hover:bg-red-500"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
