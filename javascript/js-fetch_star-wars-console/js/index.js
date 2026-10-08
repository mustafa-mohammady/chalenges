console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const result = await response.json();
  const data = result.results;

  data.forEach((v) => {
    console.log(v.name);
    const R2 = data.find((element) => {
      return element.name == "R2-D2";
    });
    console.log(R2.eye_color);
  });
}

fetchData();
