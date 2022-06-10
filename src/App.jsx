import { useState } from 'react'

import Header from './components/Header'
import RadialTree from './components/RadialTree'
import useGraphData from './hooks/useGraphData'

import { OverviewProvider, useOverview } from './store'

const Layout = () => {
  const { overview } = useOverview()
  const { chartData, filters, setFilters } = useGraphData(overview.value)
  const [currentNode, setCurrentNode] = useState('')
  return (
    <div className="flex w-screen h-screen flex-col">
      <Header {...{ filters, setFilters, currentNode }} />
      <RadialTree
        {...{ chartData, currentNode, setCurrentNode }}
        className="w-full shadow-inner h-full"
      />
    </div>
  )
}

function App() {
  return (
    <OverviewProvider>
      <Layout />
    </OverviewProvider>
  )
}

export default App
