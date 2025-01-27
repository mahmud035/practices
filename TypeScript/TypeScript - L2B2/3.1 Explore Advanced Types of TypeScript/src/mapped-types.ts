{
  // Basic JavaScript 'map'
  const arrayOfNumbers: number[] = [1, 2, 3];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfStrings); // ['1', '2', '3']

  // Example: 1 (Basic Mapped types)
  type AreaNumber = {
    width: number;
    height: number;
  };

  // type AreaString = {
  //   width: string;
  //   height: string;
  // };

  //* Same task using "Mapped type"
  // NOTE: Explanation:
  // key হচ্ছে 'loop variable', যার মান হবে object এর key গুলো। অর্থাৎ, একবার key="width", এবং একবার key="height" হবে।
  // "keyof AreaNumber" ==> 'width' | 'height'

  type AreaString = {
    [key in keyof AreaNumber]: string; // Index Signature
  };

  //* =========================>>===========================>>============================>>

  // IMPORTANT: Example: 2 (Mapped type with Generic & Look Up type) [For Flexibility]
  /**
   * NOTE: What is "Look Up type" ?
   * objectName['width']
   * objectName['height']
   */
  type Width = AreaNumber['width']; // type will be number ==> "Look Up type"
  type Height = AreaNumber['height']; // type will be number ==> "Look Up type"

  // NOTE: Explanation:
  // Here: T ==> { width: number; height: string } ==> Full 'Object' টা
  // key হচ্ছে loop variable, যার মান হবে object এর key গুলো। অর্থাৎ, একবার key="width", এবং একবার key="height" হবে।
  // "keyof T" ==> 'width' | 'height'
  // T[key] হচ্ছে "Look Up type" অর্থাৎ, T["width"] & T["height"]

  type AreaGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaGeneric<{ width: number; height: string }> = {
    width: 50,
    height: '100',
  };
}
