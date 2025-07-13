import React, { useState } from 'react';

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle = {
    position: 'relative',
    height: 200,
    padding: 48,
    overflow: 'hidden',
    textAlign: 'center',
    background: 'bg-green-200',
    border: 'border-gray-300',
    borderRadius: 'rounded-lg',
  };

  return (
    <div className="h-200 relative overflow-hidden rounded-lg border border-gray-300 bg-green-200 p-12 text-center">
      Render in this
      <div className="mt-16">
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={showDrawer}
        >
          Open
        </button>
      </div>
      {open && (
        <div className="absolute top-0 right-0 h-screen bg-white">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Basic Drawer</h3>
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="p-4">
            <p>Some contents...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerComponent;
