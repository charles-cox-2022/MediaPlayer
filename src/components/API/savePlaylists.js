const savePlaylists = async (playlist,id) => {

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
    console.log(playlist)
const apiCall = await fetch(`${local}/auth/mediaplayer/setPlaylist`, {
    method: "POST",
    body: JSON.stringify({
        ownerID: id,
        playlist: playlist[0]
    }),
    credentials: 'include',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})


return apiCall.json()
}

export default savePlaylists;