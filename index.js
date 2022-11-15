// Create global variables
// Character List
const charNameList = document.querySelector("#character-names")

// Character Info
const charImg = document.querySelector("#character-image")
const charRating = document.querySelector("#character-rating")
const charName = document.querySelector("#character-name")
const charStatus = document.querySelector("#character-status")
const charOrigin = document.querySelector("#character-origin")
const jerryApprovedButton = document.querySelector("#jerry-approved-button")
const jerryDisapprovedButton = document.querySelector("#jerry-disapproved-button")
const jerryApprovedCounter = document.querySelector("#jerry-approved-counter")
const jerryDisapprovedCounter = document.querySelector("#jerry-disapproved-counter")

// Comments
const commentsForm = document.querySelector("#comments-form")
const commentsList = document.querySelector("#comments-list")

// Get Request
{
fetch("https://rickandmortyapi.com/api/character")
    .then(r => r.json())
    .then(data => {
        const characters = data.results.filter(character => character.id<6)
        listCharacters(characters)
        showInformation(characters[2])
    })
}


// Declare and define functions
function listCharacters(characters){
    characters.forEach(character => {
        const h5 = document.createElement("h5");
        h5.innerText = character.name;
        charNameList.append(h5);

        h5.addEventListener("click", (e) => {
            showInformation(character)
        });
    });
};

function showInformation(character){
    charImg.src = character.image
    charName.innerText = character.name
    charStatus.innerText = `Alive... OR DEAD?!: ${character.status}`
    charOrigin.innerText = `HOME PLANET BROH?!: ${character.origin.name}`

    submitComment(character)
    jerryRating(character)
}

function jerryRating(character){
    jerryApprovedButton.addEventListener("click", e=>{
        let counter = Number(jerryApprovedCounter.innerText)
        counter++
        jerryApprovedCounter.innerText = counter
    })

    jerryDisapprovedButton.addEventListener("click", e=>{
        let counter = Number(jerryDisapprovedCounter.innerText)
        counter++
        jerryDisapprovedCounter.innerText = counter
    })
}

function submitComment(character){

}
