import { useState } from 'react';
import ProductDetails from './components/ProductDetails';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { generateDefaultProductFormValue } from './utils';
function App() {
  const [formData, setFormData] = useState(generateDefaultProductFormValue());
  const [editingId, setEditingId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <div className="grid grid-cols-4 gap-5 px-5 pt-4">
      <ProductForm
        formData={formData}
        setFormData={setFormData}
        editingId={editingId}
        setEditingId={setEditingId}
      />

      <ProductList
        formData={formData}
        setFormData={setFormData}
        setEditingId={setEditingId}
        setSelectedProduct={setSelectedProduct}
      />

      <ProductDetails id={5} selectedProduct={selectedProduct} />
    </div>
  );
}

export default App;
