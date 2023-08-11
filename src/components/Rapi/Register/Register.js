import React from "react";
import { useDispatch } from 'react-redux';
import {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";

const Register = (props) => {
   //initialize dispatch
   const dispatch = useDispatch();

   //Start, user is not logged in
   const [isClicked, setIsClicked] = useState(false);
   const [statusMessage, setStatusMessage] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] =  useState('');
   let local;
   //Are we Local or need to use Heroku?
   if(window.location.href.includes('localhost')){
       local = 'http://localhost:3001'
   }else{
       local = 'https://rokorium-wiki.herokuapp.com'
   }

   const {isLoading, data} = useFetch(`${local}/rapi/createUser/`, {
       method: "POST",
       body: JSON.stringify({
           username: username,
           password: password
       }),
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
            setStatusMessage(`Registered Successfully!`)
            console.log('Registered Successfully')
            props.setIsRegistering(false)
        } else {
        console.log('Registration Failed: '+ JSON.stringify(data))
        setStatusMessage(`Error: ${data.result}`);
        }
    }
},[data, isLoading])

   
return (
    <React.Fragment>
        <div className="App-Content textwhite flex-column margin15 padding25 center grey bubble" id="loginField">
            <h1 className="noExtras">Register</h1>
            <div className="textwhite">{statusMessage}</div>
            <div>
                <label style={{fontSize:"21px"}} htmlFor="username">Username: </label>
                <input type="text" id="RA-username" name="username"></input><br/>
            </div>
            <div>
                <label style={{fontSize:"21px"}} htmlFor="Name">Password: </label>
                <input type="password" id="RA-password" name="password"></input><br/>
            </div>
            <div>
            <button className='button' onClick={ () => {
                setUsername(document.getElementById("RA-username").value)
                setPassword(document.getElementById("RA-password").value)
                setIsClicked(true)
                }}>
                Submit
            </button>
            <button className="button" onClick={ () => {
                props.setIsRegistering(false);
            }}>
                Cancel
            </button>
            
            
            </div>
        </div>
                </React.Fragment>
)
}
export default Register