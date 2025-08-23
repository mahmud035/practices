import { Badge, Card } from 'keep-react';
import { Heart } from 'phosphor-react';

const Product = ({ product }) => {
  const { thumbnail, title, price, description } = product || {};

  return (
    <Card
      className="max-w-xs overflow-hidden rounded-md"
      imgSrc={thumbnail}
      imgSize="lg"
    >
      <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
        <Heart size={20} weight="bold" color="white" />
      </Card.Container>
      <Card.Container className="p-6">
        <Card.Container className="flex items-center justify-between">
          <Badge size="xs" colorType="light" color="gray">
            For Sale
          </Badge>
          <Card.Title>${price}</Card.Title>
        </Card.Container>
        <Card.Container className="my-3">
          <Card.Title>{title}</Card.Title>
          <Card.Description>
            {description.length > 47 ? description.slice(0, 48) : description}
          </Card.Description>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};

export default Product;
