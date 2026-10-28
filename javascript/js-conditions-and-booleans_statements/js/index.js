console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

// Part 2: Even / Odd
const number = 6;

// Part 3: Hotdogs
const numberOfHotdogs = 42;

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  userName == "Archibald" ? "Hello " + userName + "!" : "User not found";

console.log(greeting);

if (
  SUPER_SECRET_PASSWORD == receivedPassword ||
  SUPER_SECRET_PASSWORD == "h4x0r1337"
) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

if (number % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

console.log(statement);
