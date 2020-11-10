async function getRandom() {
  axios
    .get('https://api.punkapi.com/v2/beers/random')
    .then(function (response) {
      const data = response.data;
      console.log(data)
      for (const i of data) {
        const imgURL = i.image_url
        console.log(imgURL)
        document.getElementById("random").src = imgURL
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}

getRandom();