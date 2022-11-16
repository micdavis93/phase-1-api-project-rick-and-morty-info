// Create global variables
// Character List
const charNameList = document.querySelector("#character-names")

// Character Info
const charImg = document.querySelector("#character-image")
const charRating = document.querySelector("#jerry-rating")
const charName = document.querySelector("#character-name")
const charStatus = document.querySelector("#character-status")
const charOrigin = document.querySelector("#character-origin")
const jerryApprovedButton = document.querySelector("#jerry-approved-button")
const jerryDisapprovedButton = document.querySelector("#jerry-disapproved-button")
const jerryRating = document.querySelector("#jerry-approved-counter")

// Comments
const commentsForm = document.querySelector("#comments-form")
const commentsList = document.querySelector("#comments-list")

// API Get Request
Promise.all([
    fetch("https://rickandmortyapi.com/api/character").then(r => r.json()),
    fetch("http://localhost:3000/characters").then(r => r.json())
    ])
    .then(data => {
        const API = data[0].results.filter(character => character.id<6)
        const JSON = data[1]
        const characters = [API, JSON]
        listCharacters(characters)
        showInformation(characters[0][2])
        showJerryRating(characters[1][2])
    })

// Declare and define functions
function listCharacters(characters){
    const charactersAPI = characters[0]
    const charactersJSON = characters[1]
    
    charactersAPI.forEach(character => {
        const h5 = document.createElement("h5");
        h5.innerText = character.name;
        charNameList.append(h5);

        const characterID = character.id
        h5.addEventListener("click", (e) => {
            showInformation(character)
            showJerryRating(charactersJSON[(characterID-1)])
        });
    });
};

function showInformation(characterAPI){
    charImg.src = characterAPI.image
    charName.innerText = characterAPI.name
    charStatus.innerText = `Alive... OR DEAD?!: ${characterAPI.status}`
    charOrigin.innerText = `HOME PLANET BROH?!: ${characterAPI.origin.name}`
}

function showJerryRating(character){
    let rating = character.rating
    jerryRating.innerText = rating
    jerryApprovedButton.addEventListener("click", e =>{
        rating ++
        jerryRating.innerText = rating
    })
    jerryDisapprovedButton.addEventListener("click", e =>{
        rating --
        jerryRating.innerText = rating
    })
}

// function submitComment(character){

// }
