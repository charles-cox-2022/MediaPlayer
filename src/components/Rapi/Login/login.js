import React from "react";
import { useDispatch } from 'react-redux';
import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";
import { userLogin } from "../Redux/profileSlice";
import getPlaylists from "../../API/getPlaylists";
import { createPlaylist, updatePlaylists } from "../../Redux/Slice_Playlists";
import { updateCurrentPlaylist } from "../../Redux/Slice_CurrentPlaylist";
import savePlaylists from "../../API/savePlaylists";

const Login = (props) => {
   //initialize dispatch
   const dispatch = useDispatch();

   //Start, user is not logged in
   const [isClicked, setIsClicked] = useState(true);
   const [statusMessage, setStatusMessage] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] =  useState('');
   let local;
   //Are we Local or need to use Heroku?
   if(window.location.href.includes('localhost')){
       local = 'https://localhost:3003'
   }else if (window.location.href.includes('rapi.rokorium.com')){
       local = 'https://rapi.rokorium.com:3003'
   } 
   else {
       local = 'https://rokorium-wiki.herokuapp.com'
   }

   const {isLoading, data} = useFetch(`${local}/auth/sessioncheck`, {
       method: "get",
       credentials: 'include',
       headers: {
           "Content-type": "application/json; charset=UTF-8"
       }
   })
   //When button is clicked, change clicked to false (Ensure Trigger once per click)
   useEffect(()=>{
    isClicked && setIsClicked(false);
},[isClicked]);

//set status message for Login
useEffect(()=>{
    //If Loading, set message to Loading
    if(isLoading){
        setStatusMessage('Loading...')
    }
    //if Data is valid and component is not loading
    if(data && !isLoading){
        //if auth is true
        if(data.auth === true){
            //Log user in
            dispatch(userLogin({
                id: data.id,
                username: data.user,
                isLoggedIn: data.auth
            }))
            getPlaylists(data.id).then((res) => {
                if(res === false){
                    let newPlaylist = [{
                        id: -1,
                        owner_id: data.id,
                        info: {
                            pId: '',
                            name: 'New Playlist', 
                        },
                        media: [
                            {
                            'ID':0,
                            'SongID':"okVTSehE414",
                            'SongImg':"https://i.ytimg.com/vi/okVTSehE414/default.jpg",
                            'SongName':"IVE"
                        }
                        ]                    
                    }]
                    savePlaylists(newPlaylist, data.id).then((res2) => {
                        
                        dispatch(createPlaylist(res2))
                        dispatch(updatePlaylists([res2.playlist]))
                        dispatch(updateCurrentPlaylist(res2.playlist))
                    })
                    
                } else {
                    dispatch(updatePlaylists(res))
                    dispatch(updateCurrentPlaylist(res[0]))
                }
            })
        } else {
            console.log('Login Failed: '+ JSON.stringify(data))
            if(data.Action === 'Redirect'){
                window.location = data.redirect
            } else {
                setStatusMessage(`Access Denied`);
            }
        
        
        }
    }
},[data, isLoading,dispatch])
   
return (
    <React.Fragment>
        
    </React.Fragment>
)
}
export default Login
