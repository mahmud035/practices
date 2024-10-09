{
  // Discriminated Unions OR (Tagged Unions)

  // Discriminated Unions in TypeScript are a type of union type that uses a common property, known as the "discriminant" (i.e. tagged union), to narrow down the set of possible types for the union.

  // NOTE: The property “kind” is a value that can be used at runtime to distinguish between objects in JavaScript.

  type Square = {
    kind: 'square'; // discriminant or tagged union
    size: number;
  };

  type Circle = {
    kind: 'circle'; // discriminant or tagged union
    radius: number;
  };

  type Rectangle = {
    kind: 'rectangle'; // discriminant or tagged union
    width: number;
    height: number;
  };

  type Shape = Square | Circle | Rectangle;

  const area = (shape: Shape) => {
    switch (shape.kind) {
      case 'square':
        return Math.pow(shape.size, 2);
      case 'circle':
        return Math.PI * Math.pow(shape.radius, 2);
      case 'rectangle':
        return shape.width * shape.height;
    }
  };

  const square: Square = { kind: 'square', size: 5 };
  const circle: Circle = { kind: 'circle', radius: 2 };
  const rectangle: Rectangle = { kind: 'rectangle', width: 10, height: 5 };

  console.log(area(square)); // 25
  console.log(area(circle)); // 12.566370614359172
  console.log(area(rectangle)); // 10
}
