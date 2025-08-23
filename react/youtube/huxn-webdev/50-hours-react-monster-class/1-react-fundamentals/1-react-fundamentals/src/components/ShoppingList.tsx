import React, { useState } from 'react';

interface IItems {
  name: string;
  quantity: number;
}

export default function ShoppingList() {
  const [items, setItems] = useState<IItems[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const quantity = (form.elements.namedItem('quantity') as HTMLInputElement)
      .value;

    setItems((prevItems) => [
      ...prevItems,
      { name, quantity: Number(quantity) },
    ]);
  };

  return (
    <div>
      <h2>Shopping List</h2>

      {items.map((item) => (
        <p key={crypto.randomUUID()}>
          <span>Name: {item.name}</span>&nbsp;&nbsp;
          <span>Quantity: {item.quantity}</span>
        </p>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Item name" />
        <input type="number" name="quantity" placeholder="Item quantity" />
        <button>Submit</button>
      </form>
    </div>
  );
}
