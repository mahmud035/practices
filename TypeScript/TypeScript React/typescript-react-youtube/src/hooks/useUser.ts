import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function useUser() {
  const userInfo = useContext(UserContext);
  if (!userInfo) throw new Error('useUser must be used within a UserProvider');
  return userInfo;
}
