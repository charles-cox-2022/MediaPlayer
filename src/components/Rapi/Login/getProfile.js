import React from "react";
import { useDispatch } from 'react-redux';
import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";
import { userLogin } from "../Redux/profileSlice";

const GetProfile = () => {
    let local;
    const dispatch = useDispatch();
   //Are we Local or need to use Heroku?
   if(window.location.href.includes('localhost')){
    local = 'https://localhost:3003'
}else if (window.location.href.includes('rapi.rokorium.com')){
    local = 'https://rapi.rokorium.com:3003'
} 
else {
    local = 'https://rokorium-wiki.herokuapp.com'
}

   const {isLoading, data} = useFetch(`${local}/rapi/getProfile/`, {
       method: "get",
   })

   useEffect(()=>{
    //If Loading, set message to Loading
    if(isLoading){
        console.log('Loading...')
    }
    //if Data is valid and component is not loading
    if(data && !isLoading){
        //if auth is true
        if(data.auth === true){
            //Log user in
            dispatch(userLogin({
                id: data.id,
                username: data.username,
                isAdmin: data.isAdmin,
                isLoggedIn: true
            })
            )
        } else {
        console.log('Login Failed: '+ JSON.stringify(data))
        console.log(`Invalid Username or Password`);
        }
    }
},[data, isLoading,dispatch])
}

export default GetProfile