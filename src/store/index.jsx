import { useState, createContext, useContext } from 'react'
import data from './data'

export const OverviewContext = createContext(undefined)

export const OverviewProvider = ({ children }) => {
  const [overview, setOverview] = useState({
    value: data,
    isLoading: false,
    errors: null
  })

  return (
    <OverviewContext.Provider value={{ overview, setOverview }}>
      {children}
    </OverviewContext.Provider>
  )
}

export const useOverview = () => useContext(OverviewContext)