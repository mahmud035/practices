import { BsFillBagFill } from 'react-icons/bs';
import '../Products/Products.css';
import { IShoe } from '../types/shoeTypes';

interface ICardProps {
  shoeData: IShoe;
}

export default function Card({ shoeData }: ICardProps) {
  const { img, title, star: StarIcon, reviews, prevPrice, newPrice } = shoeData;

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> <span>${newPrice}</span>
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}
