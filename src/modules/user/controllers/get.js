import { getData } from "../services/get.js"

const getController = async (req, res) => {
    try {
        const users = await getData(req.body)
        res.status(200).json({
            message: "users successfully fetched",
            data: users,
            total: users?.length,
            status: 200
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            message: error?.message,
            data: null,
            total: 0,
            status: 200
        })

    }
}

export {
    getController
}