interface IButton {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export default function Button({ label, onClick, disabled }: IButton) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
