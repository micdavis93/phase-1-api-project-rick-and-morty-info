// Create global variables


// Get Request
{
fetch("https://rickandmortyapi.com/api/characters/result")
    .then(r => r.json())
    .then(characters => {
        listCharacters(characters)
        showInformation(characters[0])
    })

}

// Declare and define functions
function listCharacters(characters){

}

function showInformation(current){

}

function submitComment(current){

}