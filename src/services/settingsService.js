import axios from "axios";
import { BASE_URL } from "../utils/constants";




async function getSettingsData() {
    const url = `${BASE_URL}/api/settings`;
    // const url = `/api/settings`;
    try{
        const data = await axios({
            method:'get',
            url,
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true,

        });
        // console.log(data);
        return data;
    }catch(error){
        console.log(error);
        throw new Error(error);

    }
    
}



export {getSettingsData}