//Required Libraries
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
//Required Variables
import {  removeSong } from "../Redux/Slice_CurrentPlaylist";


const CurrentPlaylistItems = () => {
    const dispatch = useDispatch();
    const results = useSelector((state) => state.currentPlaylist[0].media)
            
    let list;
    const display = (e) => {
        if(e !== undefined){
            list = e.map((x) => 
                <li className="mediaIconListItem" key={x.ID}>
                    <button className="mediaIcon">
                        <p className="mediaIconText">{x.SongName}</p>
                        <h1 className="mediaIconText addMedia"
                        onClick={() => {dispatch(removeSong(x))}}>-</h1>
                        <img className="mediaIconImg"src={x.SongImg}></img>
                    </button>
                </li>
            )
            return list
        }
        
    }

    return(
        <div id="results-parent">
            <ul id='SearchResults'>
                {display(results)}
            </ul>
        </div>
    )
}

export default CurrentPlaylistItems;