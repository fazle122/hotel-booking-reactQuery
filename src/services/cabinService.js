import axios from "axios";
import { BASE_URL } from "../utils/constants";



async function fetchCabinData({filters}) {
    console.log(filters)
    var url = `${BASE_URL}/api/cabins`;
    // var url = `/api/cabins`;
    console.log(url);
    try{
        const response = await axios({
            method:'get',
            url,
            headers:{
                'Content-Type':'application/json',
                // "Access-Control-Allow-Origin": "*"
            },
            withCredentials:true,
            params:filters
        });
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
        throw new Error(error);

    }
}


async function fetchAvailableCabinData({filters}) {
    console.log(filters)
    var url = `${BASE_URL}/api/cabins/top`;
    // var url = `/api/cabins/top`;
    console.log(url);
    try{
        const response = await axios({
            method:'get',
            url,
            headers:{
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            withCredentials:true,
            params:filters
        });
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
        throw new Error(error);

    }
}


async function fetchCabinDetail(id) {
    console.log(id);
    var url = `${BASE_URL}/api/cabins/${id}`;
    // var url = `/api/cabins/${id}`;
    try{
        const response = await axios({
            method:'get',
            url,
            headers:{
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            withCredentials:true,

        });
        // console.log(response);
        return response;
    }catch(error){
        console.log(error);
        throw new Error(error);

    }
}



async function createNewCabin(cabinData) {
    var url = `${BASE_URL}/api/cabins/new`;
    // var url = `/api/cabins/new`;
    console.log(cabinData);
    const newCabinData = {
        name:cabinData['name'],
        description:cabinData['description'],
        capacity:cabinData['capacity'],
        regularPrice:Number(cabinData['regularPrice']),
        discount:Number(cabinData['discount'])
    }
    console.log(newCabinData);
    try{
        const response = await axios({
            method:'post',
            url,
            headers:{
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            withCredentials:true,
            data:newCabinData
        });
        // console.log(response);
        return response;
    }catch(error){
        console.log(error);
        throw new Error(error.response.data.message || error.message);
    }
    
}

async function updateCabinData({id,cabinData}) {
    var url = `${BASE_URL}/api/cabins/${id}`;
    // var url = `/api/cabins/${id}`;
    console.log(cabinData);
    console.log(id);
    const newCabinData = {
        name:cabinData.name,
        description:cabinData['description'],
        capacity:cabinData['capacity'],
        regularPrice:Number(cabinData['regularPrice']),
        discount:Number(cabinData['discount'])
    }
    console.log(newCabinData);
    try{
        const response = await axios({
            method:'put',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
            data:newCabinData
        });
        // console.log(response);
        return response;
    }catch(error){
        console.log(error);
        throw new Error(error.response.data.message || error.message);
    }
    
}

async function uploadCabinImage(id,data) {
    var url = `${BASE_URL}/api/cabins/${id}/upload_images`;
    // var url = `/api/cabins/${id}/upload_images`;
    console.log(data);
    console.log(id);
    try{
        const response = await axios({
            method:'put',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
            data
        });
        console.log(response);
        return data;
    }catch(error){
        console.log(error);
        throw new Error(error.response.data.message || error.message);
    }
}

async function deleteCabinImage(id,data) {
    var url = `${BASE_URL}/api/cabins/${id}/delete_image`;
    // var url = `/api/cabins/${id}/delete_image`;
    console.log(id);
    console.log(data);

    try{
        const response = await axios({
            method:'put',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
            data:data
        });
        console.log(response);
        return response;
    }catch(error){
        console.log(error);
        throw new Error(error.response.data.message || error.message);
    }
}




async function deleteCabin(id){
    var url = `${BASE_URL}/api/cabins/${id}`;
    // var url = `/api/cabins/${id}`;

    try{
        const response = await axios({
            method:'delete',
            url,
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,

        })
        // console.log(response);
        return response;

    }catch(error){
        console.log(error);
        throw new Error(error.response.data.message || error.message);
    }

}


export {fetchCabinData,fetchAvailableCabinData,fetchCabinDetail,createNewCabin,updateCabinData,uploadCabinImage,deleteCabinImage,deleteCabin}