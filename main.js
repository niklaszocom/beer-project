const url = "https://api.punkapi.com/v2/beers/random";

const button = document.querySelector("#button");




let displayRandomBeer = (beerName, beerImage) => {

    const divElement = document.querySelector(".showbeer");

    removeAllChildNodes(divElement);

    const h2Element = document.createElement("h2");
    const imgElement = document.createElement("img");
    const aElement = document.createElement("a");

    let textNode = document.createTextNode(beerName);
    let linkNode = document.createTextNode("See More");

    imgElement.src = beerImage;
    imgElement.alt = "image:";

    aElement.href = "info.html";
    aElement.className = "seeMoreLink";

    divElement.appendChild(imgElement);
    divElement.appendChild(h2Element);
    h2Element.appendChild(textNode);
    divElement.appendChild(aElement);
    aElement.appendChild(linkNode);

}


let createRandomBeer = (data) => {
    let beer = data[0].name;
    let beerpic = data[0].image_url;
    //console.log(data[0]);
    // Gratisbild: https://pixabay.com/sv/vectors/flaska-%C3%B6l-siluett-svart-dryck-310313/
    if (data[0].image_url == null) { beerpic = "img/beer_without_image.png"; }

    displayRandomBeer(beer, beerpic);
}



button.addEventListener('click', () => {
    fetcher(url, createRandomBeer);
});




//GENERELLA FUNKTIONER:

//ange den URL som ska hämtas, samt den funktion (utan ()) som skall anropas:
let fetcher = (url, callback) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })

}


//parent skall vara den klass eller det element vars children skall raderas:
let removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}