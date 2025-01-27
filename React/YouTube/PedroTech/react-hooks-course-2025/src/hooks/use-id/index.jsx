import { useId } from "react";

export const UseIdExample = () => {
  const id = useId();
  const id2 = useId();
  return (
    <div>
      <label htmlFor={id}>Enter your name:</label>
      <input id={id} type="text" />

      <label htmlFor={id2}>Enter your name:</label>
      <input id={id2} type="text" />
    </div>
  );
};
