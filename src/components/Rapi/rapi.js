import Profile from "./Profile/Profile";
import { useSelector } from 'react-redux';
import React, {useState, useEffect} from "react";
import Login from "./Login/login";
import Register from "./Register/Register";
import './Resources/css/rapiGrid.css'
import './Resources/css/rapi.css'
const Rapi = () => {
    // Initialize
    let isLoggedIn = useSelector((state) => state.profile.isLoggedIn)
    const [isClicked, setIsClicked] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    


    //When button is clicked, change clicked to false (Ensure Trigger once per click)
    useEffect(()=>{
        isClicked && setIsClicked(false);
    },[isClicked]);

    
    const display = () =>{
        if(isLoggedIn){
            //Display Profile
            return(
                <Profile/>
            )
        } 
        else if(isRegistering) {
            //Display Registration
            return (
                <Register setIsRegistering={setIsRegistering}/>
            )
        } else {
            //Display Login
            return(
                <Login setIsRegistering={setIsRegistering}/>
            )
        }

    }

    return(
    <React.Fragment>
        
            {
                display()
            }
        
    </React.Fragment>
    )

}

export default Rapi