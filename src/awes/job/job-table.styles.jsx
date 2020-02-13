import styled from 'styled-components'

export const Styles = styled.div`
        padding: 1rem;

        table {
        border-spacing: 0;
        border: 1px solid black;

        tr {
            :last-child {
            td {
                border-bottom: 0;
            }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
            border-right: 0;
            }
        }
    }
`




//##############################################################################//#endregion



// import React from 'react'
// import { Styles } from './job-table.styles'

// import { useTable, useRowSelect, useSortBy } from 'react-table'


//   const IndeterminateCheckbox = React.forwardRef(
//     ({ indeterminate, ...rest }, ref) => {
//       const defaultRef = React.useRef()
//       const resolvedRef = ref || defaultRef

//       React.useEffect(() => {
//         resolvedRef.current.indeterminate = indeterminate
//       }, [resolvedRef, indeterminate])

//       return (
//         <>
//           <input type="checkbox" ref={resolvedRef} {...rest} />
//         </>
//       )
//     }
//   )
  
// export const JobTable = ({ columns, data }) => {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     selectedFlatRows,
//     state: { selectedRowIds },
//   } = useTable(
//     {
//       columns,
//       data,
//     },
//     useRowSelect,
//     useSortBy,
//     hooks => {
//       hooks.flatColumns.push(columns => [
//         // Let's make a column for selection
//         {
//           id: 'selection',
//           // The header can use the table's getToggleAllRowsSelectedProps method
//           // to render a checkbox
//           Header: ({ getToggleAllRowsSelectedProps }) => (
//             <div>
//               <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
//             </div>
//           ),
//           // The cell can use the individual row's getToggleRowSelectedProps method
//           // to the render a checkbox
//           Cell: ({ row }) => (
//             <div>
//               <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
//             </div>
//           ),
//         },
//         ...columns,
//       ])
//     }
//   )

//   // Render the UI for your table
//   return (
//     <Styles>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 // <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render('Header')}
//                   {/* Add a sort direction indicator */}
//                   <span>
//                     {column.isSorted
//                       ? column.isSortedDesc
//                         ? ' 🔽'
//                         : ' 🔼'
//                       : ''}
//                   </span>
//               </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.slice(0, 10).map((row, i) => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//       <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
//       <pre>
//         <code>
//           {JSON.stringify(
//             {
//               selectedRowIds: selectedRowIds,
//               'selectedFlatRows[].original': selectedFlatRows.map(
//                 d => d.original
//               ),
//             },
//             null,
//             2
//           )}
//         </code>
//       </pre>
//     </Styles>
//   )
// }

// export default JobTable;



















