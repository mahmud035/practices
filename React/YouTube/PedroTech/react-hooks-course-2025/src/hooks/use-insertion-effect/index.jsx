import { useInsertionEffect } from "react";

export const InsertionEffectExample = () => {
  useInsertionEffect(() => {
    // Create a style tag and insert dynamic CSS
    const style = document.createElement("style");
    style.textContent = `
      .dynamic-class {
        color: white;
        background-color: blue;
        padding: 10px;
      }
    `;
    document.head.appendChild(style);

    // Cleanup: Remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="dynamic-class">Styled with useInsertionEffect</div>;
};
