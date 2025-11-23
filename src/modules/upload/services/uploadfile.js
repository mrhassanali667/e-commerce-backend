import { v2 as cloudinary } from 'cloudinary'

const uploadFile= async (file) => {
    const uploadResult = await cloudinary.uploader
        .upload(
            `src/modules/upload/storage/files/${file.filename}`, {
            folder: "files",
            public_id: 'file',
        }
        )
        .catch((error) => {
            console.log(error);
        });

    console.log(uploadResult);
}
export default uploadFile