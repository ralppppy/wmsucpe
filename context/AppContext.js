import React, { createContext, useRef } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  //const PROXY = "http://localhost:8080";
  const PROXY = "https://wmsu-cpe-admin.herokuapp.com";
  const learnSkillRef = useRef();

  return (
    <AppContext.Provider value={{ proxy: PROXY, learnSkillRef }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
