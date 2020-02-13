import React from 'react'
// import makeData from './awes/job/makeJob-Data.data'
import makeData from './makeData'
import faker from 'faker'
import { Job_Data } from './awes/job/job.data'
import JobTable from './awes/job/job-table.component'


const App = () => {

  const columns = React.useMemo(
    () => Job_Data,
    []
  )

  const data = React.useMemo(() => makeData(15, 5), [])

  console.log(faker.name.firstName())
  console.log(faker.name.lastName())
  // console.log(faker.name.findName())
  // console.log(faker.name.findName())
  // console.log(faker.name.findName())

  return (
   <JobTable columns={columns} data={data} />
  )
}

export default App