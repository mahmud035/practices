import { CSSProperties } from 'react';

export default function AddingStyles() {
  const anotherWayOfStyles: CSSProperties = {
    color: 'white',
    backgroundColor: 'skyblue',
    padding: '2rem',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <section>
      <h1
        style={{
          color: 'white',
          backgroundColor: 'teal',
          padding: '2rem',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        Inline Styles
      </h1>

      <h2 style={anotherWayOfStyles}>Another way of Styles</h2>
    </section>
  );
}
