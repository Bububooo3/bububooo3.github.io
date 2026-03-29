const pages = [
  "blogs/icallitarithemeticprogramming.html",
  // "blogs/sample.html"
];

var n = document.getElementsByTagName("h1")[0];

if (n.id != "index") {
  n.addEventListener("mouseenter", (e) => {
    n.innerText = "Richard Scott?";
  });

  n.addEventListener("mouseleave", (e) => {
    n.innerText = "Richard Scott";
  });
} else {
  n.addEventListener("mouseenter", (e) => {
    n.innerText = "Richard Scott.";
  });

  n.addEventListener("mouseleave", (e) => {
    n.innerText = "Richard Scott";
  });
}

function randomBlog() {
  window.location.href = pages[Math.floor(Math.random() * pages.length)];
}

function backFxn() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.replace("index.html");
  }
}

function offsite(site) {
  if (confirm("You are about to visit an external site. Are you sure you want to do this?")) {
    window.location.assign(site);
  }
}