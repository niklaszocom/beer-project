const api = "https://api.punkapi.com/v2/beers/random";
const mainElement = document.querySelector("main");
const formElement = document.querySelector("form");

function getData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
       
       console.log(data)

    })
    .catch(error => console.log(error));
}

formElement.addEventListener("click", randomBeer);


function randomBeer(data) {

    const beer = data[0];
    console.log(beer)
    // const name = beer.name;
    // const img = beer.image_url;

    // const imgTag = document.createElement("img");
    // const h1Tag = document.createElement("h1");
    // const pTag = document.createElement("p");

    // imgTag.src = img;
    // h1Tag.textContent = name;
    // pTag.textContent = "See More";

    // mainElement.appendChild(imgTag);
    // mainElement.appendChild(h1Tag);
    // mainElement.appendChild(pTag);

}


getData(api);

