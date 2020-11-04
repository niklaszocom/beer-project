const url = "https://api.punkapi.com/v2/beers/random";
const divElement = document.querySelector("div");
let button = document.querySelector('#button');

const getElement = (beerName, beerImage) => {

    removeAllChildNodes(divElement);

    const sectionElement = document.createElement("section");
    divElement.appendChild(sectionElement);

    const imgElement = document.createElement("img");
    const textNode = document.createTextNode(beerName);
    const h2Element = document.createElement("h2");

    imgElement.src = beerImage;
    sectionElement.appendChild(imgElement);
    sectionElement.appendChild(h2Element);
    h2Element.appendChild(textNode);

    divElement.appendChild(sectionElement);

}

button.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            let beer = data[0].name;
            let beerpic = data[0].image_url;
            console.log(data[0]);
            if (data[0].image_url == null) {beerpic="";}

            getElement(beer, beerpic);
        })
});

function removeAllChildNodes(parent) {

    while (parent.firstChild) {

        parent.removeChild(parent.firstChild);
    }
}