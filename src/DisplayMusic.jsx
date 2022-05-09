import React, {useState, useEffect} from 'react';
import bootstrap from 'bootstrap';

const DisplayMusic = (props) => {
    return (
<div class = "container">
    <h2> Playlist</h2>
    <table class= "table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
        </thead>
        <tbody>
            {props.playlist.map((songs) => {
              return(
                <tr>
                    <td>{songs.id}</td>
                    <td>{songs.title}</td>
                    <td>{songs.artist}</td>
                    <td>{songs.album}</td>
                    <td>{songs.release_date}</td>
                    <td>{songs.genre}</td>
                </tr>  
            ) })}

          </tbody>
      </table>
      </div>
    )}


export default DisplayMusic;