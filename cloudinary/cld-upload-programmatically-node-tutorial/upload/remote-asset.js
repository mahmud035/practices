import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imagePath =
  'https://cdn.pixabay.com/photo/2015/03/26/09/42/breakfast-690128_1280.jpg';

// Node.js SDK Uploader function returns a Promise
cloudinary.uploader
  .upload(imagePath, { resource_type: 'image' })
  .then((result) => {
    console.log('success', JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log('error', JSON.stringify(error, null, 2));
  });
