import * as yup from 'yup'

const userScema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email("email must be a valid email").required("email is required"),
    password: yup.string().required("password is required"),

})

export default userScema