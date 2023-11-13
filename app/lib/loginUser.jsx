
import { POST_USER_LOGIN_API } from "@/utils/Url";
import axios from "axios";

export default async function LoginUser (user) {
  
    try{     
        const Api = `${POST_USER_LOGIN_API}`
        const res = await axios.post(Api , user) 
        return res
        
        }catch(e){
          console.log(e)
        }
          
  }