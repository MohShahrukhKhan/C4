// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, addFunctionalities } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
addFunctionalities();

let countriesData = (query) => {
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`).then((res) => {
        return res.json()
    }).then(res => {
        appendsData(res.articles);
    })
}
let countries = document.querySelector("#sidebar").children;

for (let country of countries) {
    country.addEventListener("click", () => {
        countriesData(country.id);
    })
}

let appendsData = (data) => {
    let container = document.querySelector("#results");
    container.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement("div");
        div.className = "news"
        div.addEventListener("click", () => {
            localStorage.setItem("news", JSON.stringify(el));
            window.location.href = "../news.html"
        })
        let img = document.createElement("img");
        img.style.width = "250px"
        img.style.height = "150px"
        img.src = el.urlToImage;
        let text = document.createElement("div");
        let title = document.createElement("h3");
        title.innerText = el.title;
        let desc = document.createElement("p");
        desc.innerText = el.description;
        text.append(title, desc);
        div.append(img, text);
        container.append(div);
    })
}

countriesData("in")