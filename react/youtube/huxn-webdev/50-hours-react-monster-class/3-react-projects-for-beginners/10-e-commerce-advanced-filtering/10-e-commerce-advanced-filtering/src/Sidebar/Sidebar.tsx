import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css';

interface ISidebarProps {
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Sidebar({
  onCategoryChange,
  onPriceChange,
  onColorChange,
}: ISidebarProps) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category handleChange={onCategoryChange} />
      <Price handleChange={onPriceChange} />
      <Colors handleChange={onColorChange} />
    </section>
  );
}
