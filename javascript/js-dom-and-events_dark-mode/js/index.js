console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const dark_mode_btn = bodyElement.querySelector("[data-js='dark-mode-button']");
const light_mode_btn = bodyElement.querySelector(
  "[data-js='light-mode-button']",
);
const toggle_btn = bodyElement.querySelector("[data-js='toggle-button']");
dark_mode_btn.addEventListener("click", () =>
  bodyElement.classList.add("dark"),
);
light_mode_btn.addEventListener("click", () =>
  bodyElement.classList.remove("dark"),
);

toggle_btn.addEventListener("click", () =>
  bodyElement.classList.toggle("dark"),
);
