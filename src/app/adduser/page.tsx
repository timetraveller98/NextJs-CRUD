'use client'
import { signupSchema } from '@/schemas'
import { useFormik } from 'formik'

const AddUser = () => {

    //  Form Handling By Formik
    const initialValues = {
        name: "",
        email: "",
        contact: ""
    }
    const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: async(values) => {
            let response = await fetch("http://localhost:3000/api/product", {
                method: "POST",
                body: JSON.stringify(values),
            })
            response = await response.json();}
        
    })

    // END

    return (<>
        <h1 style={{ textAlign: 'center', marginTop: '15px' }}>ADD USER</h1>
        <div id='formatData'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onBlur={handleBlur} value={values.name} autoComplete='off' onChange={handleChange} placeholder="Name" /><br />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <input type="email" name='email' onBlur={handleBlur} value={values.email} autoComplete='off' onChange={handleChange} placeholder="Email" /><br />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                <input type="number" name='contact' onBlur={handleBlur} value={values.contact} autoComplete='off' onChange={handleChange} placeholder="Contact" /><br />
                {errors.contact && touched.contact ? <p>{errors.contact}</p> : null}
                <button type='submit' >Submit</button>
            </form>
        </div></>
    )

}
export default AddUser;