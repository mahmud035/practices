interface IButtonProps {
  title: string;
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClick, title, value }: IButtonProps) {
  return (
    <button onClick={onClick} value={value} className="btns">
      {title}
    </button>
  );
}
