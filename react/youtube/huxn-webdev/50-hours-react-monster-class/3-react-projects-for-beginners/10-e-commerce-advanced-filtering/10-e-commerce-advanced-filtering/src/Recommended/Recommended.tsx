import Button from '../components/Button';
import './Recommended.css';

interface IRecommendedProps {
  onCompanyChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Recommended({ onCompanyChange }: IRecommendedProps) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClick={onCompanyChange} value="" title="All Products" />
        <Button onClick={onCompanyChange} value="Nike" title="Nike" />
        <Button onClick={onCompanyChange} value="Adidas" title="Adidas" />
        <Button onClick={onCompanyChange} value="Puma" title="Puma" />
        <Button onClick={onCompanyChange} value="Vans" title="Vans" />
      </div>
    </div>
  );
}
