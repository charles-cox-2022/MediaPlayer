const savePlaylists = async (playlist,id) => {

    let local;
    if(window.location.href.includes('localhost')){
        local = 'http://localhost:3001'
    }else{
        local = 'https://rokorium-wiki.herokuapp.com'
    }
    console.log(playlist)
const apiCall = await fetch(`${local}/rapi/youtube/setPlaylist`, {
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