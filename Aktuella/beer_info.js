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
    const food_pairing = beer.food_pairing;
    const brewers_tips = beer.brewers_tips;
    const yeast = beer.ingredients.yeast;


    let ingredientsArray = [];

    for (const [key, value] of Object.entries(beer.ingredients)) {
        if (Array.isArray(value)) {
          for (const element of value) {
           
            ingredientsArray.push(`${key} name: ${element.name}<br>`);
            ingredientsArray.push(`amount value: ${element.amount.value}<br>`);
            ingredientsArray.push(`amount unit: ${element.amount.unit}<br>`);
            if ('add' in element) {
                ingredientsArray.push(`add :${element.add}<br>`);
                ingredientsArray.push(`attribute :${element.attribute}<br>`);
            }
          }
        }
      }

      const ingredients = ingredientsArray.join("");
      const ingredientsElement = document.innerHTML = ingredients;


    const h1Tag = document.createElement("hi");
    const imgElement = document.createElement("img");
    const descriptionElement = document.createElement("p");

    
    h1Tag.textContent = `name: ${name}`;
    imgElement.src = img;
    descriptionElement.innerHTML = 
     `description: ${description}<br>
      Alcohol by volume: ${abv}%<br>
      Volume value: ${volumeValue}<br>
      Volume unit: ${volumeUnit}<br>
      Ingredients:  ${ingredients}<br>
      Yeast: ${yeast}<br
      Food pairing: ${food_pairing}<br>
      Brewers tips: ${brewers_tips}<br>`;

    mainElement.appendChild(h1Tag);
    mainElement.appendChild(imgElement);
    mainElement.appendChild( descriptionElement);

}