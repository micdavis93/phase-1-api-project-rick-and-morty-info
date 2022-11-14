// Create global variables
// Character Info
const charImg = document.querySelector("#character-image")
const charRating = document.querySelector("#character-rating")
const charName = document.querySelector("#character-name")
const charStatus = document.querySelector("#character-status")
const charOrigin = document.querySelector("#character-origin")
const charFirstApp = document.querySelector("#character-first-appearance")


const commentsForm = document.querySelector("#comments-form")
const commentsList = document.querySelector("#comments-list")

// Get Request
fetch("https://rickandmortyapi.com/api/characters/result")
    .then(r => r.json())
    .then(characters => {
        listCharacters(characters)
        showInformation(characters[0])
    })

// Declare and define functions
function listCharacters(character){
    forEach(character => {

    })
}

// function listCharacters(charData){
//     const charBar = document.querySelector("#character-bar")
    
//     charData.forEach(character => {
//         const span = document.createElement("span")
//         span.innerText = character.name
//         charBar.append(span)

//         // 2. SHOW DETAILS function on click (should this go before append?)
//         span.addEventListener("click", (e) => {
//             showDetails(character)
//         })
//     })
// }

function showInformation(current){


    submitComment(current)
}

function submitComment(current){

}