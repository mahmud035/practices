'use strict';

{
  // object-tricks
  const language = {
    name: 'JavaScript',
    year: 1995,
    creator: 'Brendan Eich',
  };

  const keys = Object.keys(language);
  console.log(keys); // ['name', 'year', 'creator']

  const values = Object.values(language);
  console.log(values); // ['JavaScript', 1995, 'Brendan Eich']

  const entries = Object.entries(language);
  console.log(entries); // [ ['name', 'JavaScript'], ['year', 1995], ['creator', 'Brendan Eich'] ]

  //* ================>>=================>>=================>>

  // IMPORTANT: Dynamically set and get object property
  const a = 'popularity';

  language[a] = '100%'; //* Dynamically Set Object Property Value
  console.log(language); // {name: 'JavaScript', year: 1995, creator: 'Brendan Eich', popularity: '100%'}

  const popularity = language[a]; //* Dynamically Get Object Property Value
  console.log(popularity); // 100%

  //* ================>>=================>>=================>>

  //! Shortcut way to create an object
  const x = 5;
  const y = 6;

  const obj = { x: x, y: y }; // {x: 5, y: 6}
  const objShortcut = { x, y }; // {x: 5, y: 6}
}
