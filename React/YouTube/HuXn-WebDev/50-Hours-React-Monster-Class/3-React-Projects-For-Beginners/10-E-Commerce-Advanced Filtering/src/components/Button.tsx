interface IButtonProps {
  title: string;
  value: string;
}

export default function Button({ onClickHandler, title, value }: IButtonProps) {
  return (
    <div>
      <button onClick={onClickHandler} value={value} className="btns">
        {title}
      </button>
    </div>
  );
}
