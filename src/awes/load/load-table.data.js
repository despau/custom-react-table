import React  from 'react'

export const Load_Data = [
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
           Footer: 'First Name',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
           Footer: 'Last Name',
        },
      ],
    },
    {
      Header: 'Info',
       Footer: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
           Footer: 'Age',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
          Footer: info => {
            // Only calculate total visits if rows change
            const total = React.useMemo(
              () =>
                info.rows.reduce((sum, row) => row.values.visits + sum, 0),
              [info.rows]
            )

            return <>Total: {total}</>
          },
        },
        {
          Header: 'Status',
          accessor: 'status',
           Footer: 'Status',
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
           Footer: 'Profile Progress',
        },
      ],
    },
  ];