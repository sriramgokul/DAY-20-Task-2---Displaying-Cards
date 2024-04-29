//!Promise task 1 is about fetch the data from the api ("https://api.tcgdex.net/v2/en/sets") and displaying Id, Name, Card Count by using Promise and Fetch.

// Selecting the div using queryselector.
const pokemon = document.querySelector(".details");

//  Fetch and promise
function pokemonfetchDetails(){
    fetch("https://api.tcgdex.net/v2/en/sets")
    .then((res)=>res.json())
    .then((res1)=>pokemonDetails(res1))
    .catch((err)=>console.log(err))
}

 // forEach loop is used to display the contents

function pokemonDetails(element){
element.forEach((ele)=>{
    const card = document.createElement("div");
    card.setAttribute("class","card");
    card.setAttribute("style","width: 16rem");
    card.innerHTML += `
    <img src = ${ele.logo}.png class="card-img-top" alt="Img not Available">
    <div class="card-body">
    <p class="card-text"> ID : ${ele.id.toUpperCase()} </p>
    <p>Name : ${ele.name}</p>
    <p>Card-Count : ${ele.cardCount.total}</p>
    
    </div>

    `
    pokemon.append(card);
})}

// Function call
pokemonfetchDetails();
