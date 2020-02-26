import React, { createContext, useState } from "react"

const LayoutContext = createContext()

function LayoutContextProvider({ children }) {
   let [collapsed, setCollapsed] = useState(false)

   return (
      <LayoutContext.Provider value={{ collapsed, setCollapsed }}>
         {children}
      </LayoutContext.Provider>
   )
}

export { LayoutContextProvider, LayoutContext }
