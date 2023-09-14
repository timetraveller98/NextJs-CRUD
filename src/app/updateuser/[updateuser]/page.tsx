'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


const UpdateUser = () => {    
    
const router = useRouter();

// Hooks
    const [name, SetName] = useState();
    const [email, SetEmail] = useState();
    const [contact, SetContact] = useState();

    
// Call Single API Data

const params = useParams();
useEffect(()=>{
   
pullData();
 
},[])
const pullData = async()=>{
let singleData =await axios.get(`http://localhost:3000/api/product/${params.updateuser}`).then((res)=>(res.data.data)).
    catch((err)=>console.log(err,+'Error Found Fetch API'))
    SetName(singleData.name)
    SetEmail(singleData.email)
    SetContact(singleData.contact)

}

    // Data

    const Name = (e: any) => {
        SetName(e.target.value)
    }
    const Email = (e: any) => {
        SetEmail(e.target.value)
    }
    const Contact = (e: any) => {
        SetContact(e.target.value)
    }

    // Update User Data

    const handleUpdate = async()=>{
        router.push('/');
        const pushData = await fetch(`http://localhost:3000/api/product/${params.updateuser}`,{
            method:'Put',
            body: JSON.stringify({name,email,contact}),
            headers:{"Content-Type": "application/json"}})
            await pushData.json();
            alert("Updated")
        }

    return( <>
        <h1 style={{textAlign:'center',marginTop:'15px'}}>UPDATE USER</h1>
        <div id='formatData'>
            
            <form onSubmit={(e: any) => { e.preventDefault() }} >
                <input type="text" value={name} onChange={Name} placeholder="Name" /><br />
                <input type="email" value={email} onChange={Email} placeholder="Email" /><br />
                <input type="number" value={contact} onChange={Contact} placeholder="Contact" /><br />
                <button onClick={handleUpdate}>Submit</button>
            </form>
        </div></>
    )

}
export default UpdateUser;