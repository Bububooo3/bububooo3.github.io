const tagline = document.getElementById("tagline");

const weightedLines = {
  "A guy who makes things": 4,
  "the programmer": 4,
  "the website": 3,
  "the movie": 3,
  "undefined": 3,
  "The maker of things": 3,
  "@ .github.io": 3,
  "the student": 2,
  "destroyer of worlds": 2,
  "(the new one)": 2,
  "(no relation)": 1,
  "not the senator": 1,
};

const lines = Object.entries(weightedLines).flatMap(([text, weight]) =>
  Array(weight).fill(text),
);

tagline.innerText = lines[Math.floor(Math.random() * lines.length)];
console.log("Hi!");
