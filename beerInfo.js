async function getBeerInfo() {
    axios
        .get('https://api.punkapi.com/v2/beers/153')
        .then(function(response) {
            const data = response.data;

            for (const i of data) {
                const imageURL = i.image_url
                console.log(i)

                const image = document.getElementById('imgBox');
                image.setAttribute('src', imageURL)
                const beerName = document.getElementById('beer-name');
                const beerPercentage = document.getElementById('beer-alc-per')
                const beerMl = document.getElementById('beer-ml');
                const firstBrewed = document.getElementById('first-brewed')
                const beerDiscription = document.getElementById('beer-discription');
                const ingridents = document.getElementById('Ingredients');
                const ingAmount = document.getElementById('IngredientsAmount');
                const foodPairing = document.getElementById('foodPairing');
                const brewerTips = document.getElementById('brewersTips');

                beerName.innerText = i.name
                beerPercentage.innerText = i.ph
                beerMl.innerText = i.id
                firstBrewed.innerText = i.first_brewed
                beerDiscription.innerText = i.description
                foodPairing.innerText = i.food_pairing
                brewerTips.innerText = i.brewers_tips



                const beerIngridents = i.ingredients.hops[0]
                const beerIngridentsName = beerIngridents.name
                const beerIngridentsAmount = beerIngridents.amount.value

                ingridents.innerText = beerIngridentsName
                ingAmount.innerText = beerIngridentsAmount


            }

        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

getBeerInfo();