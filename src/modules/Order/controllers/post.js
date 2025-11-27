import { postData } from "../services/post.js"

const postController = async (req, res) => {
    try {
        const order = await postData(req.body)
        res.status(201).json({
            message: "Order placed successfully",
            data: order,
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