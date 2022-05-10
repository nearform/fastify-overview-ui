import { useMemo, useState } from 'react'

import { transformData } from '../utils/data'

export default function useGraphData (data) {
  const [filters, setFilters] = useState({
    showDecorators: true,
    showRoutes: true,
    showHooks: true
  })

  const chartData = useMemo(() => {
    if (data) {
      return transformData(data, filters)
    }
  }, [data, filters])

  return {
    chartData,
    filters,
    setFilters
  }
}
