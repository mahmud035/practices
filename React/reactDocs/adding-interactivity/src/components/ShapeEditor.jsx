import React, { useState } from 'react';

const initialShapes = [
  { id: 0, type: 'circle', x: 0, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

const ShapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes);

  const handleClick = () => {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === 'square') {
        // no change
        return shape;
      } else {
        // return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(nextShapes);
  };

  return (
    <div style={{ position: 'relative' }}>
      <hr />
      <h2>Transforming an array</h2>
      <button onClick={handleClick}>Move circles down!</button>

      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShapeEditor;
