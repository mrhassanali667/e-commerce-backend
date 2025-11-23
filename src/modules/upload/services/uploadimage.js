import { v2 as cloudinary } from 'cloudinary'

const uploadImage = async (file) => {
    console.log(file)
    const uploadResult = await cloudinary.uploader
        .upload(
            `src/modules/upload/storage/images/${file.filename}`, {
            folder: "images",
            public_id: 'image',
        }
        )
        .catch((error) => {
            console.log(error);
        });

    console.log(uploadResult);
}
export default uploadImage