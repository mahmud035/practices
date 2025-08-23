import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function useUser() {
  const userInfo = useContext(UserContext);
  if (!userInfo) throw new Error('useUser must be used withing a UserProvider');
  return userInfo;
}
