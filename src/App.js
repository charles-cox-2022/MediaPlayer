//Required Libraries
import { useSelector } from 'react-redux';

//Required CSS files
import './resources/css/grid.css';
import './resources/css/profile.css';
import './resources/css/essentials.css';

//Import Components
import Rapi from './components/Rapi/rapi';
import MediaPlayer from './components/MediaPlayer/MediaPlayer';
import ProfileIcon from './components/ProfileIcon/ProfileIcon';
import Nav from './components/Nav/Nav';

//If the user is not logged in, only show the login screen.
const display = (loggedIn) => {
  if(loggedIn === true){
    return(
      <div className='grid-content grid-item center'>
        <MediaPlayer/>
      </div>
    )
  } else {
    return (
      <div className='grid-auth grid-item center'>
        <Rapi/>
      </div>
    )
  }

}

function App() {
  //Watch the login status, when it changes so when the data using this.
  let isLoggedIn = useSelector((state) => state.profile.isLoggedIn)

  return (
    
      <div className="App">
        <div className='grid-main-wrapper'>
          <div className='grid-nav grid-item center'>
            <div className='nav-wrapper'>
              {/*The Nav is meant to house access to the various pages and pop ups in this app.*/}
              <Nav/>
            </div>
          </div>
          <div className='grid-profile grid-item center'>
            <div className='profile-wrapper'>
              {/*The Profile Icon is meant to drop down and display options the user can choose in relation to their profile.*/}
              <ProfileIcon/>
            </div>
          </div>
          {display(isLoggedIn)}
          
        </div>
      </div>
  );
}

export default App;
