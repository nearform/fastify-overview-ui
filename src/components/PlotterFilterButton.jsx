import T from 'prop-types'

export default function PlotterFilterButton({
  active,
  onClick,
  color,
  children
}) {
  return (
    <button
      className={`rounded-lg border border-gray-100 px-3 py-2 shadow font-bold text-sm uppercase mr-2 last:mr-0 flex items-center
      ${active ? '' : 'opacity-30'}`}
      style={{ color }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

PlotterFilterButton.propTypes = {
  active: T.bool,
  onClick: T.func,
  color: T.string,
  children: T.node
}
