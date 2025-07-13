import Button2 from './Button2';

const Toolbar4 = () => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      alert('You clicked on the toolbar button');
    }
  };

  // NOTE: Added `onKeyDown` and `tabIndex` for accessibility.

  return (
    <div>
      <h2>Stopping propagation</h2>
      <div
        onClick={() => alert('You clicked on the toolbar button')}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <Button2 onClick={() => alert('Playing')}>Play Movie</Button2>
        <Button2 onClick={() => alert('Uploading')}>Upload Image</Button2>
      </div>
    </div>
  );
};

export default Toolbar4;
