//* Extending Interface
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle2 {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle2 {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
};

//* Intersection Types
interface Colorful2 {
  color: string;
}

interface Circle3 {
  radius: number;
}

type ColorfulCircle2 = Colorful2 & Circle3;

function draw(circle: Colorful2 & Circle3) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'blue', radius: 42 }); // OK
// draw({ color: 'red', raidus: 42 }); // Error Here (spelling mistake)

//* Generic Object Types (interface and type alias both can be generic)
interface Box<Type> {
  contents: Type;
}
// type Box2<Type> = { contents: Type };
interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: 'hello' };
boxA.contents;

let boxB: StringBox = { contents: 'world' };
boxB.contents;

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

//* Tuple Types
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];
