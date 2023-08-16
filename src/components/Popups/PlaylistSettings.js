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
        media: [
            {
                "ID": 0,
                "SongID": "z2ZjutyxmjA",
                "SongName": "aespa 에스파 'Life's Too Short (English Ver.)' MV",
                "SongImg": "https://i.ytimg.com/vi/z2ZjutyxmjA/default.jpg"
            },
            {
                "ID": 1,
                "SongID": "H69tJmsgd9I",
                "SongName": "[STATION] aespa 에스파 'Dreams Come True' MV",
                "SongImg": "https://i.ytimg.com/vi/H69tJmsgd9I/default.jpg"
            },
            {
                "ID": 2,
                "SongID": "G8GaQdW2wHc",
                "SongName": "IZ*ONE (아이즈원) 'Panorama' MV",
                "SongImg": "https://i.ytimg.com/vi/G8GaQdW2wHc/default.jpg"
            }
        ]
    
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