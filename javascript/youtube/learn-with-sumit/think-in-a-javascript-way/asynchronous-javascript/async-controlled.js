const takeOrder = (customer, processOrder, completeOrder) => {
  console.log(`take order for ${customer}`);
  processOrder(customer, completeOrder);
};

const processOrder = (customer, completeOrder) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking complete`);
    console.log(`order processed for ${customer}`);
    completeOrder(customer);
  }, 5000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder('customer 1', processOrder, completeOrder);

console.log(`Hello`);
