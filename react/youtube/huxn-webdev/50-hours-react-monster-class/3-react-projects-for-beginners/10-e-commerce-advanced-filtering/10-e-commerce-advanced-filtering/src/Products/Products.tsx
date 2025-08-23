import Card from '../components/Card';
import { IShoe } from '../types/shoeTypes';
import './Products.css';

interface IProductsProps {
  products: IShoe[];
}

export default function Products({ products }: IProductsProps) {
  return (
    <section className="card-container">
      {products.map((shoeData) => (
        <Card key={shoeData.id} shoeData={shoeData} />
      ))}
    </section>
  );
}
