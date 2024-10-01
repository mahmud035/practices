import React, { useState } from 'react';

const Mobile = () => {
  const [percentage, setPercentage] = useState(100);

  const handleBatteryPercentChange = () => {
    const newPercentage = percentage - 10;
    if (newPercentage < 0) {
      alert('Negative value not allowed');
      return;
    }
    setPercentage(newPercentage);
  };

  return (
    <div>
      <h2>{percentage} %</h2>
      <button onClick={handleBatteryPercentChange}>Battery Down</button>
    </div>
  );
};

export default Mobile;
