const Toolbar3 = () => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      alert('You clicked on the toolbar!');
    }
  };

  // NOTE: Added `onKeyDown` and `tabIndex` for accessibility.

  return (
    <>
      <hr />
      <h2>Event propagation</h2>
      <div
        onClick={() => alert('You clicked on the toolbar!')}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <button onClick={() => alert('Playing')}>Play Movie</button>
        <button onClick={() => alert('Uploading')}>Upload Image</button>
      </div>
    </>
  );
};

export default Toolbar3;
