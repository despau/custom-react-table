import faker from 'faker'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newJob = () => {
    
  return {
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
    age: faker.random.number(),
    visits: faker.random.number(),
    status: faker.random.word(),
    progress: faker.random.number()
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
          
        ...newJob(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}


