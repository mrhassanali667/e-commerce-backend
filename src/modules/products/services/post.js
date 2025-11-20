import { createData } from "../db/index.js"
import productScema from "../schemas/productSchema.js"


const postData = async (body) => {
    try {
        if (!body || Object.keys(body).length === 0) {
            let err = new Error("Request body is missing or empty.")
            throw { message: err.message, code: 400 }
        }
        productScema.validateSync(body)
        const data = await createData(body)
        return data;
    } catch (error) {
        if (error?.code) {
            if (error.code === 11000) {
                let err = new Error("email already in use.")
                throw { message: err?.message, code: 409 }
            }
            throw error
        }

        if (error?.name === "ValidationError") {
            throw { message: error?.message, code: 400 }
        }

        throw { message: "internal server error.", code: 500 }

    }
}

export {
    postData
}