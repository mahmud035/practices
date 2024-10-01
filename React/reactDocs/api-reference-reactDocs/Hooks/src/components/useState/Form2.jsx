import React, { useState } from 'react';

const Form2 = () => {
  const [form, setForm] = useState({
    firstName: 'Mahmud',
    lastName: 'Hasan',
    email: 'mahmud@gmail.com',
  });

  return (
    <div className="form-control">
      <label className="input-group mb-3">
        <span>First Name</span>
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
          className="input input-bordered"
        />
      </label>
      <label className="input-group mb-3">
        <span>Last Name</span>
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
          className="input input-bordered"
        />
      </label>
      <label className="input-group">
        <span>Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
          className="input input-bordered"
        />
      </label>

      <p>
        {form.firstName}, {form.lastName}, {form.email}
      </p>
    </div>
  );
};

export default Form2;
