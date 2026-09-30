const colorPicker = document.querySelector("[data-js='input-color']");
const radiusButton = document.querySelector("[data-js='input-radius']");
const rotateButton = document.querySelector("[data-js='input-rotation']");

const box = document.querySelector("[data-js='box']");

colorPicker.addEventListener("change", () => {
  box.style.backgroundColor = `hsl(${colorPicker.value},30%,80%)`;
});

radiusButton.addEventListener("change", () => {
  box.style.borderRadius = `${radiusButton.value}px`;
});

rotateButton.addEventListener("change", (e) => {
  box.style.transform = `rotate(${e.target.value}deg)`;
});
