const beerCollection = document.querySelector('#beers');

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
        <p>${beer.tagline}</p>
    `
    beerCollection.appendChild(div)
}