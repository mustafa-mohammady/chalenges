console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target;
  const dataObj = {
    firstName: formElement.firstName.value,
    lastName: formElement.lastName.value,
    age: formElement.age.value,
    email: formElement.email.value,
    complaint: formElement.complaint.value,
    details: formElement.details.value,
    badness: formElement.badness.value,
    orderDate: formElement.orderDate.value,
    tos: formElement.tos.checked,
  };

  console.log(dataObj);

  console.log("----------------------^-----------------");
  //   this will change the form data to and object
  const for_new_object = new FormData(formElement);
  const form_data_obj = Object.fromEntries(for_new_object);
  console.log(form_data_obj);

  form.reset();
  formElement.elements.firstName.focus();
  badnessCal(dataObj.age, dataObj.badness, dataObj.firstName);
});

const badnessCal = (age, badness, firstName) => {
  let result = Number(age) + Number(badness);
  console.log(`The age-badness-sum of "${firstName}" is "${result}"`);
};
