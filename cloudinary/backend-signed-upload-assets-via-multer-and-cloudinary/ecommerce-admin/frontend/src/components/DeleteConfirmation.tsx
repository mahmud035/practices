import React from 'react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  productTitle: string;
  imageCount: number;
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  productTitle,
  imageCount,
  isDeleting,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-[90%] text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Delete Product
        </h3>

        <p className="text-gray-700 mb-2">
          Are you sure you want to delete <strong>"{productTitle}"</strong>?
        </p>

        <p className="text-red-600 text-sm mb-6 p-2 bg-red-50 rounded">
          This will permanently delete {imageCount} image
          {imageCount !== 1 ? 's' : ''} from Cloudinary. This action cannot be
          undone.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 rounded-md font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-md font-medium bg-red-500 text-white hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Deleting {imageCount} image{imageCount !== 1 ? 's' : ''}...
              </>
            ) : (
              'Delete Product'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
