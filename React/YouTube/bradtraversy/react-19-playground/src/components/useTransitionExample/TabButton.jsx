const TabButton = ({ children, isActive, onClick }) => {
  if (isActive) {
    return <div className="font-bold text-blue-600">{children}</div>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default TabButton;
