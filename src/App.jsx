import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayMusic from "./DisplayMusic"

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    },[])

    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        setSongs(response.data);
    }

    return (
        <div>
            <h3>Hello World</h3>
            <DisplayMusic playlist = {songs}/>
        </div>
    );
}

export default App;