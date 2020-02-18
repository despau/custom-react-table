

export const CustomSimpleData = [
    // {
    //   // Build our expander column
    //   Header: () => 'Expand', // No header, please
    //   id: 'expander', // Make sure it has an ID
    //   Cell: ({ row }) =>
    //     // Use the row.canExpand and row.getExpandedToggleProps prop getter
    //     // to build the toggle for expanding a row
    //     row.canExpand ? (
    //       <span
    //         {...row.getExpandedToggleProps({
    //           style: {
    //             // We can even use the row.depth property
    //             // and paddingLeft to indicate the depth
    //             // of the row
    //             paddingLeft: `${row.depth * 2}rem`,
    //           },
    //         })}
    //       >
    //         {row.isExpanded ? '👇' : '👉'}
    //       </span>
    //     ) : null,
    // },
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
  ];