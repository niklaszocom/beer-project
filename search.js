

const api = 'https://api.punkapi.com/v2/beers?per_page=10';

const formElement = document.querySelector("form");
const mainElement = document.querySelector("main");
const btnElement = document.querySelector("p")

let array = [];

formElement.addEventListener("submit",onSubmit)

function onSubmit(evt) {

    const searchStr = evt.target[0].value;
   
    const url = `${api}&beer_name=${searchStr}`;

    getData(url, render);
   
    evt.preventDefault();

    array.push(searchStr)

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

    const prevBtn = document.createElement("button")
    prevBtn.innerText = "prev";
    btnElement.appendChild(prevBtn);

    

    prevBtn.addEventListener("click",() => {

        removeAllChildnode(ulElement)

        let url = `${api}&page=${n}&beer_name=${array[0]}`;
        n -= 1;
        // console.log(url)

        fetch(url)
        .then(res => res.json())
        .then(nextElement => {

            for(let i = 0; i < nextElement.length; i++) {

                const liElement = document.createElement("li")
                liElement.setAttribute("name", nextElement[i].id);
                liElement.textContent = nextElement[i].name;
                ulElement.appendChild(liElement)
                mainElement.appendChild(ulElement)
               
            }
     
        })
        
    })


    
    const nextBtn = document.createElement("button")
    nextBtn.innerText = "next";
    btnElement.appendChild(nextBtn);
   
    let n = 2;
  
    nextBtn.addEventListener("click",() => {

        removeAllChildnode(ulElement)

        let url = `${api}&page=${n}&beer_name=${array[0]}`;
        n += 1;
        console.log(url)

        fetch(url)
        .then(res => res.json())
        .then(nextElement => {

            for(let i = 0; i < nextElement.length; i++) {

                const liElement = document.createElement("li")
                liElement.setAttribute("name", nextElement[i].id);
                liElement.textContent = nextElement[i].name;
                ulElement.appendChild(liElement)
                mainElement.appendChild(ulElement)
               
            }
     
        })
        
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
