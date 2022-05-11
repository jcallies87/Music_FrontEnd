import React, {useState} from "react"
import DisplayMusic from "./DisplayMusic";


const SearchBar = (props) => {
    
    const[search, setSearch] = useState('');
    function handleSubmit(formEvent){
        formEvent.preventDefault();
        props.songSearch(searchResults)
        }
    let musicMap = props.searchBar.map((songs) => {
        return true;})
     let searchResults = musicMap.filter(() => {
        if (setSearch == DisplayMusic){
            return searchResults;};
        if (setSearch !== DisplayMusic){
            return false;};
        })

    

return(
<form onSubmit ={handleSubmit}>
    <label for = "search">Search</label>
    <input type = "text" onChange={(event) => setSearch(event.target.value)}value={search}/>
    <button type='submit'> Search </button>
</form>
)
}   
export default SearchBar;