const mainElement = document.querySelector("main");
const api = 'https://api.punkapi.com/v2/beers';
const searchParams = new URLSearchParams(document.location.search);
const id = searchParams.get("name");
const url = `${api}/${id}`;

getData(url,render);


function getData(url, callback) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data);

    })
    .catch(error => console.log(error));
}


function render(data) {
    
    
    const beer = data[0];

    const name = beer.name;
    const description = beer.description;
    const img = beer.image_url;
    const abv = beer.abv;
    const volumeValue = beer.volume.value;
    const volumeUnit = beer.volume.unit;

    const h1Tag = document.createElement("hi");
    const descriptionElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const abvElement = document.createElement("p");
    const volumeValueElement = document.createElement("p");
    const volumeUnitElement = document.createElement("p");

    h1Tag.textContent = `name: ${name}`;
    descriptionElement.textContent =  `description: ${description}`;
    imgElement.src = img;
    abvElement.textContent = `Alcohol by volume: ${abv}%`;
    volumeValueElement.textContent = `Volume value: ${volumeValue}`;
    volumeUnitElement.textContent = `Volume unit: ${volumeUnit}`;

    mainElement.appendChild(h1Tag);
    mainElement.appendChild(descriptionElement);
    mainElement.appendChild(imgElement);
    mainElement.appendChild(abvElement);
    mainElement.appendChild(volumeValueElement);
    mainElement.appendChild(volumeUnitElement);

}