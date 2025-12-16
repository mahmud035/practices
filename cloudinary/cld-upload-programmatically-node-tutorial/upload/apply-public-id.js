import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagePath = path.resolve(__dirname, '../assets/images/breakfast.jpg');

// Node.js SDK Uploader function returns a Promise
cloudinary.uploader
  .upload(imagePath, {
    public_id: 'breakfast',
  })
  .then((result) => {
    console.log('success', JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log('error', JSON.stringify(error, null, 2));
  });
