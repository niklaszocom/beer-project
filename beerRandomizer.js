const axios = require('axios').default;

async function getRandom() {

    axios.get('https://api.punkapi.com/v2/beers/random')
        .then(function (response) {

            console.log(response);
        })
        .catch(function (error) {

            console.log(error);
        })
        .then(function () {

        });
}