import ProductList from './components/ProductList';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-2 text-3xl text-center">React Infinite Scrolling</h1>

      <ProductList />
    </div>
  );
}
