
//DOM
const root = document.getElementById("root")

//Response
const response = new XMLHttpRequest();
let randomBeer = null;

response
	.open("GET", "https://api.punkapi.com/v2/beers/random", true);

response.send();

response.onreadystatechange = function () {
	if (response.readyState != 4) return;

	if (response.status != 200) {
		alert(response.status + ": " + response.statusText);
	} else {
		//   console.log(response.responseText);
		const randomBeer = JSON.parse(response.responseText)[0];

		localStorage.setItem('beerId', randomBeer.id);

		//create element image
		if (randomBeer.image_url) {
			const img = document.createElement("img")
			img.src = randomBeer.image_url;
			console.log(randomBeer);

			// document.body.innerHTML = randomBeer[0].name;
			root.appendChild(img);
		}
		else {
			const noImgText = document.createElement("h6")
			noImgText.appendChild(document.createTextNode("No image"))
			root.appendChild(noImgText)
		}
		const beerName = document.createElement("h2")
		beerName.appendChild(document.createTextNode(randomBeer.name))

		const linkToTheBeer = document.createElement("a")
		linkToTheBeer.href = "/Beer/beer"
		linkToTheBeer.appendChild(document.createTextNode("About Beer"))
		root.appendChild(beerName)
		root.appendChild(linkToTheBeer)

	}

};