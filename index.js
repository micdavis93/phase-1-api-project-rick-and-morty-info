// Create global variables
//Character List
const charNameList = documment.querySelector("#character-names")

// Character Info
const charImg = document.querySelector("#character-image")
const charRating = document.querySelector("#character-rating")
const charName = document.querySelector("#character-name")
const charStatus = document.querySelector("#character-status")
const charOrigin = document.querySelector("#character-origin")
const charFirstApp = document.querySelector("#character-first-appearance")
const jerryApproved = document.querySelector("#jerry-approved")
const jerryDisapproved = document.querySelector("#jerry-disapproved")

const commentsForm = document.querySelector("#comments-form")
const commentsList = document.querySelector("#comments-list")

// Get Request
fetch("https://rickandmortyapi.com/api/characters/results")
    .then(r => r.json())
    .then(characters => {
        listCharacters(characters)
        showInformation(characters[0])
    })

// Declare and define functions

function listCharacters(character){
    forEach(character => {
        const h5 = document.createElement("h5");
        h5.innerText = character.name;
        charNameList.append(h5);

        nav.addEventListener("click", (e) => {
            showInformation(current)
        });
    });
};

function showInformation(current){
    charImg.src = current.image
    charName.innerText = current.name


    submitComment(current)
}

function jerryRating(current){
        ticketButton.addEventListener("click", ()=>{
        tixBought.innerText = `${current.tickets_bought ++} Tickets Bought``
}

// 2. SHOW DETAILS function
// function showDetails(current){
//     charName.innerText = current.name
//     charImg.src = current.image
//     voteCount.innerText = current.votes

//     voteSubmit(current)
// }

// function buyTicket(){
//     ticketButton.addEventListener("click", ()=>{
//         tixBought.innerText = `${current.tickets_bought ++} Tickets Bought`
//     })
// }

function submitComment(current){

}