const API = 'https://api.punkapi.com/v2/beers';
let page = 1;
let searchStr; 

function onSubmit(e) {

     searchStr = e.target[0].value;

    const url = `${API}?beer_name=${searchStr}&per_page=10&page=${page}`;

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

document.querySelector('#next').addEventListener('click',getNext);


function getNext(e) {

page++;


    const url = `${API}?beer_name=${searchStr}&per_page=10&page=${page}`;

fetchData(url, renderFirstBeer);

    e.preventDefault();
}


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

 mainElement.innerHTML = '';

for(let i = 0; i < data.length; i++){
    const pElement = document.createElement('p');

    pElement.textContent = data[i].name;
   
    mainElement.appendChild(pElement);
}

   
}

