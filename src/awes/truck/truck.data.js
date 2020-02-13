import React from 'react'

export const Truck_Data = [
    {
      // Make an expander cell
      Header: () => null, // No header
      id: 'expander', // It needs an ID
      Cell: ({ row }) => (
        // Use Cell to render an expander for each row.
        // We can use the getExpandedToggleProps prop-getter
        // to build the expander.
        <span {...row.getExpandedToggleProps()}>
          {row.isExpanded ? '👇' : '👉'}
        </span>
      ),
    },
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
  ]