import React, { createContext, useState } from "react"

const LayoutContext = createContext()

function LayoutContextProvider({ children }) {
   let [collapsed, setCollapsed] = useState(false)
   let [userData, setUserData] = useState("")

   return (
      <LayoutContext.Provider
         value={{ collapsed, setCollapsed, userData, setUserData }}
      >
         {children}
      </LayoutContext.Provider>
   )
}

export { LayoutContextProvider, LayoutContext }
