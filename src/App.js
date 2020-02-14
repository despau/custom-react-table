import React from 'react'
import './App.css'

import CustomSimpleTable from './reylla/simple-table/custom-simple-table.component'
import { CustomSimpleData } from './reylla/simple-table/custom-simple-table.data'
import makeData from './makeJob-Data.data'






const App = () => {

  const columns = React.useMemo(
  () => CustomSimpleData,
  []
)
  const tableData = React.useMemo(() => makeData(10, 3), [])

  return(
    <div className="mainapp">
      <CustomSimpleTable columns={columns} data={tableData} />
    </div>
  )
}

export default App
