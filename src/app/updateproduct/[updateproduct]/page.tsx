'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


const UpdateProduct = () => {

    const router = useRouter();

    // Hooks
    const [name, setName] = useState();
    const [weight, setWeight] = useState();
    const [price, setPrice] = useState();


    // Call Single API Data

    const params = useParams();
    useEffect(() => {

        pullData();

    }, [])
    const pullData = async () => {
        let singleData = await axios.get(`http://localhost:3000/api/product/${params.updateproduct}`).then((res) => (res.data.data)).
            catch((err) => console.log(err, +'Error Found Fetch API'))
        setName(singleData.name)
        setWeight(singleData.weight)
        setPrice(singleData.price)

    }

    // Data

    const Name = (e: any) => {
        setName(e.target.value)
    }
    const Weight = (e: any) => {
        setWeight(e.target.value)
    }
    const Price = (e: any) => {
        setPrice(e.target.value)
    }

    // Update User Data

    const handleUpdate = async () => {

        const pushData = await fetch(`http://localhost:3000/api/product/${params.updateproduct}`, {
            method: 'Put',
            body: JSON.stringify({ name, weight, price }),
            headers: { "Content-Type": "application/json" }
        })
        await pushData.json();
        alert("Updated")
        router.push('/');
    }

    return (<>
        <h1 style={{ textAlign: 'center', marginTop: '15px' }}>UPDATE PRODUCT</h1>
        <div id='formatData'>

            <form onSubmit={(e: any) => { e.preventDefault() }} >
                <input type="text" value={name} onChange={Name} placeholder="Name" /><br />
                <input type="number" value={weight} onChange={Weight} placeholder="Weight KG" /><br />
                <input type="number" value={price} onChange={Price} placeholder="Price" /><br />
                <button onClick={handleUpdate}>Submit</button>
            </form>
        </div></>
    )

}
export default UpdateProduct;