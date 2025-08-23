import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
}

export default function Card({ children }: ICardProps) {
  return <div>{children}</div>;
}
