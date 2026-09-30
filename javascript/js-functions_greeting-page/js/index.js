/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(time) {
  if (!time) return console.log("Please type parameter of the time ");
  if (time >= 6 && time <= 12) {
    return "Good Morning";
  } else if (time >= 12 && time <= 18) {
    return "Good Afternoon";
  } else if (time >= 19 && time <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor(day) {
  // if there is no parameter value it will stop the function
  if (!day) return;

  const weekday = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };
  if (day == weekday.Monday) {
    return "darkgray";
  } else if (day == weekday.Tuesday || day == weekday.Friday) {
    return "lightblue";
  } else if (day == weekday.Saturday || day == weekday.Friday) {
    return "hotpink";
  }
}
// get the current time
const current_time = new Date().getHours();

display.textContent = getGreeting(current_time);

// get the current day
const current_day = new Date().getDay();
console.log("Today is " + current_day);

document.body.style.backgroundColor = getDayColor(current_day);
