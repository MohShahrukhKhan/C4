// Ude Import export (MANDATORY)
import { navbar, addFunctionalities } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
addFunctionalities();

let Data = JSON.parse(localStorage.getItem("news"))


let img = document.createElement("img");
img.src = Data.urlToImage;
img.style.height = "500px"

let title = document.createElement("h3");
title.innerText = Data.title;

let p = document.createElement("p");
p.innerText = Data.content;

document.querySelector("#detailed_news").append(img, title,p)