const pages = [
  "blogs/icallitarithemeticprogramming.html",
  // "blogs/sample.html"
];

function randomBlog() {
  window.location.href = pages[Math.floor(Math.random() * pages.length)];
}