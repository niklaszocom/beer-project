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
                ingredientsArray.push(`attribute :${element.attribute}`);
            }
          }
        }
      }

      const ingredients = ingredientsArray.join("");
      const ingredientsElement = document.innerHTML = ingredients;


    const h1Tag = document.createElement("h1");
    const imgElement = document.createElement("img");
    const descriptionElement = document.createElement("p");
    const section = document.createElement("section");

    section.className = 'details';
    h1Tag.className = "details_h1"
    imgElement.className = "details_img";
    descriptionElement.className = "details_p";

    
    h1Tag.textContent = `name: ${name}`;
    imgElement.src = img;
    descriptionElement.innerHTML = 
    `<b>description:</b> ${description}<br>
    <b>Alcohol by volume:</b> ${abv}%<br>
    <b>Volume value:</b> ${volumeValue}<br>
    <b>Volume unit: </b>${volumeUnit}<br>
    <b>Ingredients:</b><br>${ingredients}<br>
    <b>Yeast:</b> ${yeast}<br>
    <b>Food pairing:</b> ${food_pairing}<br>
    <b>Brewers tips:</b> ${brewers_tips}<br>`;

    section.appendChild(h1Tag);
    section.appendChild(imgElement);
    section.appendChild( descriptionElement);
    mainElement.appendChild(section);

}