import { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [userdata, setuserData] = useState([])
  const [studentdata, setstudentData] = useState([])
  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/users')
    setuserData(await response.json())

    // student data response 
    const responseStudents = await fetch('http://localhost:3000/students')
    setstudentData(await responseStudents.json())
    console.log(responseStudents)
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div>
        {userdata.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <br />
        <h1>Student data: </h1>
        {studentdata.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  )
}

export default App
