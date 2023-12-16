{
  // do some job with local variables that should not be seen outside

  let message = 'Hello'; // only visible in this block

  console.log(message); // Hello
}

console.log(message); // Error: message is not defined
