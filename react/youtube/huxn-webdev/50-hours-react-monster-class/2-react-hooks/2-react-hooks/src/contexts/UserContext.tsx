import React, { createContext, useState } from 'react';

interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUser {
  name: string;
  age: number;
}

const UserContext = createContext<IUserContext | null>(null);

export default function UserProvider({ children }: IUserProviderProps) {
  const [user, setUser] = useState<IUser>({ name: 'Alice', age: 30 });

  const userInfo = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

export { UserContext };
