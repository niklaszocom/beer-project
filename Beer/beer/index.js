//Response
const response = new XMLHttpRequest();
let singleBeer = null;
let beerId = localStorage.getItem('beerId');
let td = document.querySelectorAll("td")
let img = document.querySelector("img")


let renderData = function (obj, index) {
	let str = (item) => {
		if (item.attribute) {
			return `<ul class="list-group"> 
					<li class="list-group-item"><strong>Name</strong>${item.name}</li>
					<li class="list-group-item"><strong>Add</strong>${item.add}</li>
					<li class="list-group-item"><strong>Amount</strong>${item.amount.value} ${item.amount.unit}</li>
					<li class="list-group-item"><strong>Attribute</strong>${item.attribute}</li>
				</ul>`
		} else {
			return `<ul>
				<li><strong>Amount</strong>${item.amount.value} ${item.amount.unit}</li>
				<li><strong>Name</strong>${item.name}</li>
			</ul>`
		}

	}
	let a = []
	for (const prop in obj) {
		a.push(str(obj[prop]))
	}
	td[index].innerHTML = a
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
		renderData(singleBeer.ingredients.malt, 4)
		renderData(singleBeer.ingredients.hops, 5)
		td[6].innerHTML = singleBeer.food_pairing
		td[7].innerHTML = singleBeer.brewers_tips
	}
};

