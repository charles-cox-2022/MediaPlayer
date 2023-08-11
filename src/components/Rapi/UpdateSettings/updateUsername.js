import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";
import { userLogin } from "../Redux/profileSlice";

const UpdateUsername = (props) => {
   //initialize dispatch
   const dispatch = useDispatch();
   let profile = useSelector((state) => state.profile)








   //Start, user is not logged in
   const [isClicked, setIsClicked] = useState(false);
   const [statusMessage, setStatusMessage] = useState('');
   const [newUsername, setNewUsername] = useState('');

   let local;
   //Are we Local or need to use Heroku?
   if(window.location.href.includes('localhost')){
       local = 'http://localhost:3001'
   }else{
       local = 'https://rokorium-wiki.herokuapp.com'
   }

   const {isLoading, data} = useFetch(`${local}/rapi/updateUser/`, {
       method: "POST",
       body: JSON.stringify({
            action: 'updateUsername',
            username: profile.username,
            newUsername: newUsername,
       }),
       credentials: 'include',
       headers: {
           "Content-type": "application/json; charset=UTF-8"
       },
       depends: [isClicked]
   })
   //When button is clicked, change clicked to false (Ensure Trigger once per click)
   useEffect(()=>{
    isClicked && setIsClicked(false);
},[isClicked]);

//set status message for Register
useEffect(()=>{
        
    //If Loading, set message to Loading
    if(isLoading){
        setStatusMessage('Loading...')
        console.log('Loading')
    }

    if(data && !isLoading){
        if(data.status === true){
            setStatusMessage(`Updated Username Successfully!`)
            console.log('Updated Username Successfully')
            //User Login will update the current user information with the new data.
            dispatch(userLogin({
                id: data.account.id,
                username: data.account.username,
                isAdmin: data.account.isAdmin,
                isLoggedIn: true
            })
            )
        } else {
        console.log('Registration Failed: '+ JSON.stringify(data))
        setStatusMessage(`Error: ${data.result}`);
        }
    }
},[data, isLoading])

   
return (
    <React.Fragment>
        <div id="updateUsername">
        <div className="App-Content flex-column margin15 padding25 grey bubble">
            <h3 className="noExtras alignTop">Update Username</h3>
            <div className="alignTop">{statusMessage}</div>
            <div className="alignTop">
                <label style={{fontSize:"21px"}} htmlFor="updateUsername-NewUsername">New Username: </label>
                <input type="text" id="updateUsername-NewUsername" name="updateUsername-NewUsername"></input><br/>
            </div>
            <div className="alignTop">
            <button className='button' onClick={ () => {
                setNewUsername(document.getElementById("updateUsername-NewUsername").value)
                setIsClicked(true)
                }}>
                Submit
            </button>
            </div>
        </div>
        </div>
                </React.Fragment>
)
}
export default UpdateUsername