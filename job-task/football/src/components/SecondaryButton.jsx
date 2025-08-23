const SecondaryButton = ({ children, classes }) => {
  return (
    <button
      className={`inline-block rounded-full py-2 text-base font-semibold capitalize ${classes}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
