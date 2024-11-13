import React, { createContext, useContext } from 'react'

const MyContext = createContext();

export const ContextProvider  = ({children}) => {
  return (
    <MyContext.Provider value="Hello from MyContext">{children}</MyContext.Provider>
  )
}

export const ComponentUsingContext  = () => {
    const value = useContext(MyContext);
    return <h2>{value}</h2>
}   
