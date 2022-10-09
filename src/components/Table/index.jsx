import './index.scss'
import data from '../../data/data'

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
        {data.map(item => (
          <tr key={item.id} className='table__data'>
            <td className='table__data__cell1'>{item.text}</td>
            <td className='table__data__cell2'>{item.importance}</td>
            <td className='table__data__cell3'>{item.who}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
