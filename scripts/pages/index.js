const tagline = document.getElementById("tagline");

const weightedLines = {
  "the programmer": 3,
  "the website": 3,
  "the movie": 3,
  undefined: 3,
  "The maker of things himself": 3,
  "@ github.io": 3,
  "the student": 2,
  "destroyer of worlds": 2,
  "(the new one)": 2,
  "(no relation)": 2,
  "not the senator": 2,
  "have no fear": 2,
  "the one who knocks": 2,
};

var debounce = false;

const lines = Object.entries(weightedLines).flatMap(([text, weight]) =>
  Array(weight).fill(text),
);

tagline.innerText = lines[Math.floor(Math.random() * lines.length)];

tagline.addEventListener("mouseenter", function () {
  if (debounce) {
    return;
  }

  debounce = true;

  const txt = tagline.innerText;

  while (true) {
    tagline.innerText = "";
    tagline.innerText = lines[Math.floor(Math.random() * lines.length)];

    if (txt != tagline.innerText) {
      break;
    }
  }

  debounce = false;
});

// Gonna add a secret text adventure eventually
console.log("Hi!");
