# Purpose of this application is to create YouTube & Spotify playlists then Watch / Listen them. 

**Functions**
- Search YouTube/Spotify Videos
- Create Custom Playlists
- Play Custom Playlists
- Link Save Data to Rokorium Account
- Use LocalStorage in Event Internet is not connected. 
- - Also reduces API calls. (Example: API is called when a playlist is Saved, and when a user ) 

**UI Features**
- Indicator if Internet is not Connected
- Media Player

**Components**
- Nav 
    - Toggle between Video and Audio Only
    - Option: Edit Playlists
    - DropDown: Select Playlist
- Media Player (Always On Screen - This is so music can be playing in background while other things are done.)
    - IMG/Video of Content
        - Grows/Shrinks with Available Space
    - DropDown: View Next Videos (Collapses to right)
        - Highlight Current Video
    - Grows/Shrinks with Available Space
- Search Videos
    - IMG/Video of Selected Content
    - Option to Switch between Video and Audio Only
- Media Content
    - Option to add to Playlist, drop down to select which
    - IMG of content
    - BTN to set Media Preview
- Playlist (Add Remove Media)
    - If song is in playlist, check box is checked


**APIs**
- YouTube (Google API)
- - Search YouTube Videos
- - Get Playlist Videos
- Spotify
- - Search Artists and View Album


**Versions**
# 0.1.0
- Widgets Created and can be Navigated to/from
- Redux Shell Created
# 0.2.0
- RAPI Search Functionality
- Video Preview Functionality
# 0.3.0
- RAPI Authentication
- Profile UI Modification
# 0.4.0
- Redux Functions Created
- Save/Load LocalStorage
- Save/Load RAPI
# 0.5.0
- Create/Edit/Delete Playlist Functionality
- Add/Remove Video from Playlist