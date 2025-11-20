import { updateData } from "../services/update.js"

const updateController = async (req, res) => {
    try {
        const { id } = req.params
        const product = await updateData(id, req.body)
        res.status(200).json({
            message: "product successfully updated",
            data: product,
            status: 200
        })
    } catch (error) {
        console.log(error)
        let code = error?.code
        res.status(code).json({
            message: error?.message,
            data: null,
            status: code
        })

    }
}

export {
    updateController
}