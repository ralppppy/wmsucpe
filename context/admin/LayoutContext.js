import React, { createContext, useState } from "react";

const LayoutContext = createContext();

function LayoutContextProvider({ children }) {
  let [collapsed, setCollapsed] = useState(false);
  let [userData, setUserData] = useState("");
  const PROXY = "http://localhost:8080";

  return (
    <LayoutContext.Provider
      value={{ collapsed, setCollapsed, userData, setUserData, PROXY }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutContextProvider, LayoutContext };
