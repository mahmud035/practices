import React, { createContext, useState } from 'react';
import { IFormData } from '../types';
import { formDataDefaultValue } from '../utils';

interface IAppStateContext {
  state: IFormData;
  setState: React.Dispatch<React.SetStateAction<IFormData>>;
}

interface IAppStateProviderProps {
  children: React.ReactNode;
}

const AppStateContext = createContext<IAppStateContext>({
  state: formDataDefaultValue,
  setState: () => {},
});

export default function AppStateProvider({ children }: IAppStateProviderProps) {
  const [state, setState] = useState(formDataDefaultValue);

  const appStateInfo = { state, setState };

  return (
    <AppStateContext.Provider value={appStateInfo}>
      {children}
    </AppStateContext.Provider>
  );
}

export { AppStateContext };
