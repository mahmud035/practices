import React, { createContext } from 'react';

interface IUserContext {
  name: string;
  age: number;
  email: string;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<IUserContext | null>(null);

export default function UserProvider({ children }: IUserProviderProps) {
  const userInfo = {
    name: 'John Doe',
    age: 25,
    email: 'john@gmail.com',
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

export { UserContext };
