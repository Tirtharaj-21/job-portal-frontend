import axios from "axios";

// const API_url= "https://job-portal-backend-api-p9rn.onrender.com";
const API_url = import.meta.env.VITE_API_URL;
console.log(API_url);

export const savepost = async (payload) => {
  try {
    console.log(API_url);
    return await axios.post(`${API_url}/post`, payload);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
export const getAllposts = async () => {
  try {
    console.log(API_url);
    return await axios.get(`${API_url}/posts`);
  } catch (error) {
    console.log("Error:", error.message);
  }
};
