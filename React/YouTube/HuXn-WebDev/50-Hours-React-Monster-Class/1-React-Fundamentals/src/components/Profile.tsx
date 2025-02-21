import React, { useState } from 'react';

interface IUser {
  name: string;
  age: number;
}

export default function Profile() {
  const [formData, setFormData] = useState<IUser>({ name: '', age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="User name"
        />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="User age"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
