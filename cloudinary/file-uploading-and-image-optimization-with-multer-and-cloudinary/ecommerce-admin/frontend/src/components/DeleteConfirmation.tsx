interface DeleteConfirmationProps {
  isOpen: boolean;
  productTitle: string;
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteConfirmation({
  isOpen,
  productTitle,
  isDeleting,
  onConfirm,
  onCancel,
}: DeleteConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h3 className="modal__title">Delete Product</h3>

        <p className="modal__message">
          Are you sure you want to delete <strong>"{productTitle}"</strong>?
          This will also permanently delete the image from Cloudinary. This
          action cannot be undone.
        </p>

        <div className="modal__actions">
          <button
            type="button"
            onClick={onCancel}
            className="modal__btn modal__btn--cancel"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="modal__btn modal__btn--delete"
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <span className="spinner"></span>
                Deleting...
              </>
            ) : (
              'Delete'
            )}
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .modal {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          max-width: 400px;
          width: 90%;
          text-align: center;
        }

        .modal__icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1rem;
          background: #fef2f2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal__icon svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #ef4444;
        }

        .modal__title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .modal__message {
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .modal__actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        .modal__btn {
          padding: 0.625rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal__btn--cancel {
          background: #f3f4f6;
          color: #374151;
        }

        .modal__btn--cancel:hover:not(:disabled) {
          background: #e5e7eb;
        }

        .modal__btn--delete {
          background: #ef4444;
          color: white;
        }

        .modal__btn--delete:hover:not(:disabled) {
          background: #dc2626;
        }

        .modal__btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
