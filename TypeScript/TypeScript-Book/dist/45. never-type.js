"use strict";
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
    const throwError = (message) => {
        throw new Error(message);
    };
    const move = (direction) => {
        switch (direction) {
            case 'up':
                console.log('Moving up');
                break;
            case 'down':
                console.log('Moving down');
                break;
            default:
                const exhaustiveCheck = direction;
                throw new Error(`Unhandled direction: ${exhaustiveCheck}`);
        }
    };
}
