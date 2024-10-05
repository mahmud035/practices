//* multiple export from same file (import individually)
// import { add as addTwo, subtract, multiply, divide, average } from './module';

//* multiple export from same file (import all functions)
// import * as Methods from './module';

//* export default (multiple functions from same file)
// import Methods from './module';

//* export default (single function from each file)
// import add from './utils/add';
// import subtract from './utils/subtract';
// import multiply from './utils/multiply';
// import divide from './utils/divide';

// IMP: Eivabe import export korbo.
//* export default (from index.ts file inside utils folder)
import Methods from './utils/index';

// const result = addTwo(2, 3);

// const result2 = Methods.add(2, 3);

// const result3 = add(2, 3);
// const result4 = subtract(3, 2);
// const result5 = multiply(3, 2);
// const result6 = divide(3, 2);

const result7 = Methods.add(2, 3);
const result8 = Methods.subtract(2, 3);
const result9 = Methods.multiply(2, 3);
const result10 = Methods.divide(2, 3);
