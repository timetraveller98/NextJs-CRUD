import * as yup from 'yup';

export const signupSchema = yup.object({
name:yup.string().min(3,'Too Short').max(25, 'Too Long').required("required"),
email:yup.string().email('Invalid Email').required("required"),
contact:yup.number().required("required")
})

