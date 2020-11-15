import React, { createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const PROXY = "http://localhost:8080";

  return (
    <AppContext.Provider value={{ proxy: PROXY }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
