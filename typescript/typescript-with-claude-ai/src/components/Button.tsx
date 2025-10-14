import type React from 'react';

// React props with optional fields:
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // optional
  disabled?: boolean; // optional
  icon?: React.ReactNode;
}

export default function Button({
  label,
  onClick,
  variant = 'primary', // default value
  disabled = false,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
}
