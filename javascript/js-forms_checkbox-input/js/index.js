console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
let smsg = document.querySelector("[data-js='success_msg']");

function hideTosError() {
  tosError.setAttribute("hidden", "");
  smsg.removeAttribute("hidden");
}

function showTosError() {
  tosError.removeAttribute("hidden");
  smsg.setAttribute("hidden", "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) return;
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

  alert("Form submitted");
});

tosCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
