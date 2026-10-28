console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollY = window.scrollY;
  const wInnerHeight = window.innerHeight;
  const totalHeight = document.body.clientHeight;
  return (scrollY / (totalHeight - wInnerHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const scrollPosition = calculateScrollPercentage();
  progressBar.style.width = scrollPosition + "%";
});
