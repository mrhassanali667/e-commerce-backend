import { deleteData } from "../services/delete.js"
import { getData } from "../services/get.js"
import { postData } from "../services/post.js"
import { updateData } from "../services/update.js"

const deleteController = async (req, res) => {
    try {
        const { id } = req.params
        await deleteData(id)
        res.status(200).json({
            message: "sser successfully deleted",
            status: 200
        })
    } catch (error) {
        console.log(error)
        let code = error.path === "_id" ? 404 : 500
        res.status(code).json({
            message: error.path === "_id" ? "invalid id format" : error.message,
            status: code
        })

    }
}

export {
    deleteController
}