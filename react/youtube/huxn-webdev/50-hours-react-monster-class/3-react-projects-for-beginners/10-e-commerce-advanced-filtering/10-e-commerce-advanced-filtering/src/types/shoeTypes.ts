import { IconType } from 'react-icons';

export interface IShoe {
  id: string;
  img: string;
  title: string;
  star: IconType;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}
