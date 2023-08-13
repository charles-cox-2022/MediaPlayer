//Stores data about the playlists the user has loaded
import {createSlice} from '@reduxjs/toolkit';

/*

Example = {
    ID: 0, <- Not ID in db, just used internally for storage location in Array.
    SongID: 'abcdefg', <- Use with Iframe to load song
    SongName: 'Song', <- just the name of the song, should be displayed on top of it.
    SongImg: 'https:songurl.com' <- Use with img to display img
}


*/

let defaultState = []
export const sliceSearchResults = createSlice({
    name: 'SearchResults',
    initialState: defaultState,
    reducers: {
        updateSearchResults: (state, action) => {
            state = action.payload;
            return(state)
            }
        },
    }
)

export const { updateSearchResults } = sliceSearchResults.actions;


export default sliceSearchResults.reducer