'use client'
import { useRouter } from 'next/navigation';
import {useState,useRef } from 'react'
import emailjs from '@emailjs/browser';

const AddUser = () => {

    const router = useRouter();
// Hooks
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();

    
    // Data

    const Name = (e: any) => {
        setName(e.target.value)
    }
    const Email = (e: any) => {
        setEmail(e.target.value)
    }
    const Contact = (e: any) => {
        setContact(e.target.value)
    }

    // Submit Post Data

    const handleSubmit = async()=>{
        alert('Data Submitted Succesfully')
        router.push('/');
        const pushData = await fetch("http://localhost:5000/adduser",{
            method:'POST',
            mode: "cors",
            cache: "no-cache",
            body: JSON.stringify({name,email,contact}),
            headers:{"Content-Type": "application/json"}})
         return pushData.json();
         }

    //  Mail Data
    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs.sendForm('service_hpbjt36', 'template_tmxx9fg',form.current, 'ajWZl7Vr9fAZufrXl')
          .then((result:any) => {
              console.log(result);
          }, (error:any) => {
              console.log(error);
          });
      };
     
      const form:any = useRef();

    return( <>
        <h1 style={{textAlign:'center',marginTop:'15px'}}>ADD USER</h1>
        <div id='formatData'> 
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name="user_name" value={name} onChange={Name} placeholder="Name" /><br />
                <input type="email" name="user_email" value={email} onChange={Email} placeholder="Email" /><br />
                <input type="number" name="user_contact" value={contact} onChange={Contact} placeholder="Contact" /><br />
                <button  value="Send" type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div></>
    )

}
export default AddUser;