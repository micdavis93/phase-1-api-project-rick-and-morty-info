/* Global Variables */
// Reassignables
let currentCharacter
let currentComments

// Character List
const charNav = document.querySelector("#character-nav")

// Character Info
const charImg = document.querySelector("#character-image")
const charName = document.querySelector("#character-name")
const charStatus = document.querySelector("#character-status")
const charOrigin = document.querySelector("#character-origin")
const jerryApprovedButton = document.querySelector("#jerry-approved-button")
const jerryDisapprovedButton = document.querySelector("#jerry-disapproved-button")
const jerryRating = document.querySelector("#jerry-rating-counter")

// Comments
const commentsForm = document.querySelector("#comments-form")
const comments = document.querySelector("#comments-list")

/* Get Request*/
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
        console.log(characters)
        currentCharacter = characters[0]
        listCharacters(characters)
        showInformation(currentCharacter)
        jerryButtons()
        submitComment()
    })

/* Function Declarations */
function listCharacters(characters){
    characters.forEach(character => {
        const h5 = document.createElement("h5");
        h5.innerText = character.name;
        h5.className = "character-selector"
        charNav.append(h5);

        h5.addEventListener("click", ()=>{
            const characters = document.querySelectorAll(".character-selector")
            characters.forEach(character => {
                character.classList.remove("current-name")
            })

            showInformation(character)
            h5.classList.add("current-name")
        })

        h5.addEventListener("mouseover", ()=>{
            h5.classList.add("hover-white")
        })
        h5.addEventListener("mouseout", ()=>{
            h5.classList.remove("hover-white")
        })
    });
};

function showInformation(character){
    currentCharacter = character
    currentComments = character.comments

    charImg.src = character.image
    charName.innerText = character.name
    charStatus.innerText = `Alive... OR DEAD?!: ${character.status}`
    charOrigin.innerText = `HOME PLANET BROH?!: ${character.origin.name}`
    jerryRating.innerText = character.rating

    showComments(character)
}

function jerryButtons(){
    // Approved
    jerryApprovedButton.addEventListener("click", ()=>{
        currentCharacter.rating ++
        jerryRating.innerText = currentCharacter.rating
        console.log(currentCharacter.rating)
    })

    jerryApprovedButton.addEventListener("mouseover", ()=>{
        jerryApprovedButton.src = "/images/Jerry Approve HOVER FINAL.png"
        jerryApprovedButton.style = "width: 160px;"
    })
    jerryApprovedButton.addEventListener("mouseout", ()=>{
        jerryApprovedButton.src = "/images/Jerry Approve FINAL.png"
        jerryApprovedButton.style = "width: 150px;"
    })

    // Disapproved
    jerryDisapprovedButton.addEventListener("click", ()=>{
        currentCharacter.rating --
        jerryRating.innerText = currentCharacter.rating
        console.log(currentCharacter.rating)
    })

    jerryDisapprovedButton.addEventListener("mouseover", ()=>{
        jerryDisapprovedButton.src = "/images/Jerry Disapprove HOVER FINAL.png"
        jerryDisapprovedButton.style = "width: 160px;"
    })
    jerryDisapprovedButton.addEventListener("mouseout", ()=>{
        jerryDisapprovedButton.src = "/images/Jerry Disapprove FINAL.png"
        jerryDisapprovedButton.style = "width: 150px;"
    })
}

function showComments(currentCharacter){
    currentComments = document.querySelectorAll(".comment")
    currentComments.forEach(comment => {
        comment.remove()
    })
    currentCharacter.comments.forEach(comment => {
        const p = document.createElement("p")
        p.innerText = comment
        p.className = "comment"
        comments.append(p)
    })
    currentComments = document.querySelectorAll(".comment")
}

function submitComment(){
    commentsForm.addEventListener("submit", (e)=> {
        e.preventDefault()
        const p = document.createElement("p")
        p.innerText = e.target["comment-input"].value
        p.className = "comment"
        comments.append(p)
        currentCharacter.comments.push(p.textContent)
        commentsForm.reset()
        console.log(currentCharacter.comments)
    })
}