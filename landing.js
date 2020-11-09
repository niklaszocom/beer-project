const url = "https://api.punkapi.com/v2/beers/random";
const mainElement = document.querySelector('main');
let beers; 

const init = () => {

    const sectionElement = document.createElement('section');

    for (let i = 0; i < beers.length; i++) {
        const beer = beers[i];
        const beerName = beer.name;
        

        const fullName = `${beerName}`;
        
        const articleElement = document.createElement("article");
        const h2Element = document.createElement("h2");
        const imgElement = document.createElement("img");
        const textNode = document.createTextNode(fullName);
       
        imgElement.src = beer.image_url;

        h2Element.appendChild(textNode);
        articleElement.appendChild(h2Element);
        articleElement.appendChild(imgElement);
        sectionElement.appendChild(articleElement);

        

        

       console.log(beer.image_url)

    
    }
    

    
    mainElement.appendChild(sectionElement);

}

let p = fetch(url);


p.then(response => response.json())
.then(data => {
    
    beers = data;
    init();


})

