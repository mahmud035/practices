import toast from 'react-hot-toast';
import { useDeleteProductMutation } from '../api/product/product.hook';

const ProductCard = ({
  product,
  setFormData,
  setEditingId,
  setSelectedProduct,
}) => {
  const deleteProductMutation = useDeleteProductMutation();
  const { id, title, description, thumbnail } = product || {};

  const handleDeleteProduct = (e, id) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to DELETE the product?')) {
      deleteProductMutation.mutate(id, {
        onSuccess: () => toast.success('Product deleted successfully'),
      });
    }
  };

  const handleEdit = (e, product) => {
    e.stopPropagation();
    setEditingId(product.id);
    setFormData({ ...product });
  };

  // NOTE: Added `onKeyDown` and `tabIndex` for accessibility.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelectedProduct(product);
    }
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      className="w-full shadow-xl cursor-pointer card bg-base-100"
    >
      <figure>
        <img
          src={
            thumbnail?.startsWith('http')
              ? thumbnail
              : 'https://images.pexels.com/photos/1694874/pexels-photo-1694874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt="Product Image"
          className="w-full h-56 "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description?.length > 45 ? description.slice(0, 45) : description}
        </p>
        <div className="justify-end pt-3 card-actions">
          <button
            onClick={(e) => handleEdit(e, product)}
            className="px-3 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={(e) => handleDeleteProduct(e, id)}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 disabled:hover:bg-red-300 disabled:bg-red-300 disabled:cursor-not-allowed"
            disabled={deleteProductMutation.isPending}
          >
            {deleteProductMutation.isPending ? 'Deleting' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
