import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProductCard = ({ product, setEditing, setSelectedProduct }) => {
  const { id, title, description, thumbnail } = product || {};
  const queryClient = useQueryClient();

  //* Delete Product (DELETE)
  const { mutateAsync: deleteMutateAsync } = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`http://localhost:3000/products/${id}`);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Product deleted successfully!');
    },
  });

  const handleDeleteProduct = (e, id) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete the product?')) {
      deleteMutateAsync(id); // call the mutateAsync function
    }
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="w-full shadow-xl cursor-pointer card bg-base-100"
    >
      <figure>
        <img src={thumbnail} alt="Phone Image" className="w-full h-56 " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description?.length > 45 ? description.slice(0, 45) : description}
        </p>
        <div className="justify-end pt-3 card-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditing(product);
            }}
            className="text-white btn btn-sm btn-accent"
          >
            Edit
          </button>
          <button
            onClick={(e) => handleDeleteProduct(e, id)}
            className="text-white btn btn-sm btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
