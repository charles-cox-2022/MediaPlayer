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
       local = 'http://localhost:3001'
   }else{
       local = 'https://rokorium-wiki.herokuapp.com'
   }

   const {isLoading, data} = useFetch(`${local}/rapi/login/`, {
       method: "POST",
       body: JSON.stringify({
           username: username,
           password: password
       }),
       credentials: 'include',
       headers: {
           "Content-type": "application/json; charset=UTF-8"
       },
       depends: [isClicked]
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
                username: data.username,
                isAdmin: data.isAdmin,
                isLoggedIn: true
            }))
            getPlaylists(data.id).then((res) => {
                if(res[0] === undefined){
                    let newPlaylist = [{
                        id: -1,
                        pId: '',
                        name: 'New Playlist',
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
        setStatusMessage(`Invalid Username or Password`);
        }
    }
},[data, isLoading,dispatch])
   
return (
    <React.Fragment>
        <div className="flex-column margin15 padding25 center grey bubble" id="loginField">
            <h1 className="noExtras">Login</h1>
            <div className="">
                {statusMessage}
            </div>
            <div>
                <label style={{fontSize:"21px"}} htmlFor="username">Username: </label>
                <input type="text" id="RA-username" name="username"></input><br/>
            </div>
            <div>
                <label style={{fontSize:"21px"}} htmlFor="Name">Password: </label>
                <input type="password" id="RA-password" name="password"></input><br/>
            </div>
            <div>
            <button className='button' onClick={ () => {
                setUsername(document.getElementById("RA-username").value)
                setPassword(document.getElementById("RA-password").value)
                setIsClicked(true)
                }}>
                Login
            </button>
            
            <button className="button" onClick={ () => {
                props.setIsRegistering(true)
                setIsClicked(true)

            }}>Register </button>
            </div>
        </div>
    </React.Fragment>
)
}
export default Login
