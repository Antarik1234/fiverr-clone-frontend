import axios from "axios";

const generateImageURL = async (image) => {
  const file = new FormData();
  file.append("file", image);
  console.log(import.meta.env.VITE_CLOUDINARY_PRESET)
  file.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
  file.append("cloud_name", import.meta.env.VITE_CLOUDINARY_ENV)

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_ENV}/image/upload`,
    file  
  );
  return data;
};

export default generateImageURL;