import uploadImage from "../services/uploadimage.js"

const imageUploadController = (req, res) => {
    try {
        uploadImage(req.file)
        res.json({
            message: "file succcessfully uploaded",
            status: 200
        })
    } catch (error) {

    }
}
export default imageUploadController