"use strict";
const cc = {
    color: 'red',
    radius: 42,
};
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
draw({ color: 'blue', radius: 42 }); // OK
let boxA = { contents: 'hello' };
boxA.contents;
let boxB = { contents: 'world' };
boxB.contents;
function setContents(box, newContents) {
    box.contents = newContents;
}
