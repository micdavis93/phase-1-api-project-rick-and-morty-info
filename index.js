// Create global variables
let currentCharacter

// Character List
const charNameList = document.querySelector("#character-names")

// Character Info
const charImg = document.querySelector("#character-image")
// const charRating = document.querySelector("#jerry-rating")
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
        const characters = []
            {for (let i = 0; i < API.length; i++){
                characters.push({...API[i], ...JSON[i]})
            }}
        listCharacters(characters)
        showInformation(characters[0])
        jerryButtons()
    })

// Declare and define functions
function listCharacters(characters){
    characters.forEach(character => {
        const h5 = document.createElement("h5");
        h5.innerText = character.name;
        charNameList.append(h5);

        h5.addEventListener("click", (e) => {
            showInformation(character)
        })
    });
};

function showInformation(character){
    currentCharacter = character

    charImg.src = character.image
    charName.innerText = character.name
    charStatus.innerText = `Alive... OR DEAD?!: ${character.status}`
    charOrigin.innerText = `HOME PLANET BROH?!: ${character.origin.name}`
    jerryRating.innerText = character.rating
}

function jerryButtons(){
    jerryApprovedButton.addEventListener("click", ()=>{
        currentCharacter.rating ++
        jerryRating.innerText = currentCharacter.rating
        console.log(currentCharacter.rating)
    })
    jerryDisapprovedButton.addEventListener("click", ()=>{
        currentCharacter.rating --
        jerryRating.innerText = currentCharacter.rating
        console.log(currentCharacter.rating)
    })
}

// function submitComment(character){

// }
