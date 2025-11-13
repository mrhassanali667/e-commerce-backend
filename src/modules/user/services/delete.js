import { deleteDataById, updateDataById } from "../db/index.js"

const deleteData = async (id) => {
    try {
        const data = await deleteDataById(id)
        if (!data) {
            let err = new Error("user not found")
            throw { message: err.message, code: 400 }
        }
    } catch (error) {
        throw error
    }
}

export {
    deleteData
}