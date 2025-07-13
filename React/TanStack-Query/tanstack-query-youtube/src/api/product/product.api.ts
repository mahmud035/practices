import { IProduct } from '../../types/product';
import axios from '../index';

interface IGetProducts {
  pageParam: number;
}

export const getProducts = async ({
  pageParam,
}: IGetProducts): Promise<IProduct[]> => {
  return (await axios.get(`/products?_page=${pageParam + 1}&_limit=3`)).data;
};
