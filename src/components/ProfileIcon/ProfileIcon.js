//Required Libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Required CSS Files
import './profile.css';

//Required Functions
import { userLogout } from "../Rapi/Redux/profileSlice";

//The ProfileIcon houses a drop down which allows users to log out and redirect to a site to edit their profile. (Housed on backend)
const ProfileIcon = () => {
    let profile = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    const display = () => {
        if(profile.isLoggedIn === true){
            return(
            <h1 
                className="profile-button"
                onClick={()=> {
                    dispatch(userLogout())

                    let local;
                    if(window.location.href.includes('localhost')){
                        local = 'http://localhost:3001'
                    }else{
                        local = 'https://rokorium-wiki.herokuapp.com'
                    }

                    fetch(`${local}/rapi/logout/`, {
                        method: "POST",
                        credentials: 'include',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                }}>Logout</h1>
            )
        } else {
            return(
            <h1 className="profile-button">Login</h1>
            )
        }
    }

    return(
        <React.Fragment>
            
                <h1 className="profile-text profile-dropdown-trigger">{profile.username}</h1>
                <div className="profile-dropdown">
                    {display()}
                </div>
            
        </React.Fragment>
    )
}

export default ProfileIcon;