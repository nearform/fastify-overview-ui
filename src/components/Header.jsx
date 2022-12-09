import T from 'prop-types'

import { useOverview } from '../store'
import { DECORATOR, HOOK, ROUTE } from '../utils/data'
import { colors } from '../utils/theme'
import IconDecorator from './IconDecorator'
import IconHook from './IconHook'
import IconRoutes from './IconRoutes'
import IconSave from './IconSave'
import LogoFastify from './LogoFastify'
import PlotterFilterButton from './PlotterFilterButton'

export default function Header({ filters, setFilters }) {
  const { svgRef } = useOverview()
  function downloadSvg() {
    if (!svgRef.current) {
      return
    }
    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svgRef.current)
    const blob = new Blob([svgString], { type: 'image/svg;charset=utf-8' })
    const downloadUrl = URL.createObjectURL(blob)
    const downloadLink = document.createElement('a')
    downloadLink.href = downloadUrl
    downloadLink.download = 'overview_diagram.svg'
    downloadLink.click()
  }
  return (
    <header className="shadow z-10 filter drop-shadow-2xl">
      <nav className="text-gray-900 flex justify-between p-4 items-center">
        <LogoFastify className="h-8 text-gray-900 " />
        <div>
          <div className="flex justify-end">
            <button
              className="rounded-lg border border-gray-100 px-3 py-2 shadow font-bold text-sm uppercase flex items-center"
              onClick={downloadSvg}
            >
              <IconSave />
            </button>
          </div>
        </div>
      </nav>
      <nav className="border-t border-gray-100 p-4">
        <div className="flex justify-end">
          <PlotterFilterButton
            color={colors[HOOK]}
            active={filters.showHooks}
            onClick={() =>
              setFilters({ ...filters, showHooks: !filters.showHooks })
            }
          >
            <IconHook /> Hooks
          </PlotterFilterButton>
          <PlotterFilterButton
            color={colors[DECORATOR]}
            active={filters.showDecorators}
            onClick={() =>
              setFilters({
                ...filters,
                showDecorators: !filters.showDecorators
              })
            }
          >
            <IconDecorator /> Decorators
          </PlotterFilterButton>
          <PlotterFilterButton
            color={colors[ROUTE]}
            active={filters.showRoutes}
            onClick={() =>
              setFilters({ ...filters, showRoutes: !filters.showRoutes })
            }
          >
            <IconRoutes /> Routes
          </PlotterFilterButton>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  filters: T.shape({
    showHooks: T.bool,
    showDecorators: T.bool,
    showRoutes: T.bool
  }),
  setFilters: T.func
}
