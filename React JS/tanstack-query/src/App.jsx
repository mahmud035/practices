import { useState } from 'react';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
function App() {
  const [editing, setEditing] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="grid grid-cols-4 gap-4 pt-4">
      {!editing ? (
        <AddProduct />
      ) : (
        <EditProduct editing={editing} setEditing={setEditing} />
      )}

      <ProductList
        setEditing={setEditing}
        setSelectedProduct={setSelectedProduct}
      />
      <ProductDetails id={5} selectedProduct={selectedProduct} />
    </div>
  );
}

export default App;
