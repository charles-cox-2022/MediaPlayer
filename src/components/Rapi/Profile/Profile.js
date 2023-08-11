import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from "react";
import UpdateUsername from "../UpdateSettings/updateUsername";
import { userLogin, userLogout } from "../Redux/profileSlice";

const displayIfAdmin = (profile) => {
    if(profile.isAdmin === true){
        return(<UpdateUsername/>)
    }
}


const Profile = () => {
    let profile = useSelector((state) => state.profile)
    let dispatch = useDispatch();
    
    const [isUpdating, setIsUpdating] = useState('');
    return(
        
            <div className="flex-column max80 margin15 padding25 center grey bubble">
                <div className="grid-nav flex-column max">
                    <h1 className="noExtras">Welcome, {profile.username}</h1>
                </div>
                <div className="grid-content flex-column max">
                    <img id="profileImg" src="./Cute Dog Photo.jpg" className="profileIcon" alt='profileIcon'/>
                    <p className="noExtras">{`Username: ${profile.username}`}</p>
                    <p className="noExtras">{`Admin Status: ${profile.isAdmin}`}</p>
                    <p className="noExtras">{`Logged in: ${profile.isLoggedIn}`}</p>
                    
                    {displayIfAdmin(profile)}
                </div>

            </div>
        
    )
}

export default Profile