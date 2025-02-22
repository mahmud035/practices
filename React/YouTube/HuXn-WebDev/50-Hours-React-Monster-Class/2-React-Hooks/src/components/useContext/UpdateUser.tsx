import useUser from '../../hooks/useUser';

export default function UpdateUser() {
  const { user, setUser } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <p>Name: {user.name}</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Update user name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
