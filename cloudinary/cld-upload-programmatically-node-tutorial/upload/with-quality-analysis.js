import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imagePath =
  'https://cloudinary-training.github.io/cld-advanced-concepts/assets/images/image-from-tv.jpg';

// Node.js SDK Uploader function returns a Promise
cloudinary.uploader
  .upload(imagePath, { quality_analysis: true })
  .then((result) => {
    console.log('success', JSON.stringify(result, null, 2));

    if (result.quality_analysis.focus < 0.75) {
      cloudinary.uploader.add_tag('blurry', [result.public_id]);
    }
  })
  .catch((error) => {
    console.log('error', JSON.stringify(error, null, 2));
  });
