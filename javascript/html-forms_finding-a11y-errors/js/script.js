const form = document.querySelector("[data-js='infoForm']");

const nameInput = form.querySelector("#nameInput");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = event.target;
  let name = formData.name.value;
  let age = formData.age.value;
  let color = formData.color.value;
  let comment = formData.comment.value;
  console.log(name);
  console.log(age);
  console.log(color);
  console.log(comment);

  //   data will show pretty in object
  const formObj = {
    name,
    age,
    color,
    comment,
  };
  console.log(formObj);

  console.log("------------------------");

  const newFormData = new FormData(formData);
  console.log(newFormData);
  console.log("-------------------");
  const sortedData = Object.fromEntries(newFormData);
  console.log(sortedData);
});

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});
