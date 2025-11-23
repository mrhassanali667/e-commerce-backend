import uploadVideo from "../services/uploadvideo.js"

const videoUploadController = (req, res) => {
    try {
        uploadVideo(req.file)
        res.json({
            message: "file succcessfully uploaded",
            status: 200
        })
    } catch (error) {
        res.json({
            message: "internal server error",
            status: 500
        })

    }
}
export default videoUploadController