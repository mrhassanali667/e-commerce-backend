import { updateDataById } from "../db/index.js"

const updateData = async (id, body) => {
    try {
        const { name, email, password } = body;
        if (!body || Object.keys(body).length === 0) {
            let err = new Error("Request body is missing or empty.")
            throw { message: err.message, code: 400 }
        }
        if (!name && !email && !password) {
            let err = new Error("Request contains invalid fields")
            throw { message: err.message, code: 400 }
        }

        const data = await updateDataById(id, body)
        return data;
    } catch (error) {
        throw error
    }
}

export {
    updateData
}