{
  // Never type

  // NOTE: The `never` type represents values that never occur. "It is used to denote functions or expressions that never return or thrown an error".

  // For instance an infinite loop:
  // const infiniteLoop = (): never => {
  //   while (true) {
  //     // do something
  //   }
  // };

  // Throwing an error:
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  // throwError('Something went wrong!');

  // IMPORTANT: The `never` type is useful in ensuring type safety and catching potential errors in your code. It helps TypeScript analyze and infer more precise types when used in combination with other types and control flow statements, for instance:

  type Direction = 'up' | 'down';

  const move = (direction: Direction) => {
    switch (direction) {
      case 'up':
        console.log('Moving up');
        break;
      case 'down':
        console.log('Moving down');
        break;
      default:
        const exhaustiveCheck: never = direction;
        throw new Error(`Unhandled direction: ${exhaustiveCheck}`);
    }
  };
}
