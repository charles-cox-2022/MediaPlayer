//Required Libraries
import React from "react";

//Required Components
import SettingsMenu from "../Popups/SettingsMenu";

/*
The Nav consists of the following: 
- Toggle between YouTube and Spotify (Video / Audio)
- Drop down for Playlist Settings (Edit, Create, Delete)
- Drop down for selecting current playlist
*/
const Nav = (props) => {
    return(
        <React.Fragment>
            <div className="center">
                <h1>-Select Playlist-</h1>
                <h1 onClick={() => {props.setPopUp(<SettingsMenu setPopUp={props.setPopUp}/>)}}>-Settings-</h1>
            </div>
            
        </React.Fragment>
    )
}

export default Nav;