const beerCollection = document.querySelector('#beers');

document.addEventListener("DOMContentLoaded", () => {
    fetchBeers()
    openDescription()
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
    button.className = "desrciption-button"
    button.innerText = "Description"
    button.addEventListener('click', () => {
        openDescription(beer)
    })
    div.appendChild(button)
    beerCollection.appendChild(div)
}

function openDescription(beers, button) {
    return fetch("https://api.punkapi.com/v2/beers/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        button.innerText = beers.description
})
}