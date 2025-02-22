import useUser from '../../hooks/useUser';

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
