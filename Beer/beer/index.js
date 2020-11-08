//Response
const response = new XMLHttpRequest();
let singleBeer = null;
let beerId = localStorage.getItem('beerId');
let td = document.querySelectorAll("td")
let img = document.querySelector("img")
console.log(img.src);

let renderHops = function (obj) {
	let str = (item) => {
		return `
	<ul> 
		<li><strong>Name</strong>${item.name}</li>
		<li></li>
		<li></li>
		<li></li>
	</ul>`
	}
	for (const prop of obj) {
		console.log(prop)
		str(prop)

	}
}

response.open("GET", `https://api.punkapi.com/v2/beers/${beerId}`, true);
response.send();

response.onreadystatechange = function () {
	if (response.readyState != 4) return;
	if (response.status != 200) {
		alert(response.status + ": " + response.statusText);
	}
	else {
		const singleBeer = JSON.parse(response.responseText)[0];
		console.log(singleBeer);
		td[0].innerHTML = singleBeer.description
		img.src = singleBeer.image_url
		td[2].innerHTML = singleBeer.abv
		td[3].innerHTML = singleBeer.volume.value
		// td[4].innerHTML = singleBeer.ingredients
		// td[5].innerHTML = singleBeer.ingredients.hops 
		renderHops(singleBeer.ingredients.hops)
		td[6].innerHTML = singleBeer.food_pairing
		td[7].innerHTML = singleBeer.brewers_tips
	}
};






