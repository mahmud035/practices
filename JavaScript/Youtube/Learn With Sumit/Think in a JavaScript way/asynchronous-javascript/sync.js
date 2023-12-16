const processOrder = () => {
  console.log(`processing order for customer 1`);

  console.time();
  let currentTime = new Date().getTime();
  while (currentTime + 10000 >= new Date().getTime());
  console.timeEnd();

  console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);
