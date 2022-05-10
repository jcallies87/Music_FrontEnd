import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from "./DisplayMusic"
import AddToPlaylist from "./AddToPlaylist"
function App() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    },[])

    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        setSongs(response.data);
    }
    async function addNewSong(newsong){
        let response = await axios.post('http://127.0.0.1:8000/music/', newsong);
        if(response.status === 201){
            await getAllSongs();
        }
      }
    return (
        <div>
            <h3>Hello World</h3>
            <AddToPlaylist addToPlaylist= {addNewSong}/>
            <DisplayMusic playlist = {songs}/>
        </div>
    );
}

export default App;