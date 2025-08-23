const processOrder = () => {
  console.log(`processing order for customer 1`);

  console.time();

  setTimeout(() => {
    console.log(`cooking complete`);
  }, 10000);

  console.timeEnd();

  console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
