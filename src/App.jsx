import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from "./DisplayMusic"
import AddToPlaylist from "./AddToPlaylist"
import SearchBar from "./SearchBar"
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
    // async function searchForSong(){
    //     let response = await axios.get('http://127.0.0.1:8000/music/');
    //     setSongs(response.data);}
    
    return (
        <div>
            <h3>Hello World</h3>
            <AddToPlaylist addToPlaylist= {addNewSong}/>
            <DisplayMusic playlist = {songs}/>
            {/* <SearchBar songsearch = {searchForSong}/> */}
            {/* <SearchBar searchBar = {songs}/> */}
        </div>
    );
}

export default App;