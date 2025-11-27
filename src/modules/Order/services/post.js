import { createData } from "../db/index.js"
import { orderSchema } from "../schemas/orderschema.js"

const postData = async (body) => {
    try {
        if (!body || Object.keys(body).length === 0) {
            let err = new Error("Request body is missing or empty.")
            throw { message: err.message, code: 400 }
        }
        orderSchema.validateSync(body)
        const data = await createData({ ...body })
        return data;
    } catch (error) {
        console.log(error)
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