//This is the YouTube Iframe, it uses the current playlist as its data and updates that everytime that changes.
//Required Libraries
import React, { useState } from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { updateCurrentPlaylist } from "../Redux/Slice_CurrentPlaylist";
let iframe;
const Player = () => {

}

const YouTubePlayer = () => {
    const playlist = useSelector((state) => state.currentPlaylist)
    //const [iframe,setIframe] = useState(undefined)
   
    //initialize iframe global variable
    const createIframe = (e) => {

        iframe = e;
        setPlaylist()
    }
    //set playlist
    const setPlaylist = () => {

        if(iframe !== undefined && iframe.h !== null){
            let arr = [];
            playlist[0].media.forEach(y=> {
                arr = arr.concat(y.SongID)
            });
            iframe.loadPlaylist({playlist: arr});
        }
    }
    //When Playlist Changes, reload playlist
    useEffect(() => {
        if(iframe !== undefined && iframe.h !== null){
        setPlaylist()
        }
            
    }, [playlist])

    const display = () => {
        return(
        <YouTube
            style={{width:"100%", height: "100%"}}
            videoId={''}
            onReady={(e) => 
                createIframe(e.target)
            }
            autoplay = 'true'/>
        )
    }

    return(
        
            display()
        

    )
}

export default YouTubePlayer