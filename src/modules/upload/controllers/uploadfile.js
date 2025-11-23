import uploadFile from "../upoadFile.js"

const fileUploadController = (req, res) => {
    try {
        uploadFile(req.file)
        res.json({
            message: "file succcessfully uploaded",
            status: 200
        })
    } catch (error) {

    }
}
export default fileUploadController