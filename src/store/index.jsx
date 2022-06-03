import T from 'prop-types'
import { useState, createContext, useContext, useEffect } from 'react'

export const OverviewContext = createContext(undefined)

export const OverviewProvider = ({ children }) => {
  const [overview, setOverview] = useState({
    value: null,
    isLoading: false,
    errors: null
  })

  const fetchOverview = async () => {
    const response = await fetch(`${window.location.origin}/json-overview-ui`)
    const data = await response.json()

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

OverviewProvider.propTypes = {
  children: T.node
}

export const useOverview = () => useContext(OverviewContext)
