import { john, peter } from './04-names.mjs';
import { sayHi } from './05-utils.mjs';
import { User } from './06-alternative-flavor.mjs';

sayHi('susan'); // Hello there susan
sayHi(john); // Hello there john
sayHi(peter); // Hello there peter
sayHi(User.person.name); // Hello there bob
