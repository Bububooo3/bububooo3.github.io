const tagline = document.getElementById("tagline");
const lines = [
  "A guy who makes things",
  "the programmer",
  "the website",
  "the movie",
  "undefined",
  "The maker of things",
];

tagline.innerText = lines.at(Math.floor(Math.random() * lines.length));
console.log("Hi!");
