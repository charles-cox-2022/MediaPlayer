//This combines the reducers for all redux in the application
//Required Libraries
import { configureStore } from '@reduxjs/toolkit'
//Required Components
import profileReducer from '../Rapi/Redux/profileSlice'
import SearchResultsReducer from './Slice_SearchResults';

export default configureStore({
  reducer: {
    profile: profileReducer,
    searchResults: SearchResultsReducer
  },
})