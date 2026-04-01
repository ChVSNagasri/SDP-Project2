import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Awarders() {

  const [data, setData] = useState([])
  const [error, setError] = useState("")

  const displayData = async () => {
    try {

      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://apidemo-netlify.vercel.app/api/users"
      )

      setData(response.data)

    } catch (error) {
      setError("Failed to fetch data (CORS issue)")
    }
  }

  useEffect(() => {
    displayData()
  }, [])

  return (
    <div>

      <h1>CTC Students</h1>

      {
        error ? <b>{error}</b> :

        data.length === 0 ? <b>Loading...</b> :

        <table border="1">

          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CITY</th>
              <th>PHONE</th>
              <th>COMPANY NAME</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.course}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>

        </table>
      }

    </div>
  )
}