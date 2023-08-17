//This component allows users to create and save playlists as well as change the playlist that is being edited. 
//required libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePlaylist, updatePlaylists } from "../Redux/Slice_Playlists";
import { updateCurrentPlaylist } from "../Redux/Slice_CurrentPlaylist";
import { updateName } from "../Redux/Slice_CurrentPlaylist";
import { createPlaylist } from "../Redux/Slice_Playlists";
import { deletePlaylist } from "../Redux/Slice_Playlists";
import getPlaylists from "../API/getPlaylists";
import savePlaylists from "../API/savePlaylists";
import CurrentPlaylistItems from "./currentPlaylistItems";
import delPlaylists from "../API/deletePlaylist";


const PlaylistSettings = () => {
    const dispatch = useDispatch();
    const currentPlaylist = useSelector((state) => state.currentPlaylist)
    const profile = useSelector((state) => state.profile)
    const playlists = useSelector((state) => state.playlists)
    let newPlaylist = [{
        id: -1,
        pId: '',
        name: 'New Playlist',
        media: []
    
    }]



    return(    
        <div className="settings-grid-playlist-settings flex-column">
            <div className="settings-buttons center">
                <h1 className="button" onClick={() => {dispatch(deletePlaylist(currentPlaylist)); delPlaylists(currentPlaylist, profile.id)}}>Delete</h1>
                <h1 className="button" onClick={() => {
                    dispatch(updatePlaylist(currentPlaylist));
                    savePlaylists(currentPlaylist, profile.id);
                }}>Save</h1>
                <h1 className="button" onClick={() => {savePlaylists(newPlaylist, profile.id).then((data) => {dispatch(createPlaylist(data))})}}>Create</h1>
                <h1 className="button" onClick={() => {getPlaylists(profile.id).then((data) => {dispatch(updatePlaylists(data))})}}>reload</h1>
            </div>
            <div className="center">
                <label style={{fontSize:"21px"}} htmlFor="playlistName">Name: </label>
                <input 
                    type="text" 
                    id="playlistName" 
                    name="playlistName" 
                    placeholder={currentPlaylist[0].name}
                    onKeyDown={(event) => {
                        if(event.key === 'Enter'){
                            dispatch(updateName(event.target.value))                            
                        }
                    }} ></input>
            </div>
            <CurrentPlaylistItems/>
            
            
        </div>
        )
}

export default PlaylistSettings;