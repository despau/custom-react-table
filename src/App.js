import React from 'react'
import makeData from './makeData'

// import SimpleTable from './components/simple-table.component'
// import {Simple_Data} from './components/simple-table.data'

// import LoadTable from './awes/load/load-table.component'
// import { Load_Data } from './awes/load/load-table.data'

import {Store_Data} from './awes/store/store.data'
import StoreTable from './awes/store/store-table.component'

    // Let's simulate a large dataset on the server (outside of our component)
    const serverData = makeData(10000)
const App = () => {

    const columns = React.useMemo(
      () => Store_Data,
      []
    );

    // const data = React.useMemo(() => makeData(10), []);

            // We'll start our table without any data
        const [data, setData] = React.useState([])
        const [loading, setLoading] = React.useState(false)
        const [pageCount, setPageCount] = React.useState(0)
        const fetchIdRef = React.useRef(0)

        const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
          // This will get called when the table needs new data
          // You could fetch your data from literally anywhere,
          // even a server. But for this example, we'll just fake it.

          // Give this fetch an ID
          const fetchId = ++fetchIdRef.current

          // Set the loading state
          setLoading(true)

          // We'll even set a delay to simulate a server here
          setTimeout(() => {
            // Only update the data if this is the latest fetch
            if (fetchId === fetchIdRef.current) {
              const startRow = pageSize * pageIndex
              const endRow = startRow + pageSize
              setData(serverData.slice(startRow, endRow))

              // Your server could send back total page count.
              // For now we'll just fake it, too
              setPageCount(Math.ceil(serverData.length / pageSize))

              setLoading(false)
            }
          }, 1000)
        }, [])


    return (
        // <SimpleTable columns={columns} data={data}/>

        <StoreTable 
          columns={columns}
          data={data}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
        />
    )
}

export default App