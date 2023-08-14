//Required Libraries
import React from "react";
import { useSelector } from 'react-redux';
//Required Variables

const SearchResults = (props) => {
    const results = useSelector((state) => state.searchResults)
    
    let list;
    const display = (e) => {
        if(e !== undefined){
            list = e.map((x) => 
                <li className="mediaIconListItem" key={e.ID}>
                    <button className="mediaIcon" onClick={() => {props.setPreview(x.SongID)}}>
                        <p className="mediaIconText">{x.SongName}</p><br/>
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