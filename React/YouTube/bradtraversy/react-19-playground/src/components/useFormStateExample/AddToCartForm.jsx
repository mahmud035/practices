import { useFormState } from 'react-dom';

const addToCart = (prevState, queryData) => {
  const itemID = queryData.get('itemID');

  if (itemID === '1') {
    return 'Added to cart';
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <form
      action={formAction}
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Add to Cart
      </button>
      <div className="mt-4 text-sm text-gray-700">{message}</div>
    </form>
  );
};

export default AddToCartForm;
