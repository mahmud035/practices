import { createPortal } from 'react-dom';

interface IPopupContentProps {
  copied: boolean;
}

export default function PopupContent({ copied }: IPopupContentProps) {
  return (
    <div>
      {copied &&
        createPortal(
          <p style={{ position: 'absolute', bottom: '3rem' }}>
            Copied to Clipboard
          </p>,
          document.getElementById('popup-content') as HTMLDivElement
        )}
    </div>
  );
}
