import { getData } from "../services/get.js"
import { postData } from "../services/post.js"

const postController = async (req, res) => {
    try {
        const user = await postData(req.body)
        res.status(201).json({
            message: "user successfully added",
            data: user,
            total: 1,
            status: 201
        })
    } catch (error) {
        console.log(error)
        res.status(201).json({
            message: error.code === 11000 ? "email is already in use" : error.message,
            data: null,
            total: 0,
            status: 500
        })

    }
}

export {
    postController
}