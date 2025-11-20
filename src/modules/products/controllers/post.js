import { postData } from "../services/post.js"

const postController = async (req, res) => {
    try {
        const product = await postData(req.body)
        res.status(201).json({
            message: "product successfully added",
            data: product,
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