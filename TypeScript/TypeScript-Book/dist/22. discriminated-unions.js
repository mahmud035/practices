"use strict";
{
    const area = (shape) => {
        switch (shape.kind) {
            case 'square':
                return Math.pow(shape.size, 2);
            case 'circle':
                return Math.PI * Math.pow(shape.radius, 2);
            case 'rectangle':
                return shape.width * shape.height;
        }
    };
    const square = { kind: 'square', size: 5 };
    const circle = { kind: 'circle', radius: 2 };
    const rectangle = { kind: 'rectangle', width: 10, height: 5 };
    console.log(area(square)); // 25
    console.log(area(circle)); // 12.566370614359172
    console.log(area(rectangle)); // 10
}
