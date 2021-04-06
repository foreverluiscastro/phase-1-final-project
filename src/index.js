const beerCollection = document.querySelector('#beers');

const modal = document.querySelector('#modal')
modal.className = "hidden"

document.addEventListener("DOMContentLoaded", () => {
    fetchBeers()
})

function fetchBeers() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
        renderAllBeers(data)
    })
}

function renderAllBeers(array) {
    return array.forEach(beer => renderSingleBeer(beer))
}

function renderSingleBeer(beer) {
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `
        <h3>${beer.name}</h3>
        <img src=${beer.image_url} class="beer-avatar"/>
        <p>Tagline:${beer.tagline}</p>
        <p>ABV%:${beer.abv}</p>
    `
    let button = document.createElement("button")
    button.className = "description-button"
    button.innerText = "Description"
    button.addEventListener('click', () => {
        openDescription(beer)
    })
    div.appendChild(button)
    beerCollection.appendChild(div)
}

// function openDescription(event) {
//     let description = event.target.innerText
//     modal.className = ""
//     modal.innerText = `${event}`
//     setTimeout(() => {
//         modal.className = "hidden"
//     }, 15000);
// }


function openDescription(beer) {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${beer.name.split(" ").join("_")}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let description = beer.description
        modal.className = ""
        modal.innerText = `${description}`
        setTimeout(() => {
            modal.className = "hidden"
        }, 10000);
})
}