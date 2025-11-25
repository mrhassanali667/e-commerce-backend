import uploadImage from "../services/uploadimage.js"

const imageUploadController = async (req, res) => {
    try {
        const URL = await uploadImage(req.file)
        res.json({
            message: "image succcessfully uploaded",
            imageUrl: URL,
            status: 200
        })
    } catch (error) {

    }
}
export default imageUploadController