"use strict";
{
    const newDeveloper = {
        name: 'John',
        expertise: 'Javascript',
        experience: 1,
    };
    const seniorDeveloper = {
        name: 'Alex',
        expertise: 'Typescript',
        experience: 2,
        leadershipExperience: 1,
        level: 'junior',
    };
    // =======================
    // =======================
    //* Union Types
    // Defining a variable with a union type
    let myVar;
    myVar = 42; // Valid, as it's a number
    myVar = 'Hello'; // Valid, as it's a string
    // myVar = true;  // Invalid, as it's not a number or a string
    // Function parameter with a union type
    function printValue(value) {
        console.log(value);
    }
    printValue(123); // Valid
    printValue('Hello'); // Valid
    function processStatus(status) {
        // Logic for handling different status values
    }
    processStatus('success'); // Valid
    processStatus('error'); // Valid
    processStatus('pending'); // Valid
    const john = {
        name: 'John',
        age: 30,
        employeeId: 12345,
        jobTitle: 'Developer',
    };
    //* Enum Types
    let Level;
    (function (Level) {
        Level["junior"] = "junior";
        Level["mid"] = "mid";
        Level["senior"] = "senior";
    })(Level || (Level = {}));
    let Direction;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "DOWN";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "RIGHT";
    })(Direction || (Direction = {}));
    let BooleanLikeHeterogeneousEnum;
    (function (BooleanLikeHeterogeneousEnum) {
        BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
        BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    })(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
}
