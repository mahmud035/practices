"use strict";
{
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
                console.log(exhaustiveCheck); // This line will never be executed
        }
    };
    move('up');
    move('down');
    // The `never` type is used to ensure that the default case is exhaustive and that TypeScript will raise an error if a new value is added to the Direction type without being handled in the switch statement.
}
