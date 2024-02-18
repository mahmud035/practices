import React from 'react';

const Field = ({ label, htmlFor, children, error }) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className="flex flex-col items-start justify-start w-full p-0 mt-2 mr-2">
      {label && (
        <label htmlFor={id} className="mb-1">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ('id' in child.props) {
    return child?.props?.id;
  }
};

export default Field;
