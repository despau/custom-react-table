import React from 'react'
import { Styles } from './load-table.styles'

import { useTable } from 'react-table'



const LoadTable =({ columns, data })=> {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <Styles>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(group => (
          <tr {...group.getHeaderGroupProps()}>
            {group.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {footerGroups.map(group => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map(column => (
              <td {...column.getFooterProps()}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    </Styles>
  )
}

export default LoadTable;