import { createData } from "../db/index.js"
import userScema from "../schemas/userschema.js"


const postData = async (body) => {
    try {
        if (!body || Object.keys(body).length === 0) {
            let err = new Error("Request body is missing or empty.")
            throw { message: err.message, code: 400 }
        }
        userScema.validateSync(body)
        const data = await createData(body)
        return data;
    } catch (error) {
        console.log(error)
        if (error.code) {
            if (error.code === 11000) {
                let err = new Error("email already in use.")
                throw { message: err.message, code: 409 }
            }
        } else {
            if (error.path) {
                let err = new Error("internal server error.")
                throw { message: err.message, code: 500 }
            }
        }
        throw error
    }
}

export {
    postData
}