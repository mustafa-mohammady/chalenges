console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("article");
const postContent = document.createElement("p");
const postFooter = document.createElement("footer");
const postUsername = document.createElement("span");
const postButton = document.createElement("button");

post.classList.add("post");
postContent.classList.add("post__content");
postFooter.classList.add("post__footer");
postUsername.classList.add("post__username");
postButton.setAttribute("type", "button");
postButton.classList.add("post__button");
postButton.setAttribute("data-js", "like-button");

// adding content to elelements
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postUsername.textContent = "@new user";
postButton.textContent = "♥ Like";

document.body.append(post);
post.append(postContent);
post.append(postFooter);
postFooter.append(postUsername);
postFooter.append(postButton);
