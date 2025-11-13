import { getData } from "../services/get.js"
import { postData } from "../services/post.js"
import { updateData } from "../services/update.js"

const updateController = async (req, res) => {
    try {
        const { id } = req.params
        const user = await updateData(id, req.body)
        res.status(200).json({
            message: "user successfully updated",
            data: user,
            total: 1,
            status: 200
        })
    } catch (error) {
        console.log(error)
        let code = error.path === "_id" ? 404 : 500
        res.status(code).json({
            message: error.path === "_id" ? "user not found" : error.message,
            data: null,
            total: 0,
            status: code
        })

    }
}

export {
    updateController
}