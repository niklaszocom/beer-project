const field = document.querySelector("#field");
const btn = document.querySelector("#btn");
const main = document.querySelector("main");
const ul = document.createElement("ul");
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
prevBtn.appendChild(document.createTextNode("prev"));
nextBtn.appendChild(document.createTextNode("next"));
prevBtn.className = "prevBtn";
nextBtn.className = "nextBtn";
const btnSection = document.createElement("section")

// Loader

const loader = document.createElement("h1");
loader.appendChild(document.createTextNode("Loading..."));

// Loader

let page = 1;
let displayButtons = false;

const api = "https://api.punkapi.com/v2/";

const response = new XMLHttpRequest();

let currentBeers = [];

// Search
btn.onclick = (e) => {
    e.preventDefault();
    response
        .open("GET", `${api}beers?page=1&per_page=10&beer_name=${field.value}`, true);
    response.send();
    main.appendChild(loader);
};

response.onreadystatechange = function () {
    if (response.readyState === 4 && response.status === 200) {
        main.removeChild(loader);
        if (!displayButtons) {
            displayButtons = true;
            main.appendChild(ul);
            btnSection.appendChild(prevBtn);
            btnSection.appendChild(nextBtn);
            document.body.appendChild(btnSection);
            btnSection.className = "search_btn_section";
        } else {
            removeAllChildnode(ul);
        }
        page = 1;
        currentBeers = JSON.parse(response.responseText);

        for (let i = 0; i <= currentBeers.length - 1; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = `/beer-project/beer_info.html?name=${currentBeers[i].id}`;
            a.appendChild(document.createTextNode(currentBeers[i].name));
            li.appendChild(a);
            ul.appendChild(li);
        }

    }
};
// Search

prevBtn.addEventListener("click", () => {
    if (page > 1) {
        removeAllChildnode(ul);
        page--;
        const response = new XMLHttpRequest();

        response
            .open("GET", `${api}beers?page=${page}&per_page=10&beer_name=${field.value}`, true);

        response.send();

        response.onreadystatechange = function () {
            if (response.readyState === 4 && response.status === 200) {
                currentBeers = JSON.parse(response.responseText);
                main.appendChild(ul);

                for (let i = 0; i <= currentBeers.length - 1; i++) {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = `/beer-project/beer_info.html?name=${currentBeers[i].id}`;
                    a.appendChild(document.createTextNode(currentBeers[i].name));
                    li.appendChild(a);
                    ul.appendChild(li);
                }
                urladdress()
            }
        };
    }
});

nextBtn.addEventListener("click", () => {
    if (currentBeers.length === 10) {
        page++;
        removeAllChildnode(ul);
        const response = new XMLHttpRequest();

        response
            .open("GET", `${api}beers?page=${page}&per_page=10&beer_name=${field.value}`, true);

        response.send();


        response.onreadystatechange = function () {
            if (response.readyState === 4 && response.status === 200) {
                currentBeers = JSON.parse(response.responseText);
                main.appendChild(ul);

                for (let i = 0; i <= currentBeers.length - 1; i++) {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = `/beer-project/beer_info.html?name=${currentBeers[i].id}`;
                    a.appendChild(document.createTextNode(currentBeers[i].name));
                    li.appendChild(a);
                    ul.appendChild(li);
                }
                urladdress()
            }
        };
    }
});

function removeAllChildnode(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
