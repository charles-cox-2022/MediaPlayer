//Required Libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Required Components
import SettingsMenu from "../Popups/SettingsMenu";

//Required CSS
import './nav.css'
import { updateCurrentPlaylist } from "../Redux/Slice_CurrentPlaylist";
/*
The Nav consists of the following: 
- Toggle between YouTube and Spotify (Video / Audio)
- Drop down for Playlist Settings (Edit, Create, Delete)
- Drop down for selecting current playlist
*/
const Nav = (props) => {
    const dispatch = useDispatch();
    const currentPlaylist = useSelector((state) => state.currentPlaylist)
    const playlists = useSelector((state) => state.playlists)
    let list;
    const display = () => {
        if(playlists[0] === undefined){

        } else {
        list = playlists.map((x) => 
            <li className="mediaIconListItem" key={x.id}>
                <button className="mediaIcon" onClick={() => {dispatch(updateCurrentPlaylist(x))}}>
                    <p className="mediaIconText">{x.name}</p><br/>
                    <img className="mediaIconImg"src={x.media[0].SongImg}></img>
                </button>
            </li>

            )
        }

        let name;
        if(currentPlaylist[0] === undefined){
            name = 'No Playlist'
        } else {
            name = currentPlaylist[0].name
        }

        return(
            <div className="playlist-dropdown-wrapper">
                <h1 className="playlist-dropdown-trigger button">
                    {
                        name
                    }
                </h1>
                <div className="playlist-dropdown">
                    <ul className="playlist-dropdown-item">
                        {
                            list
                        }
                    </ul>
                </div>
            </div>
        )
    }

    return(
        <React.Fragment>
            <div className="nav center">
                {display()}
                <h1 className="button" onClick={() => {props.setPopUp(<SettingsMenu setPopUp={props.setPopUp}/>)}}>Settings</h1>
            </div>
            
        </React.Fragment>
    )
}

export default Nav;