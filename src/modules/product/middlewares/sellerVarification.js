import jwt from 'jsonwebtoken'
import 'dotenv/config'
import Model from '../../user/models/usermodel.js'

const sellerVerification = async (req, res, next) => {
    try {

        if (req.headers?.authorization) {
            const token = req.headers?.authorization.split(" ")[1]
            const { email } = jwt.verify(token, process.env.JWT_KEY)
            console.log(email)
            const user = await Model.findOne({
                email: email
            })
            console.log(user)
            if (user) {
                if (user.isSeller) {
                    next()
                }
                res.status(403).json({
                    message: "Access denied: User is not a seller.",
                    status: 403
                })
            } else {
                res.status(404).json({
                    message: "User not found",
                    status: 404
                })
            }
        } else {
            res.status(400).json({
                message: "Token not provided",
                status: 400
            })
        }

    }
    catch (err) {
        console.log(err)
        res.status(401).json({
            message: "token unauthorized ",
            status: 401
        })
    }
}

export default sellerVerification