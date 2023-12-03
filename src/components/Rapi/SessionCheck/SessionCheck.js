//Required Libraries
import React from "react";
import { useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";


//Required Functions
import { userLogout } from "../Redux/profileSlice";

//The ProfileIcon houses a drop down which allows users to log out and redirect to a site to edit their profile. (Housed on backend)
const SessionCheck = () => {
    const dispatch = useDispatch();

    const [refresh,setRefresh] = useState(false)

    useEffect(() => {
        //console.log(`initializing interval`);
        const interval = setInterval(() => {
           setRefresh(true)
        }, 30000);
        
        return () => {
        //console.log(`clearing interval`);
        clearInterval(interval);
        };
        }, [refresh]); // has no dependency - this will be called on-component-mount

    let local;
    //Are we Local or need to use Heroku?
    if(window.location.href.includes('localhost')){
        local = 'https://localhost:3003'
    }else{
        local = 'https://rokorium-wiki.herokuapp.com'
    }

    const {isLoading, data} = useFetch(`${local}/auth/SessionCheck`, {
        method: "get",
        body: JSON.stringify({
        }),
        credentials: 'include',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    },[refresh])

    useEffect(()=>{
        //If Loading, set message to Loading
        if(isLoading){}
        //if Data is valid and component is not loading
        if(data && !isLoading){
            //if auth is true
            if(data.auth === false){
                //Log user in
                console.log('Session Expired');
                dispatch(userLogout());
                setRefresh(false)
            } else {
            }
            setRefresh(false)
        }
    },[data, isLoading, refresh])


    

    return(
        <React.Fragment>
        </React.Fragment>
    )
}

export default SessionCheck;