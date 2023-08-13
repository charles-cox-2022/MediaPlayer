//This holds the seartch and playlist settings as well as other future settings.
//Required Libraries
import React, { useState } from "react";
//Required Components
import SearchMedia from "./Search";
//Required CSS
import "./settingsmenu.css"
import PlaylistSettings from "./PlaylistSettings";

const display = (choice) => {

    return(
        <React.Fragment>
            {choice}
        </React.Fragment>
    )

}


const SettingsMenu = (props) => {
    const [choice,setChoice] = useState(<PlaylistSettings/>);
    const [preview, setPreview] = useState('Os_heh8vPfs')

    return(
        <div className="settings-grid-wrapper">
            <div className="settings-grid-title">
                <h1>Settings Menu</h1>
            </div>
            <div className="settings-grid-preview">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${preview}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="settings-grid-nav">
                <h1 onClick={() => {setChoice(<PlaylistSettings/>)}}>--Playlist Settings--</h1>
                <h1 onClick={() => {setChoice(<SearchMedia setPreview={setPreview}/>)}}>--Search Media--</h1>
            </div>
            {display(choice)}
            
            <div className="settings-grid-close">
                <h1 onClick={() => {props.setPopUp(undefined)}}>Close</h1>
            </div>
        </div>
    )
}

export default SettingsMenu


