const delPlaylists = async (playlist,id) => {

    let local;
    if(window.location.href.includes('localhost')){
        local = 'https://localhost:3003'
    }else{
        local = 'https://rokorium-wiki.herokuapp.com'
    }
    console.log(playlist)
const apiCall = await fetch(`${local}/auth/mediaplayer/delPlaylist`, {
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

export default delPlaylists;