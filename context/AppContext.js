import React, { createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  // const PROXY = "http://localhost:8080";
  const PROXY = "https://wmsu-cpe-server.herokuapp.com";

  return (
    <AppContext.Provider value={{ proxy: PROXY }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
