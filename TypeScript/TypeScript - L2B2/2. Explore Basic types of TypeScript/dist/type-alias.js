"use strict";
{
    const crush1 = {
        name: 'Moina Pakhi',
        age: 22,
        profession: 'Web Developer',
        address: 'Uganda',
    };
    const crush2 = {
        name: 'Tia Pakhi',
        profession: 'Web Designer',
        address: 'Uganda',
    };
    const isCrushMarried = false;
    const courseName = 'Next Level Web Development';
    const calculate = (num1, // 10
    num2, // 20
    operation // (x, y) => x + y || (10, 20) => 10 + 20
    ) => {
        return operation(num1, num2);
    };
    console.log(calculate(10, 20, (x, y) => x + y));
    console.log(calculate(20, 10, (x, y) => x - y));
    console.log(calculate(20, 10, (x, y) => x * y));
}
