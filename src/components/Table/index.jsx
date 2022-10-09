import './index.scss'
import data from '../../data/data'
import ShowSVG from '../ShowSVG'

function checkImportance(string) {
  if (string === 'high') {
    return (
      <ShowSVG
        iconName='icon-chevron-thin-up'
        svgClass='table__icon table__icon-green'
      />
    )
  }
  if (string === 'low') {
    return (
      <ShowSVG
        iconName='icon-chevron-thin-down'
        svgClass='table__icon table__icon-red'
      />
    )
  }
  return (
    <ShowSVG iconName='icon-minus' svgClass='table__icon table__icon-yellow' />
  )
}

function Table() {
  return (
    <table className='table'>
      <thead>
        <tr className='table__header'>
          <th className='table__header__cell1'>Kuvaus</th>
          <th className='table__header__cell2'>Tärkeysaste</th>
          <th className='table__header__cell3'>Kuka</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          const importanceSVG = checkImportance(item.importance)
          return (
            <tr key={item.id} className='table__data'>
              <td className='table__data__cell1'>{item.text}</td>
              <td className='table__data__cell2'>{importanceSVG}</td>
              <td className='table__data__cell3'>{item.who}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
