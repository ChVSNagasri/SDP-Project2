import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Awarders() 
{ 
    const[data,setData]=useState([])
    const [error,setError]=useState("")
const displayData=async ()=>{
        try
        {
          
       const response=await axios.get("https://jsonplaceholder.typicode.com/users") 
           setData(response.data)
        } 
        
        catch (error) 
        {
           setError(error.message) 
        }
    }

    useEffect(() => {
        displayData()
    }, []);
  return (
    <div>
    <h1>CTC Students</h1> 
    {
        error? <b>{error}</b>:
        data.length==0? <b>Loading...</b>:
    <table border={1}>
        <tr>
            <th>ID</th>
             <th>NAME</th>
             <th>CITY</th>
             <th>PHONE</th>
             <th>Company NAME</th>
        </tr>
        {
            data.map((user,index)=>(
            <tr key={index}>
                <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.address.city}</td>
               <td>{user.phone}</td>
               <td>{user.company.name}</td>
            </tr>
            ) )
        }
    </table>
}
    </div>
  )
}