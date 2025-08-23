interface IProductProps {
  name: string;
  price: number;
}

export default function Product({ name, price }: IProductProps) {
  return (
    <>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
    </>
  );
}
