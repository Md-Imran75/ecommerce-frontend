
import { POST_USER_API } from "@/utils/Url";
import axios from "axios";

export default async function postUser (user) {
  
    try{     
        const Api = `${POST_USER_API}`
        const res = await axios.post(Api , user) 
        return res
        
        }catch(e){
          console.log(e)
        }
          
  }