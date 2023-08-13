//This component searches for media and populates it as buttons
//required libraries
import React, { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import { useDispatch } from 'react-redux';

//Required Components
import SearchResults from "./SearchResults";
//Required Variables
import { updateSearchResults } from "../Redux/Slice_SearchResults";


const SearchMedia = (props) => {
    const dispatch = useDispatch();
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [search,setSearch] = useState('');

    let local;
    if(window.location.href.includes('localhost')){
        local = 'http://localhost:3001'
    }else{
        local = 'https://rokorium-wiki.herokuapp.com'
    }

    const {isLoading, data} = useFetch(`${local}/rapi/youtube/search`, {
        method: "POST",
        body: JSON.stringify({
            type: 'search',
            args: search,
            maxRes: 25
        }),
        credentials: 'include',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        depends: [isSubmitted]
    })
    //When button is clicked, change clicked to false (Ensure Trigger once per click)
    useEffect(()=>{
        isSubmitted && setIsSubmitted(false);
     },[isSubmitted]);

     useEffect(()=>{
        //If Loading, set message to Loading
        if(isLoading){
            console.log('Searching....')
        }
        //if Data is valid and component is not loading
        if(data && !isLoading){
            //Validate Search Results
            //Update Search Results Redux
            console.log('Finished Loading!')
            dispatch(updateSearchResults(data))
            
            
            
        }
    },[data, isLoading])

    return(
        <div className="settings-grid-search-media center flex-column">
            <h1>Search Media</h1>
            <div>
                <label style={{fontSize:"21px"}} htmlFor="Playlist-Search">Search: </label>
                <input 
                //When Enter is pressed, trigger searching
                onKeyDown={(event) => {
                    if(event.key === 'Enter' && isSubmitted === false){
                        setSearch(event.target.value);
                        setIsSubmitted(true);
                    }
                }} 
                type="search" 
                id="Playlist-Search" 
                name="Playlist-Search">
                </input><br/>
            </div>
            <div className="max">
                {/* This contains Search Result Instances */}
                <SearchResults setPreview={props.setPreview}/>
            </div>
        </div>
        
    )
}

export default SearchMedia;