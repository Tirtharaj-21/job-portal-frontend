import axios from 'axios';

const API_url= "http://localhost:8080";

export const savepost = async(payload) =>{
  try{
  return await axios.post(`${API_url}/post`,payload);
  }
  catch(error){
    console.log("Error:", error.message);
  } 
}
export const getAllposts = async () =>{
  try{
    return await axios.get(`${API_url}/posts`);
    }
    catch(error){
      console.log("Error:", error.message);
    } 
}
