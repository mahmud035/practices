const FieldSet = ({ label, children }) => {
  return (
    <fieldset className="p-0 m-2 border-none">
      {label && <legend className="mb-2 text-lg font-bold">{label}</legend>}

      <div className="flex flex-col self-start justify-between">{children}</div>
    </fieldset>
  );
};

export default FieldSet;
