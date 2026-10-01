console.clear();

/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year).
2. The estimated number of remaining days to reach a 10-year milestone.
3. The percentage of the milestone you've already completed.
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const yearsPracticing = Number(process.argv[2]); // This takes the `<years>` entered in the command `node index.js <years>`.
console.log("You've been practicing for: " + yearsPracticing + " years");

const total_year_days = 365;
const milestone_years = 10;

const total_days = yearsPracticing * total_year_days;
console.log("Total Days practicing: " + total_days);

const remainingDays = milestone_years * total_year_days - total_days;
console.log("Days remaining to reach 10 years: " + remainingDays + " days");

const percentage = (yearsPracticing / milestone_years) * 100;
console.log("Milstone Completed: " + percentage + "%");

const totalHours = total_days * 1;
const fullDaysSpent = totalHours / 24;
console.log("Total time spent practicing: " + fullDaysSpent + " full days");
