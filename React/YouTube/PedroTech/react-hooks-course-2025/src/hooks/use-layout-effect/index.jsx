import { useState, useLayoutEffect, useRef } from "react";

export const LayoutEffectExample = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    // Measure the width of the box immediately after rendering
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  });

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "50%",
          height: "100px",
          backgroundColor: "lightblue",
          color: "black",
        }}
      >
        Resize me!
      </div>
      <p>The box width is: {boxWidth}px</p>
    </div>
  );
};
