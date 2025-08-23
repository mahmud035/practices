interface IUser {
  name: string;
  age: number;
  isMarried: boolean;
  address: string;
  favoriteLanguages: string[];
}

const user: IUser = {
  name: 'Alice',
  age: 30,
  isMarried: false,
  address: 'NYC',
  favoriteLanguages: ['JS', 'TS'],
};

export default function UserProfile() {
  return (
    <div>
      <h1>UserProfile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Is Married: {user.isMarried ? 'Yes' : 'No'}</p>
      <p>Address: {user.address}</p>
      <p>Favorite Languages: {user.favoriteLanguages.join(', ')}</p>
    </div>
  );
}
