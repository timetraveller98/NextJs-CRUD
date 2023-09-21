import * as yup from 'yup';

export const productSchema = yup.object({
name:yup.string().min(3,'Too Short').max(25, 'Too Long').required("required"),
weight:yup.number().required("required"),
price:yup.number().required("required")
})

