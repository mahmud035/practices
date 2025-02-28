import { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';

export default function useAppState() {
  const appStateInfo = useContext(AppStateContext);
  if (!appStateInfo)
    throw new Error('useAppState must be used within th AppProvider');
  return appStateInfo;
}
