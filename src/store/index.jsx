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

// reducers: {
//   startLoading: (state) => {
//     state.isLoading = true
//   },
//   load: (state, action) => {
//     state.value = action.payload
//   },
//   loadSuccess: (state, action) => {
//     state.value = action.payload
//     state.isLoading = false
//   },
//   loadErrors: (state, action) => {
//     state.errors = action.payload
//     state.isLoading = false
//   }
// }
