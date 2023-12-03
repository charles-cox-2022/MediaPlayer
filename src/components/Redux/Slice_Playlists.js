//Stores data about the playlists the user has loaded
import {createSlice, current} from '@reduxjs/toolkit';

// const playlistTemplate = (id) => {
//     return({
//     id: id,
//     pId: '',
//     name: 'New Playlist',
//     media: [
//         {
//             "ID": 0,
//             "SongID": "z2ZjutyxmjA",
//             "SongName": "aespa 에스파 'Life's Too Short (English Ver.)' MV",
//             "SongImg": "https://i.ytimg.com/vi/z2ZjutyxmjA/default.jpg"
//         },
//         {
//             "ID": 1,
//             "SongID": "H69tJmsgd9I",
//             "SongName": "[STATION] aespa 에스파 'Dreams Come True' MV",
//             "SongImg": "https://i.ytimg.com/vi/H69tJmsgd9I/default.jpg"
//         },
//         {
//             "ID": 2,
//             "SongID": "G8GaQdW2wHc",
//             "SongName": "IZ*ONE (아이즈원) 'Panorama' MV",
//             "SongImg": "https://i.ytimg.com/vi/G8GaQdW2wHc/default.jpg"
//         }
//     ]

// })}
let defaultState = [];
//    {
//     id: 0,
//     pId: 'PLOAnpT8sPGhlK2caT8Ys7GqORU294ipHI',
//     name: 'Active K-Pop',
//     media: [
//         {
//             "ID": 0,
//             "SongID": "z2ZjutyxmjA",
//             "SongName": "aespa 에스파 'Life's Too Short (English Ver.)' MV",
//             "SongImg": "https://i.ytimg.com/vi/z2ZjutyxmjA/default.jpg"
//         },
//         {
//             "ID": 1,
//             "SongID": "H69tJmsgd9I",
//             "SongName": "[STATION] aespa 에스파 'Dreams Come True' MV",
//             "SongImg": "https://i.ytimg.com/vi/H69tJmsgd9I/default.jpg"
//         },
//         {
//             "ID": 2,
//             "SongID": "G8GaQdW2wHc",
//             "SongName": "IZ*ONE (아이즈원) 'Panorama' MV",
//             "SongImg": "https://i.ytimg.com/vi/G8GaQdW2wHc/default.jpg"
//         },
//         {
//             "ID": 3,
//             "SongID": "f_iQRO5BdCM",
//             "SongName": "IU(아이유) _ YOU&I(너랑나) MV",
//             "SongImg": "https://i.ytimg.com/vi/f_iQRO5BdCM/default.jpg"
//         },
//         {
//             "ID": 4,
//             "SongID": "jeqdYqsrsA0",
//             "SongName": "IU (아이유) _ Good Day (좋은 날) _ MV",
//             "SongImg": "https://i.ytimg.com/vi/jeqdYqsrsA0/default.jpg"
//         },
//         {
//             "ID": 5,
//             "SongID": "k6jqx9kZgPM",
//             "SongName": "TWICE \"Talk that Talk\" M/V",
//             "SongImg": "https://i.ytimg.com/vi/k6jqx9kZgPM/default.jpg"
//         },
//         {
//             "ID": 6,
//             "SongID": "AbZH7XWDW_k",
//             "SongName": "TAEYEON 태연 'INVU' MV",
//             "SongImg": "https://i.ytimg.com/vi/AbZH7XWDW_k/default.jpg"
//         },
//         {
//             "ID": 7,
//             "SongID": "iTgcp1oDk2M",
//             "SongName": "Red Velvet X aespa 'Beautiful Christmas' MV",
//             "SongImg": "https://i.ytimg.com/vi/iTgcp1oDk2M/default.jpg"
//         },
//         {
//             "ID": 8,
//             "SongID": "txWmd7QKFe8",
//             "SongName": "[MV] MOMOLAND(모모랜드) _ BAAM",
//             "SongImg": "https://i.ytimg.com/vi/txWmd7QKFe8/default.jpg"
//         },
//         {
//             "ID": 9,
//             "SongID": "JQGRg8XBnB4",
//             "SongName": "[MV] MOMOLAND (모모랜드) _ BBoom BBoom (뿜뿜)",
//             "SongImg": "https://i.ytimg.com/vi/JQGRg8XBnB4/default.jpg"
//         },
//         {
//             "ID": 10,
//             "SongID": "SutPPe39sas",
//             "SongName": "BLACKPINK – ‘Hard To Love’ UnofficailVEVO",
//             "SongImg": "https://i.ytimg.com/vi/SutPPe39sas/default.jpg"
//         },
//         {
//             "ID": 11,
//             "SongID": "4OrCA1OInoo",
//             "SongName": "TAEYEON 태연 'I (feat. Verbal Jint)' MV",
//             "SongImg": "https://i.ytimg.com/vi/4OrCA1OInoo/default.jpg"
//         },
//         {
//             "ID": 12,
//             "SongID": "ulr0muQKjk0",
//             "SongName": "TAEYEON 태연 '11:11' MV",
//             "SongImg": "https://i.ytimg.com/vi/ulr0muQKjk0/default.jpg"
//         },
//         {
//             "ID": 13,
//             "SongID": "0-q1KafFCLU",
//             "SongName": "[MV] IU(아이유) _ Celebrity",
//             "SongImg": "https://i.ytimg.com/vi/0-q1KafFCLU/default.jpg"
//         },
//         {
//             "ID": 14,
//             "SongID": "D1PvIWdJ8xo",
//             "SongName": "[MV] IU(아이유) _ Blueming(블루밍)",
//             "SongImg": "https://i.ytimg.com/vi/D1PvIWdJ8xo/default.jpg"
//         },
//         {
//             "ID": 15,
//             "SongID": "dME1pCQQZQM",
//             "SongName": "Apink(에이핑크) 5th MINI [Pink LUV] 'LUV' (러브) M/V",
//             "SongImg": "https://i.ytimg.com/vi/dME1pCQQZQM/default.jpg"
//         },
//         {
//             "ID": 16,
//             "SongID": "nM0xDI5R50E",
//             "SongName": "[MV] IU(아이유) _ BBIBBI(삐삐)",
//             "SongImg": "https://i.ytimg.com/vi/nM0xDI5R50E/default.jpg"
//         },
//         {
//             "ID": 17,
//             "SongID": "eHir_vB1RUI",
//             "SongName": "TAEYEON 태연 'Rain' MV",
//             "SongImg": "https://i.ytimg.com/vi/eHir_vB1RUI/default.jpg"
//         },
//         {
//             "ID": 18,
//             "SongID": "NHXUM-6a3dU",
//             "SongName": "TAEYEON 태연 'Fine' MV",
//             "SongImg": "https://i.ytimg.com/vi/NHXUM-6a3dU/default.jpg"
//         },
//         {
//             "ID": 19,
//             "SongID": "4HG_CJzyX6A",
//             "SongName": "TAEYEON 태연 '사계 (Four Seasons)' MV",
//             "SongImg": "https://i.ytimg.com/vi/4HG_CJzyX6A/default.jpg"
//         },
//         {
//             "ID": 20,
//             "SongID": "RmuL-BPFi2Q",
//             "SongName": "TAEYEON 태연 'Weekend' MV",
//             "SongImg": "https://i.ytimg.com/vi/RmuL-BPFi2Q/default.jpg"
//         },
//         {
//             "ID": 21,
//             "SongID": "dYRITmpFbJ4",
//             "SongName": "aespa 에스파 'Girls' MV",
//             "SongImg": "https://i.ytimg.com/vi/dYRITmpFbJ4/default.jpg"
//         },
//         {
//             "ID": 22,
//             "SongID": "z0YLZmcARRU",
//             "SongName": "우주소녀 WJSN 'Last Sequence' MV",
//             "SongImg": "https://i.ytimg.com/vi/z0YLZmcARRU/default.jpg"
//         },
//         {
//             "ID": 23,
//             "SongID": "WqzTRK5GPWQ",
//             "SongName": "Apink 에이핑크 덤더럼(Dumhdurum) Music Video Official",
//             "SongImg": "https://i.ytimg.com/vi/WqzTRK5GPWQ/default.jpg"
//         },
//         {
//             "ID": 24,
//             "SongID": "akoSG0kRcXw",
//             "SongName": "Apink(에이핑크) 2nd Album [Pink MEMORY] 'Remember' (리멤버) M/V",
//             "SongImg": "https://i.ytimg.com/vi/akoSG0kRcXw/default.jpg"
//         },
//         {
//             "ID": 25,
//             "SongID": "QB4dQcxgJPY",
//             "SongName": "[MV] GIRL'S DAY(걸스데이) _ Darling(달링)",
//             "SongImg": "https://i.ytimg.com/vi/QB4dQcxgJPY/default.jpg"
//         },
//         {
//             "ID": 26,
//             "SongID": "GU7icQFVzHo",
//             "SongName": "[MV] GFRIEND(여자친구) _ Glass Bead(유리구슬)",
//             "SongImg": "https://i.ytimg.com/vi/GU7icQFVzHo/default.jpg"
//         },
//         {
//             "ID": 27,
//             "SongID": "uR8Mrt1IpXg",
//             "SongName": "Red Velvet 레드벨벳 'Psycho' MV",
//             "SongImg": "https://i.ytimg.com/vi/uR8Mrt1IpXg/default.jpg"
//         },
//         {
//             "ID": 28,
//             "SongID": "Qpf26PtBXgo",
//             "SongName": "Girls' Generation 소녀시대 'FOREVER 1' MV",
//             "SongImg": "https://i.ytimg.com/vi/Qpf26PtBXgo/default.jpg"
//         },
//         {
//             "ID": 29,
//             "SongID": "sno_genwMz8",
//             "SongName": "[MV] AOA(에이오에이) _ Good Luck(굿럭)",
//             "SongImg": "https://i.ytimg.com/vi/sno_genwMz8/default.jpg"
//         },
//         {
//             "ID": 30,
//             "SongID": "5ZCSABBggPE",
//             "SongName": "Apink 3rd mini Album [Secret Garden] 'U YOU' MV",
//             "SongImg": "https://i.ytimg.com/vi/5ZCSABBggPE/default.jpg"
//         },
//         {
//             "ID": 31,
//             "SongID": "gR4OVNHBEVw",
//             "SongName": "[BE ORIGINAL] GFRIEND(여자친구) 'MAGO' (4K)",
//             "SongImg": "https://i.ytimg.com/vi/gR4OVNHBEVw/default.jpg"
//         },
//         {
//             "ID": 32,
//             "SongID": "4TWR90KJl84",
//             "SongName": "aespa 에스파 'Next Level' MV",
//             "SongImg": "https://i.ytimg.com/vi/4TWR90KJl84/default.jpg"
//         },
//         {
//             "ID": 33,
//             "SongID": "RP4lbSymeZ4",
//             "SongName": "Apink 에이핑크 'Dilemma' MV",
//             "SongImg": "https://i.ytimg.com/vi/RP4lbSymeZ4/default.jpg"
//         },
//         {
//             "ID": 34,
//             "SongID": "CM4CkVFmTds",
//             "SongName": "TWICE \"I CAN'T STOP ME\" M/V",
//             "SongImg": "https://i.ytimg.com/vi/CM4CkVFmTds/default.jpg"
//         },
//         {
//             "ID": 35,
//             "SongID": "q-67jToInT0",
//             "SongName": "A PINK 'HUSH'M.V",
//             "SongImg": "https://i.ytimg.com/vi/q-67jToInT0/default.jpg"
//         },
//         {
//             "ID": 36,
//             "SongID": "xGr53sCo62c",
//             "SongName": "Red Velvet レッドベルベット 'WILDSIDE' MV",
//             "SongImg": "https://i.ytimg.com/vi/xGr53sCo62c/default.jpg"
//         },
//         {
//             "ID": 37,
//             "SongID": "vPwaXytZcgI",
//             "SongName": "TWICE “SCIENTIST” M/V",
//             "SongImg": "https://i.ytimg.com/vi/vPwaXytZcgI/default.jpg"
//         },
//         {
//             "ID": 38,
//             "SongID": "499YUeNoYVE",
//             "SongName": "[MV] Apink(에이핑크) _ %%(Eung Eung(응응))",
//             "SongImg": "https://i.ytimg.com/vi/499YUeNoYVE/default.jpg"
//         },
//         {
//             "ID": 39,
//             "SongID": "6xkeh6DJhoQ",
//             "SongName": "Christina Perri - Who do you think you are (Jar of Hearts) (Lyrics)",
//             "SongImg": "https://i.ytimg.com/vi/6xkeh6DJhoQ/default.jpg"
//         },
//         {
//             "ID": 40,
//             "SongID": "WPdWvnAAurg",
//             "SongName": "aespa 에스파 'Savage' MV",
//             "SongImg": "https://i.ytimg.com/vi/WPdWvnAAurg/default.jpg"
//         },
//         {
//             "ID": 41,
//             "SongID": "c4DDe6W1mEM",
//             "SongName": "EVERGLOW - 'MIA' Cover (GAYLE - abcdefu)",
//             "SongImg": "https://i.ytimg.com/vi/c4DDe6W1mEM/default.jpg"
//         },
//         {
//             "ID": 42,
//             "SongID": "_H7ZG7yk5Wo",
//             "SongName": "Girl's Day(걸스데이) _ Don't forget me(나를 잊지마요) MV",
//             "SongImg": "https://i.ytimg.com/vi/_H7ZG7yk5Wo/default.jpg"
//         },
//         {
//             "ID": 43,
//             "SongID": "mCRIqC7SEro",
//             "SongName": "Apink 'NoNoNo' mirrored Dance MV",
//             "SongImg": "https://i.ytimg.com/vi/mCRIqC7SEro/default.jpg"
//         },
//         {
//             "ID": 44,
//             "SongID": "LJVUjmNMF8c",
//             "SongName": "[MV] 씨스타(SISTAR) _ I Like That",
//             "SongImg": "https://i.ytimg.com/vi/LJVUjmNMF8c/default.jpg"
//         },
//         {
//             "ID": 45,
//             "SongID": "3fDnj6zD4gE",
//             "SongName": "[MV] AOA _ GET OUT",
//             "SongImg": "https://i.ytimg.com/vi/3fDnj6zD4gE/default.jpg"
//         },
//         {
//             "ID": 46,
//             "SongID": "R9At2ICm4LQ",
//             "SongName": "Red Velvet 레드벨벳 'Feel My Rhythm' MV",
//             "SongImg": "https://i.ytimg.com/vi/R9At2ICm4LQ/default.jpg"
//         },
//         {
//             "ID": 47,
//             "SongID": "Z8j_XEn9b_8",
//             "SongName": "Girls' Generation 소녀시대 'Mr.Mr.' MV",
//             "SongImg": "https://i.ytimg.com/vi/Z8j_XEn9b_8/default.jpg"
//         },
//         {
//             "ID": 48,
//             "SongID": "iDjQSdN_ig8",
//             "SongName": "[MV] OH MY GIRL(오마이걸) _ Nonstop(살짝 설렜어)",
//             "SongImg": "https://i.ytimg.com/vi/iDjQSdN_ig8/default.jpg"
//         },
//         {
//             "ID": 49,
//             "SongID": "w2S7ljcA7NM",
//             "SongName": "Girl's Day(걸스데이) 'Don't forget me(나를 잊지마요)' Official MV",
//             "SongImg": "https://i.ytimg.com/vi/w2S7ljcA7NM/default.jpg"
//         }
//     ]
// },
// {
//     id: 1,
//     pId: 'PLOAnpT8sPGhlK2caT8Ys7GqORU294ipHI',
//     name: 'K-Pop 2',
//     media: [
//         {
//             "ID": 0,
//             "SongID": "z2ZjutyxmjA",
//             "SongName": "aespa 에스파 'Life's Too Short (English Ver.)' MV",
//             "SongImg": "https://i.ytimg.com/vi/z2ZjutyxmjA/default.jpg"
//         },
//         {
//             "ID": 1,
//             "SongID": "H69tJmsgd9I",
//             "SongName": "[STATION] aespa 에스파 'Dreams Come True' MV",
//             "SongImg": "https://i.ytimg.com/vi/H69tJmsgd9I/default.jpg"
//         },
//         {
//             "ID": 2,
//             "SongID": "G8GaQdW2wHc",
//             "SongName": "IZ*ONE (아이즈원) 'Panorama' MV",
//             "SongImg": "https://i.ytimg.com/vi/G8GaQdW2wHc/default.jpg"
//         }
//     ]
// }

export const slicePlaylists = createSlice({
    name: 'Playlists',
    initialState: defaultState,
    reducers: {
        updatePlaylists: (state, action) => {
            state = action.payload
            return(state)
        },
        updatePlaylist: (state, action) => {
            
            for(let i = 0;i<current(state).length;i++){
                if(current(state)[i].id === action.payload[0].id){
                    console.log('Found Playlist')
                    state[i] = action.payload[0]
                    return(state)
                }
            }
            
            return(state)
        },
        createPlaylist: (state, action) => {
            console.log('Creating playlist');
            console.log(action.payload.playlist)
            let i = action.payload.playlist.id
            state[i] = action.payload.playlist
            return(state)
        }, 
        deletePlaylist: (state,action) => {
            const result = current(state).filter((x) => x.id !== action.payload[0].id)
            state = result;
            return(state)
        }
    }
})

export const { updatePlaylist, createPlaylist, deletePlaylist, updatePlaylists } = slicePlaylists.actions;


export default slicePlaylists.reducer