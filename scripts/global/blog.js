const pages = [
  "../blogs/icallitarithemeticprogramming.html",
  // "../blogs/sample.html"
];

function randomBlog() {
  window.location.href = pages[Math.floor(Math.random() * pages.length)];
}

function backFxn() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.replace("../blogs.html");
  }
}
