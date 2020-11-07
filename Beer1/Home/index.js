const root = document.getElementById("root")
const randomBeer = axios
.get("https://api.punkapi.com/v2/beers/random").then(function(res){
return res.data
})
console.log(randomBeer)