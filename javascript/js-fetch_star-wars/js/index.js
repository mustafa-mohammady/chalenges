import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

const nextButton = document.querySelector("[data-js='next-button']");
const previousButton = document.querySelector("[data-js='previus-button']");

let next_link = null;
let prev_link = null;

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

let url = "https://swapi.py4e.com/api/people/";

fetchDataAndRender(url);

// --v-- your code below this line --v--

async function fetchDataAndRender(url) {
  const response = await fetch(url);
  const data = await response.json();
  next_link = data.next;
  prev_link = data.previous;

  document.querySelector("#root").innerHTML = "";

  data.results.forEach((element) => {
    renderElement(Card(element));
  });
}

nextButton.addEventListener("click", (e) => {
  if (!next_link) return;
  e.preventDefault();
  fetchDataAndRender(next_link);
});

previousButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!prev_link) return;
  fetchDataAndRender(prev_link);
});
