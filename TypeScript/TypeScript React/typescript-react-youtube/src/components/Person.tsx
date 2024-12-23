import React, { useState } from 'react';

interface IPersonProps {
  name: string;
  age: number;
  isMarried: boolean;
}

export default function Person({ name, age, isMarried }: IPersonProps) {
  const [formData, setFormData] = useState({ bio: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>This person is: {isMarried ? 'married' : 'single'}</p>

      <p>
        {name}'s Bio: {formData.bio ? formData.bio : 'No Bio Available'}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
