//Required Libraries
import React from "react";
import YouTubePlayer from "./YouTubePlayer";


//The MediaPlayer is meant to house both the YouTube and Spotify players. It ONLY switches between the two based on the type of playlist loaded.
const MediaPlayer = () => {
    return(
        <React.Fragment>
            <YouTubePlayer/>
        </React.Fragment>
    );
}

export default MediaPlayer