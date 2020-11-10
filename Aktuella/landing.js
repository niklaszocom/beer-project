const url = "https://api.punkapi.com/v2/beers/random";
const mainElement = document.querySelector('main');
let beers; 
const btnElement = document.querySelector('button.btnGo');
const seeMoreBtn = document.querySelector('button.seeMoreBtn')

btnElement.onclick = btnOnClick;
function btnOnClick(){
    let p = fetch(url);


p.then(response => response.json())
.then(data => {
    
    beers = data;
    init();


})

}

const init = () => {
 mainElement.innerHTML = ""
    const sectionElement = document.createElement('section');
    sectionElement.className = "landing_section";

    for (let i = 0; i < beers.length; i++) {
        const beer = beers[i];
        const beerName = beer.name;
        

        const fullName = `${beerName}`;

        
        const articleElement = document.createElement("article");
        const h2Element = document.createElement("h2");
        const imgElement = document.createElement("img");
        const textNode = document.createTextNode(fullName);
        seeMoreBtn.setAttribute("name", beer.id);
       
        imgElement.src = beer.image_url;

        h2Element.appendChild(textNode);
        articleElement.appendChild(h2Element);
        articleElement.appendChild(imgElement);
        sectionElement.appendChild(articleElement);
        

        

        console.log(beer.image_url)


      

    
    }
    

    
    mainElement.appendChild(sectionElement);


}

seeMoreBtn.addEventListener("click", onClicked);

function onClicked (evt) {
    const id = evt.target.getAttribute("name");
    const url = `beer_info.html?name=${id}`;
    document.location.href = url;
}

let p = fetch(url);


p.then(response => response.json())
.then(data => {
    
    beers = data;
    init();


})
