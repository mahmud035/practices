import '../styles/index.css';

interface IPanelProps {
  title: string;
  isActive: boolean;
  onShow: () => void;
  children: React.ReactNode;
}

export default function Panel({
  title,
  isActive,
  onShow,
  children,
}: IPanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
