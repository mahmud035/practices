'use strict';

var lang = 'English';

function learn(topic) {
  lang = topic;

  if (true) {
    let a = 5;
    a = 6;
    console.log(a);

    const b = 10;
    console.log(b);
  }

  console.log(`I am learning ${topic}`);
}

learn('JavaScript');

console.log(`I know ${lang}`);
