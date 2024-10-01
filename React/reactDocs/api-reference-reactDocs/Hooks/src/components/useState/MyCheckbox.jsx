import React, { useState } from 'react';

const MyCheckbox = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={liked}
          onClick={handleChange}
          className="checkbox checkbox-accent"
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  );
};

export default MyCheckbox;
