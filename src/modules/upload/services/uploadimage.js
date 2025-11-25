import { v2 as cloudinary } from 'cloudinary'
import fsExtra from 'fs-extra';
import sharp from 'sharp';

const uploadImage = async (file) => {

    sharp(`src/modules/upload/storage/images/${file.filename}`)
        .resize(1000)
        .webp({ quality: 50 })
        .toFile(`src/modules/upload/storage/images/resize-${file.filename}`, (err, info) => {
            console.log(info)
            console.log(err)
        })
    fsExtra.removeSync(`src/modules/upload/storage/images/${file.filename}`)
    try {
        const uploadResult = await cloudinary.uploader
            .upload(
                `src/modules/upload/storage/images/resize-${file.filename}`, {
                folder: "images",
                public_id: file.filename
            })
        console.log(uploadResult);
        fsExtra.removeSync(`src/modules/upload/storage/images/resize-${file.filename}`)
        return uploadResult.url
    } catch (error) {
        console.log(error)
    }



}
export default uploadImage