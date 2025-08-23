import React from 'react';
import { FieldError } from 'react-hook-form';

interface IFieldProps {
  label: string;
  children: React.ReactElement;
  error?: FieldError;
}

export function Field({ label, children, error }: IFieldProps) {
  const id = getChildId(children);

  return (
    <div className="col-sm-12 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
}

// Get id prop from a child element
const getChildId = (children: IFieldProps['children']) => {
  const child = React.Children.only(children);

  if ('id' in child.props) {
    return child.props.id;
  }
};
