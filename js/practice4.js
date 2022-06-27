"use strict"
// const searchBar = document.getElementsByName('search');



const movies = [
    {name: "TOP GUN"},
    {name: "TOP GUN: MAVERICK"},
    {name: "MISSION IMPOSSIBLE"},
    {name: "M.I.-2"},
    {name: "M.I.-3"},
    {name: "M.I.: GHOST PROTOCOL"},
    {name: "M.I.: ROGUE NATION"},
    {name: "M.I: FALLOUT"},
    {name: "JERRY MAGUIRE"},
    {name: "RISKY BUSINESS"},
    {name: "JACK REACHER"},
    {name: "WAR OF THE WORLDS"},
];

console.log(movies);

const searchInput = document.getElementById("searchBox");
const list = document.getElementById("list");

function setList(group){
    for (let movies of group){
        const item =document.createElement("li");
        const link = document.createElement("a");
        link.innerText = movie.name;
        link.href = '/url/to/profile';
    }
    if (group.length === 0){
        noResults();
    }
}

function clearList(){
    while(list.firstChild) {
        list.removeChild(list.firstElementChild);
    }
}

function noResults(){
    const item = document.createElement("li");
    const text = document.createTextNode("No results found");
    item.appendChild(text);
    list.appendChild(item);
}

searchInput.addEventListener("input", (event) => {
    let value = event.target.value;
    clearList();

    if (value && value.length > 0) {
        value = value.trim();
        setList(movies.filter(name => {
            return movies.name.includes(value);
        }));
    }
});
