import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// 1. Set up and configure the SDK
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Log the configuration
console.log(cloudinary.config());

//* 2. Upload an image file to Cloudinary
const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);

    console.log('✅ Upload successful');
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

//* Gets details of an uploaded image
const getAssetInfo = async (publicId) => {
  const options = {
    colors: true,
  };

  try {
    const result = await cloudinary.api.resource(publicId, options);

    console.log('📊 Asset Details:');
    console.log(result);
    return result.colors;
  } catch (error) {
    console.error(error);
  }
};

//* 4. Transform the image
/*
 - Creates an HTML image tag with a transformation that
 - results in a circular thumbnail crop of the image  
 - focused on the faces, applying an outline of the  
 - first color, and setting a background of the second color.
*/
const createImageTag = (publicId, ...colors) => {
  // Set the effect color and background color
  const [effectColor, backgroundColor] = colors;

  // Create an image tag with transformations applied to the src URL
  let imageTag = cloudinary.image(publicId, {
    transformation: [
      { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
      { radius: 'max' },
      { effect: 'outline:10', color: effectColor },
      { background: backgroundColor },
    ],
  });

  return imageTag;
};

//* 5. Run the code
(async () => {
  // Set the image to upload
  const imagePath =
    'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

  // Upload the image
  const publicId = await uploadImage(imagePath);

  // Get the colors in the image
  const colors = await getAssetInfo(publicId);

  // Create an image tag, using two of the colors in a transformation
  const imageTag = createImageTag(publicId, colors[0][0], colors[1][0]);

  // Log the image tag to the console
  console.log(imageTag);
})();
