import useUser from '../hooks/useUser';

export default function User() {
  const userInfo = useUser();

  return (
    <div>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}
