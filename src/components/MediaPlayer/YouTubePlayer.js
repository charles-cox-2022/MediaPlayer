//This is the YouTube Iframe, it uses the current playlist as its data and updates that everytime that changes.
//Required Libraries
import React, { useState } from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

const YouTubePlayer = () => {
    const playlist = useSelector((state) => state.currentPlaylist)
    let media = playlist[0].media
    let iframe = undefined;
    const setIframe = (e) => {
        //Update Iframe Global Variable
        iframe = e.target
        //Set the current playlist
        setPlaylist();
    }
    const setPlaylist = () => {
        if(iframe !== undefined){
            let arr = [];
            media.forEach(y=> {
                arr = arr.concat(y.SongID)
            });
            iframe.loadPlaylist({playlist: arr});
        }

    }
    return(
        <YouTube
            style={{width:"100%", height: "100%"}}
            videoId={''}
            onReady={(e) => setIframe(e)}
            autoplay = 'true'/>

    )
}

export default YouTubePlayer