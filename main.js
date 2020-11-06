const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});


let menulink = document.querySelectorAll(".nav-link");
for (let i = 0; i < menulink.length; i++) {
    menulink[i].addEventListener('click', () => {
        nysida(menulink[i + 1], menulink[i].textContent);
    });
}




const url = "https://api.punkapi.com/v2/beers/random";

const button = document.querySelector("#button");
const eMain = document.querySelector("main");

const noPic = "img/beer_without_image.png";



let displayRandomBeer = (beerName, beerImage, beerId) => {

    const divElement = document.querySelector(".showbeer");

    removeAllChildNodes(divElement);

    const h2Element = document.createElement("h2");
    const imgElement = document.createElement("img");
    const aElement = document.createElement("a");

    let textNode = document.createTextNode(beerName);
    let linkNode = document.createTextNode("See More");

    imgElement.src = beerImage;
    imgElement.alt = "image:";

    //aElement.href = "info.html?name=" + beerId;
    aElement.href = "#";
    aElement.addEventListener('click', () => {
        nysida(3, 'Visa öl');
        showProduct(beerId);
    });
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
    let beerId = data[0].id;
    //console.log(data[0]);
    // Gratisbild: https://pixabay.com/sv/vectors/flaska-%C3%B6l-siluett-svart-dryck-310313/
    if (data[0].image_url == null) { beerpic = noPic; }

    displayRandomBeer(beer, beerpic, beerId);
}



button.addEventListener('click', () => {
    fetcher(url, createRandomBeer);
});



//Skapar DOM-element och information för specifik öl-produkt:

function showProduct(beerId) {

    let eContainer = document.createElement("section");
    eMain.appendChild(eContainer);

    let eContainer2 = document.createElement("div");
    eMain.appendChild(eContainer2);
    eContainer2.className = "testblock";
    eContainer2.textContent = "container2";

    eContainer.className = "testblock";
    eContainer.textContent = "container";

}



//GENERELLA FUNKTIONER:

//ange den URL som ska hämtas, samt den funktion (utan ()) som skall anropas:
let fetcher = (url, callback) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => console.log(error));

}


//parent skall vara den klass eller det element vars children skall raderas:
let removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}


function nysida(param, sidTitel) {
    removeAllChildNodes(eMain);
    let nyttElement = document.createElement("p");
    eMain.appendChild(nyttElement);
    nyttElement.textContent = '';
}