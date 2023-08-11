//Required Libraries
import React from "react";
import { useSelector } from "react-redux";

//Required CSS Files
import './profile.css';

//The ProfileIcon houses a drop down which allows users to log out and redirect to a site to edit their profile. (Housed on backend)
const ProfileIcon = () => {
    let profile = useSelector((state) => state.profile)
    return(
        <React.Fragment>
            <h1 className="profile-text profile-dropdown-trigger">{profile.username}</h1>
            <div className="profile-dropdown">

            </div>
        </React.Fragment>
    )
}

export default ProfileIcon;