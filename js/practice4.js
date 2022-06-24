"use strict"
const searchBar = document.getElementsByName('search');



const search = [
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

console.log(search);

search.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});