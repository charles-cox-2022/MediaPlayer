//Stores data about the playlists the user has loaded
import {createSlice} from '@reduxjs/toolkit';

let defaultState = [{
    id: 0,
    pId: 'PLOAnpT8sPGhlK2caT8Ys7GqORU294ipHI',
    name: 'Active K-Pop',
    media: []
}]
export const slicePlaylists = createSlice({
    name: 'Playlists',
    initialState: defaultState,
    reducers: {
        updatePlaylist: (state, action) => {
            
            for(let i = 0;i<state.length;i++){
                if(state[i].id === action.payload.id){
                    state[i] = action.payload.id
                    return(state)
                }
            }
            
            state[state.length] = action.payload;
            return(state)
        },
        userLogout: (state, action) => {
            state = defaultState;
            console.log('logged out');
            return(state)
        }
    }
})

export const { updatePlaylist } = slicePlaylists.actions;


export default slicePlaylists.reducer