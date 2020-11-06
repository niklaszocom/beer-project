const api = 'https://api.punkapi.com/v2/beers?per_page=10';

const formElement = document.querySelector("form");
const mainElement = document.querySelector("main");

formElement.addEventListener("submit",onSubmit)

function onSubmit(evt) {
    const searchStr =  evt.target[0].value;

    const url = `${api}&beer_name=${searchStr}`;

    getData(url, render);


    evt.preventDefault();
}


function getData(url, callback) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data);

    })
    .catch(error => console.log(error));
}


function render(data) {

    const ulElement = document.createElement("ul");

    ulElement.addEventListener("click", onUlClicked);

    for(let i = 0; i < data.length; i ++) {

        const beer = data[i];

        const liElement = document.createElement("li");  
        liElement.setAttribute("name", beer.id);
        liElement.textContent = beer.name;
        ulElement.appendChild(liElement)   
        
    }
    mainElement.appendChild(ulElement);
    const btn = document.createElement("button")
    btn.innerText = "next";
    mainElement.appendChild(btn);

    let n = 2;
  
    btn.addEventListener("click", () => {

        let url = new URL(api);
        let search_params = url.searchParams;
        
        search_params.set('page',n);
        url.search = search_params.toString();
        let new_url = url.toString();
        const  new_urlElement = document.createElement("p");
        new_urlElement.textContent = new_url;
        mainElement.appendChild(new_urlElement)
        n += 1;
       
       
        
        
    })
    

}


function onUlClicked(evt) {
    const id = evt.target.getAttribute("name");
    const url = `MyView.html?name=${id}`;
    document.location.href = url;

}

function removeAllChildnode(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


