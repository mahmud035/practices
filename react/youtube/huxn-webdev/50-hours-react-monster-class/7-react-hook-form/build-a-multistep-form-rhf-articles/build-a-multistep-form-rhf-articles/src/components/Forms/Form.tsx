import { ReactNode } from 'react';

interface IFormProps {
  children: ReactNode;
  onSubmit: (e?: React.FormEvent) => Promise<void>;
}

export function Form({ children, ...props }: IFormProps) {
  return (
    <form className="row" {...props} noValidate>
      {children}
    </form>
  );
}
