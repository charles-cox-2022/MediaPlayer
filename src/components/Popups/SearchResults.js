//Required Libraries
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
//Required Components
//Required Variables
import { addSong } from "../Redux/Slice_CurrentPlaylist";


const SearchResults = (props) => {
    const dispatch = useDispatch();
    const results = useSelector((state) => state.searchResults)
            
    let list;
    const display = (e) => {
        if(e !== undefined){
            list = e.map((x) => 
                <li className="mediaIconListItem" key={x.ID}>
                    <button className="mediaIcon" onClick={() => {props.setPreview(x)}}>
                        <p className="mediaIconText">{x.SongName}</p>
                        <h1 className="mediaIconText addMedia"
                        onClick={() => {dispatch(addSong(x))}}>+</h1>
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

export default SearchResults;