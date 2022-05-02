function navbar(){
    return `<h1><a href="index.html">News App</a></h1>
    <input type="text" id="search_input" placeholder="Search News">
    `
}
let addFunctionalities = () => {
    document.querySelector("#search_input").addEventListener("keydown", search);
}
let search = (e) => {
    if (e.code == "Enter") {
        let query = document.querySelector("#search_input").value;
        localStorage.setItem("news1", JSON.stringify(query))
        window.location.href = "../search.html";
    }
}

export {navbar,addFunctionalities}