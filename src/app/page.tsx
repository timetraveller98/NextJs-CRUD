'use client'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () =>{

  const [product, setProduct] = useState<any[]>([])
  const router = useRouter();

   //Call Delete API

   const deleteProduct = async (id: any) => {
    if (confirm("Do you want to Delete ?")==true) {
    let product = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: 'Delete',
      cache:'no-cache',
    })
    product = await product.json();
      router.push('/')
  }null}

  //Call GET API
  useEffect(() => {
    axios.get("http://localhost:3000/api/product").then((res: any) => setProduct(res.data.data)).catch((err: any) => console.log(err))

  },[product])

 
  return (
    <>
    <h1 style={{textAlign:'center',margin:'20px'}}>PRODUCT DETAILS</h1>
      <table>
        <thead>
          <tr style={{ backgroundColor: 'black', color: 'white' }}>
            <th>SR.</th>
            <th>NAME</th>
            <th>WEIGHT KG</th>
            <th>PRICE</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>

        <tbody>

       {
            product.map((item: any, index: any) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.weight}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>{deleteProduct(item._id)}}  style={{ padding: '7px', backgroundColor: 'red', color: 'white', cursor: 'pointer' }}>Delete</button></td>
                <td><button onClick={()=>router.push(`/updateproduct/${item._id}`)} style={{ padding: '7px', backgroundColor: 'green', color: 'white', cursor: 'pointer' }} >Update</button></td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </>
  )

}
export default Home;