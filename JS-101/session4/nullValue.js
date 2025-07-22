// Write a JavaScript program that includes the following steps:
// Step 1: Define an array named myPlaylist containing at least three song titles
// Example: ["Cheap Thrills", "Check Kar", "Vikram"]
// Step 2: Define a function findSong(playlist, song) that:
// Takes in two arguments:
// playlist (an array of song titles)
// song (a string representing the title of a song)
// Searches the playlist array to check if the specified song is present.
// If the song is found in the playlist, return the index of the song else return null programmatically
// Test the function with the myPlaylist array and a song string, both present and not present in the playlist, to check for correct behaviour

let myPlaylist=['Saiyara','Faasle','Tu hai kahan'];

function findSong(playlist,song){
    if(playlist.includes(song)){
        return song
    }
    return null;
}

console.log(findSong(myPlaylist,'Saiyara'))
console.log(findSong(myPlaylist,'Husn'))