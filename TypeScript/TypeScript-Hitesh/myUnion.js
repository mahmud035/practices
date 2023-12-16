// Use Case: 1
var score = 33;
score = 44; // OK
score = '55'; // OK
var pavel = { name: 'pavel', id: 334 };
pavel = { username: 'pavel', id: 334 };
// Use Case: 2
function getDBId(id) {
    // making some API calls
    console.log("DB id is: ".concat(id));
}
getDBId(3);
getDBId('3');
// Use Case: 2.5
// Narrowing (Union)
function getDBId2(id) {
    // id.toLowerCase(); // Error Here
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
getDBId2(3);
getDBId2('3');
// Use Case: 3
// Array (Single type data)
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
// Mixed multiple types data
var data3 = [1, '2', 3, true];
// Use Case: 4
var seatAllotment;
seatAllotment = 'aisle';
// seatAllotment = 'crew'; // Error Here
