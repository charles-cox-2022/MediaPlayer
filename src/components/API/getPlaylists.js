const getPlaylists = async (user_id) => {

    let result;
    let local;
    //Are we Local or need to use Heroku?
   if(window.location.href.includes('localhost')){
    local = 'https://localhost:3003'
    }else if (window.location.href.includes('rapi.rokorium.com')){
        local = 'https://rapi.rokorium.com:3003'
    } 
    else {
        local = 'https://rokorium-wiki.herokuapp.com'
    }

const playlists = await fetch(`${local}/auth/mediaplayer/getPlaylists`, {
    method: "POST",
    body: JSON.stringify({
        user: {
            id: user_id
        }
    }),
    credentials: 'include',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})


return playlists.json()
}

export default getPlaylists;