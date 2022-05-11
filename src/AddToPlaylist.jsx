
import React, {useState} from "react"

const CreatePost = (props) => {
    
    const[title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
   
    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        }
        props.addToPlaylist(newEntry)
    }
return (
<form onSubmit ={handleSubmit}>
    <h3>Add to Playlist</h3>
    <label for= "name">Title:</label>
    <input type= "text" onChange={(event) => setTitle(event.target.value)}value={title}/>
    <label for= "post">Artist:</label>
    <input type= "textarea" onChange={(event) => setArtist(event.target.value)}value={artist}/>
    <label for= "post">Album:</label>
    <input type= "textarea" onChange={(event) => setAlbum(event.target.value)}value={album}/>  
    <label for= "post">Release Date:</label>
    <input type= "date" onChange={(event) => setReleaseDate(event.target.value)}value={release_date}/>
    <label for= "post">Genre:</label>
    <input type= "textarea" onChange={(event) => setGenre(event.target.value)}value={genre}/>  
    <button type='submit'> Submit </button>
</form>  
);
}

export default CreatePost;