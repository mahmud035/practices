interface IUserStatusProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

export default function UserStatus({ isLoggedIn, isAdmin }: IUserStatusProps) {
  return (
    <div>{isLoggedIn && <p>Welcome {isAdmin ? 'Admin!' : 'User'}</p>}</div>
  );
}
