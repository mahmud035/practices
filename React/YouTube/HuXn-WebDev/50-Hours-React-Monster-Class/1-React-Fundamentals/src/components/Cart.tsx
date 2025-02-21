import { FaCartArrowDown } from 'react-icons/fa';

export default function Cart() {
  const items = ['Wireless Mouse', 'HDMI Cable', 'USB-C Adapter'];

  return (
    <div>
      <h1>
        Cart <FaCartArrowDown size={30} />
      </h1>

      {items.length > 0 && (
        <h2>You have {items.length} items in your cart 🛒.</h2>
      )}

      <h3>Items:</h3>
      <ul>
        {items.length > 0 ? (
          items.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li>Cart is Empty</li>
        )}
      </ul>
    </div>
  );
}
