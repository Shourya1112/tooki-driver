import React, { createContext, useState, useEffect } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const initialState = {
    name: sessionStorage.getItem('name') || '',
    userId: sessionStorage.getItem('userId') || ''
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    sessionStorage.setItem('name', state.name);
    sessionStorage.setItem('userId', state.userId);
  }, [state]);

  // Function to update the global state
  const updateState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ state, updateState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
