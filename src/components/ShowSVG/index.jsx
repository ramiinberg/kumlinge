import svg from '../../data/icons/sprite.svg'

function ShowSVG({ svgClass, iconName }) {
  return (
    <svg className={svgClass}>
      <use xlinkHref={`${svg}#${iconName}`} />
    </svg>
  )
}

export default ShowSVG
