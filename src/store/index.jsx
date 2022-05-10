import { useState, createContext, useContext, useEffect } from 'react'

export const OverviewContext = createContext(undefined)

export const OverviewProvider = ({ children }) => {
  const [overview, setOverview] = useState({
    value: null,
    isLoading: false,
    errors: null
  })

  const fetchOverview = async () => {
    const data = await fetch(`${window.location.origin}/json-overview`).then(response => response.json()).catch(error => console.log(error))

    if (data) {
      setOverview({
        value: data,
        isLoading: false,
        errors: null
      })
    }
  }

  useEffect(() => {
    fetchOverview()
  }, [])

  return (
    <OverviewContext.Provider value={{ overview, setOverview }}>
      {children}
    </OverviewContext.Provider>
  )
}

export const useOverview = () => useContext(OverviewContext)
