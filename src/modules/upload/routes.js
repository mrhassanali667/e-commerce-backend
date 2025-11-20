import { Router } from "express";
import multer from "multer";
import uploadFile from "./upoadFile.js";
import imageUploadController from "./controllers/uploadimage.js";

const uploadRoutes = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `src/modules/upload/files/${file.fieldname}s`)
    },
    filename: function (req, file, cb) {
        console.log(file)
        const uniqueId = Date.now().toString(36)
        cb(null, `${uniqueId}-${file.fieldname}.${file.mimetype.split("/")[1]}`)
    }
})

const fileFilter = (req, file, cb) => {

    if (req.path === "/file") {
        return cb(null, true)
    }
    if (file.mimetype.startsWith(`${req.path.split("/")[1]}`)) {
        cb(null, true)
    } else {
        cb(new Error("this file is not allowed"), false)
    }

}

const upload = multer({ storage: storage, fileFilter: fileFilter })

uploadRoutes.post('/image', upload.single("image"), imageUploadController)
uploadRoutes.post('/video', upload.single("video"), uploadFile)
uploadRoutes.post('/file', upload.single("file"), uploadFile)

export default uploadRoutes