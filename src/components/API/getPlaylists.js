const getPlaylists = async (user_id) => {

    let result;
    let local;
    if(window.location.href.includes('localhost')){
        local = 'http://localhost:3001'
    }else{
        local = 'https://rokorium-wiki.herokuapp.com'
    }

const playlists = await fetch(`${local}/rapi/youtube/getPlaylists`, {
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