const imageUploadController = (req, res) => {
    console.log(req.file)
    res.json({
        message: "file succcessfully uploaded",
        status: 200
    })
}
export default imageUploadController