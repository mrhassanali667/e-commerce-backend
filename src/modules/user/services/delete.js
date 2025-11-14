import mongoose from "mongoose"
import { deleteDataById, updateDataById } from "../db/index.js"

const deleteData = async (id) => {
    try {
        if (!mongoose.isValidObjectId(id)) {
            let err = new Error("invalid id format.")
            throw { message: err.message, code: 400 }
        }
        const data = await deleteDataById(id)
        if (!data) {
            let err = new Error("user not found.")
            throw { message: err.message, code: 400 }
        }
    } catch (error) {
        if (error.path) {
            let err = new Error("server internal error.")
            throw { message: err.message, code: 500 }
        }
        throw error
    }
}

export {
    deleteData
}