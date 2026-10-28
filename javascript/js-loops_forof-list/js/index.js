console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--

for (const languages of programmingLanguages) {
  console.log(languages);

  const li = document.createElement("li");
  li.textContent = languages;
  ol.append(li);
}

// --^-- write or modify code above this line --^--
