const ProductDetails = ({ selectedProduct }) => {
  const { title, description, price, rating, thumbnail } =
    selectedProduct || {};

  return (
    <div className="col-span-1">
      <h1 className="my-2 text-3xl text-center">Product Details</h1>
      <div className="w-full shadow-xl cursor-pointer card bg-base-100">
        <figure>
          <img
            src={
              thumbnail?.startsWith('http')
                ? thumbnail
                : 'https://images.pexels.com/photos/1694874/pexels-photo-1694874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt="Phone Image"
            className="w-full h-56"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title ? title : 'Product Name'}</h2>
          <p>{description ? description : 'Product description'}</p>
          <p className="font-medium">Price: {price ? price : 'N/A'}</p>
          <p className="font-medium">Rating: {rating ? rating : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
