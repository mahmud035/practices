import { CSSProperties } from 'react';

export default function ProfileCard() {
  const profileCardStyles: CSSProperties = {
    color: 'black',
    backgroundColor: 'lightgray',
    padding: '15px',
    borderRadius: '8px',
  };

  return (
    <div style={profileCardStyles}>
      <h3>Profile Card</h3>
      <p>
        Distinctively simplify progressive services with worldwide e-services.
        Phosphorescently empower reliable total linkage rather than competitive
        intellectual capital.
      </p>
    </div>
  );
}
