import { postData } from "../services/post.js"

const postController = async (req, res) => {
    try {
        const user = await postData(req.body)
        res.status(201).json({
            message: "user successfully added",
            data: user,
            status: 201
        })
    } catch (error) {
        let code = error.code
        res.status(code).json({
            message: error?.message,
            data: null,
            status: code
        })

    }
}

export {
    postController
}