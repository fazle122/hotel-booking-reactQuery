import axios from "axios"
import { BASE_URL } from "../utils/constants";


function getLoggedInUser(){
    return localStorage.getItem('guestInfo') ? JSON.parse(localStorage.getItem('guestInfo')) : null
}


function setLoggedInUser(userData){
    console.log(userData)
    localStorage.setItem('guestInfo',JSON.stringify(userData));
}



async function login(authData) {
    const url = `${BASE_URL}/api/users/login`;
    // const url = `/api/users/login`;
    console.log(authData);
    try{
        const responseData = await axios({
            method:"post",
            url,
            headers:{
                'Content-Type' : 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials':true
            },
            withCredentials:true,
            data:authData
        })
        console.log(responseData);
        return responseData;

    }catch(err){
        console.log(err)
        throw new Error(err.response.data.message);
    }
}


async function logout() {
    const url = `${BASE_URL}/api/users/logout`
    // const url = `/api/users/logout`
    try{
        await axios({
            method:'post',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
        })
    }catch(err){
        console.log(err);
    }

    
}

async function signup(userData) {
    const url = `${BASE_URL}/api/users/new`
    // const url = `/api/users/new`
    try{
        const response =await axios({
            method:'post',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
            data:userData
        })
        console.log(response);
        return response;
    }catch(err){
        throw new Error(err.response.data.message);
    }
    
}


async function fetchUserProfile() {
    const url = `${BASE_URL}/api/users/profile`
    // const url = `/api/users/profile`
    try{
        const response =await axios({
            method:'get',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,

        })
        // console.log(response);
        return response;
    }catch(err){
        throw new Error(err.response.data.message);
    }
}


async function updateProfile(profileData) {
    const url = `${BASE_URL}/api/users/profile-edit`;
    // const url = `/api/users/profile-edit`;
    // console.log(profileData);
    try{
        const response =await axios({
            method:'put',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
            data:profileData
        })
        // console.log(response);
        return response;
    }catch(err){
        throw new Error(err.response.data.message);
    }
    
}

async function updatePassword(profileData) {
    const url = `${BASE_URL}/api/users/password-edit`;
    // const url = `/api/users/password-edit`;
    // console.log(profileData);
    try{
        const response =await axios({
            method:'put',
            url,
            headers:{
                'Content-Type' : 'application/json'
            },
            withCredentials:true,
            data:profileData
        })
        // console.log(response);
        return response;
    }catch(err){
        throw new Error(err.response.data.message);
    }
    
}


export {getLoggedInUser,setLoggedInUser,login,logout,signup,fetchUserProfile,updateProfile,updatePassword}