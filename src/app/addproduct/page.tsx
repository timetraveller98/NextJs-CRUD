'use client'
import { productSchema } from '@/schemas'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

const AddProduct = () => {

    const router = useRouter();

    //  Form Handling By Formik
    const initialValues = {
        name: "",
        weight: "",
        price: ""
    }
    const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
        initialValues,
        validationSchema: productSchema,
        onSubmit: async(values) => {
            let response = await fetch("http://localhost:3000/api/product", {
                method: "POST",
                body: JSON.stringify(values),
            })
            response = await response.json();
            alert('Product Added')
            router.push('/')
        }
            
        
    })

    // END

    return (<>
        <h1 style={{ textAlign: 'center', marginTop: '15px' }}>ADD PRODUCT</h1>
        <div id='formatData'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onBlur={handleBlur} value={values.name} autoComplete='off' onChange={handleChange} placeholder="Name" /><br />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <input type="number" name='weight' onBlur={handleBlur} value={values.weight} autoComplete='off' onChange={handleChange} placeholder="Weight in KG" /><br />
                {errors.weight && touched.weight ? <p>{errors.weight}</p> : null}
                <input type="number" name='price' onBlur={handleBlur} value={values.price} autoComplete='off' onChange={handleChange} placeholder="Price" /><br />
                {errors.price && touched.price ? <p>{errors.price}</p> : null}
                <button type='submit' >Submit</button>
            </form>
        </div></>
    )

}
export default AddProduct;