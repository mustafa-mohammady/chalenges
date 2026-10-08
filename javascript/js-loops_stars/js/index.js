console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (i <= filledStars) {
      img.src = `assets/star-filled.svg`;
    } else {
      img.src = `assets/star-empty.svg`;
    }
    img.addEventListener("click", (e) => {
      renderStars(i);
    });
    starContainer.append(img);
  }

  // --v-- write or modify code below this line --v--

  // --^-- write or modify code above this line --^--
}

renderStars(2);
