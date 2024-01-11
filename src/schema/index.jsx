import * as Yup from "yup"
export const signinSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            'Password must contain a combination of uppercase and lowercase letters and numbers'
        )
        .required('Password is required')
})