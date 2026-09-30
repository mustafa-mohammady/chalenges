/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--

const title = "Neuefische Fullstack Development WeiterBildung";
const content =
  "This course will start on 14.09.2026 and end on 14.09.2027, you can take a free MacBook";
let likes = 2420;
const creator = "Admin";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--

console.log(title);
console.log(content);
console.log(likes);
console.log(creator);
console.log(isReported);

// --^-- write your code here --^--

// Increasing the number of likes
console.log("Updated Likes");
likes++;
console.log(likes);
