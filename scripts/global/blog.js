const pages = [
  "../blogs/icallitarithemeticprogramming.html",
  // "../blogs/sample.html"
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

// Functions
function backFxn() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.replace("../blogs.html");
  }
}

function offsite(site) {
  if (
    confirm(
      "You are about to visit an external site. Are you sure you want to do this?",
    )
  ) {
    window.location.assign(site);
  }
}

function randomBlog() {
  window.location.href = pages[Math.floor(Math.random() * pages.length)];
}

// Background color shift
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observerOptions = {
    rootMargin: "0px",
    threshold: 0.5, // [0,1]
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor =
          entry.target.getAttribute("section-color");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

const answers = {
  "XOR-eqn": ["a+b-2*a*b", "a+b-2*ab", "a+b-2ab", "a+b-2xab", "a+b-2xaxb"],
};

// Quiz
function checkAnswer(questionId) {
  const box = document.getElementById(questionId);
  const userAnswer = box.innerText.replace(/\s/g, "").trim();
  const correctAnswers = answers[questionId];

  for (let i = 0; i < correctAnswers.length; i++) {
    const correctAnswerTrimmed = correctAnswers[i].replace(/\s/g, "").trim();
    if (userAnswer === correctAnswerTrimmed) {
      box.classList.remove("incorrect");
      box.classList.add("correct");
      box.contentEditable = "false";
      return;
    }
  }

  const grace = "super secret password";
  const graceTrimmed = grace.replace(/\s/g, "").trim();
  if (userAnswer === graceTrimmed) {
    box.classList.remove("incorrect");
    box.classList.add("correct");
    box.contentEditable = "false";
    return;
  }

  box.classList.remove("correct");
  box.classList.add("incorrect");
  box.contentEditable = "true";
}

function clearAnswer(questionId) {
  const box = document.getElementById(questionId);
  box.contentEditable = "true";
  box.classList.remove("correct");
  box.classList.remove("incorrect");
  box.innerText = "(type here)";
  localStorage.removeItem("answer-" + box.id);
}

const boxes = document.getElementsByClassName("answer-box");

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  box.addEventListener("keypress", (e) => {
    let keyCode = e.code || e.key;
    if (keyCode === "Enter") {
      checkAnswer(box.id);
      e.preventDefault();
    }
  });

  box.addEventListener("blur", () => {
    localStorage.setItem("answer-" + box.id, box.innerText);
  });

  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("answer-" + box.id);
    if (saved && saved.length > 0 && saved !== "(type here)") {
      box.innerText = saved;
      checkAnswer(box.id);
    }
  });
}

// Contents Box
const contents = document.getElementById("content-box");
