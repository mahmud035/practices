type TProduct = { name: string; price: number; quantity: number };

const product1: TProduct = { name: 'monitor', price: 11000, quantity: 1 };

const product2: TProduct = { name: 'laptop', price: 56000, quantity: 1 };

type Products<TProduct> = TProduct[];

const products2: Products<TProduct> = [product1, product2];
// console.log(products2);

function calculateTotalPrice(products: TProduct[]): number {
  let totalPrice = 0;

  if (Array.isArray(products)) {
    products.forEach((product) => {
      totalPrice = totalPrice + product.price;
    });
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products2));
