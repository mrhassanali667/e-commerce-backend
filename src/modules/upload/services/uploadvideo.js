import { v2 as cloudinary } from 'cloudinary'

const uploadVideo = async (file) => {
    try {
        const uploadResult = await cloudinary.uploader
            .upload(
                `src/modules/upload/storage/videos/${file.filename}`, {
                folder: "videos",
                public_id: 'video',
            }
            )
        console.log(uploadResult);
    } catch (error) {
        console.log(error)
        throw error
    }

}
export default uploadVideo