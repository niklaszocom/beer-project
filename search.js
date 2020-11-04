const API = 'https://api.punkapi.com/v2/beers';



function onSubmit(e) {

    const searchStr = e.target[0].value;

    const url = `${API}?beer_name=${searchStr}`;

fetchData(url, renderFirstBeer);

    e.preventDefault();
}

function fetchData(url, callback){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data);
    })
    .catch(error => console.log(error));
}


const formElement = document.querySelector('form');
const mainElement = document.querySelector('main');


formElement.addEventListener('submit', onSubmit);


function render(data){

    const ulElement = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {

        const beer = data[i];
        
        const liElement = document.createElement('li');
        liElement.textContent = beer.name;
        ulElement.appendChild(liElement);
    }
mainElement.appendChild(ulElement);
}

function renderFirstBeer(data) {
    const firstBeer = data[0];

    const pElement = document.createElement('p');

    pElement.textContent = firstBeer.name;
    mainElement.appendChild(pElement);
}

