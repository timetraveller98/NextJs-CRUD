'use client'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

  const [student, setStudent] = useState<any[]>([])
  const route = useRouter();

   //Call Delete API

   const deleteUser = async (id: any) => {
    let user = await fetch(`http://localhost:5000/${id}`, {
      method: 'Delete'
    })
    user = await user.json();
    alert("User Deleted")
    
  }

  //Call API
  useEffect(() => {
    axios.get("http://localhost:5000").then((res: any) => setStudent(res.data)).catch((err: any) => console.log(err))

  }, [])

 
  return (
    <>
    <h1 style={{textAlign:'center',margin:'20px'}}>USER DETAILS</h1>
      <table>
        <thead>
          <tr style={{ backgroundColor: 'black', color: 'white' }}>
            <th>Sr.</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>

       {
            student.map((item: any, index: any) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td><button onClick={() => {deleteUser(item._id)}} style={{ padding: '7px', backgroundColor: 'red', color: 'white', cursor: 'pointer' }}>Delete</button></td>
                <td><button onClick={() => route.push(`updateuser/${item._id}`)} style={{ padding: '7px', backgroundColor: 'green', color: 'white', cursor: 'pointer' }} >Update</button></td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </>
  )

}
export default Home;