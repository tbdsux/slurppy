import React, { createContext, ReactNode } from 'react'

interface SlurpProviderProps {
  children: ReactNode
}

const SlurpContext = createContext({})

const SlurpProvider = ({ children }: SlurpProviderProps) => {
  return <SlurpContext.Provider value={{}}>{children}</SlurpContext.Provider>
}

export default SlurpProvider
