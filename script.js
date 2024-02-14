const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const nextButton = document.getElementById("next");
const text = document.getElementById("text");

nextButton.addEventListener('click', () => {
  updateIndex(1);
});

const questions = [
  {
    name: "question1",
    "button question": ["Abdulhadi", "neima", "etete", "chaltu"],
    text: "What is my name"
  },
  {
    name: "question2",
    "button question": ["Go to store", "Go to cave", "Fight dragon", "fight me"],
    text: "where do you want "
  },
  {
    name: "question3",
    "button question": ["Go to store", "Go to cave", "Fight dragon", "fight her"],
    text: "where do you want to go"
  },
  {
    name: "question4",
    "button question": ["Go to store", "Go to cave", "Fight dragon", "fight anyone"],
    text: "where do you want to go"
  },
];

let currentIndex = 0;

function update(question) {
  button1.innerText = question["button question"][0];
  button2.innerText = question["button question"][1];
  button3.innerText = question["button question"][2];
  button4.innerText = question["button question"][3];
  text.innerText = question.text;
}

function updateIndex(offset) {
  currentIndex = (currentIndex + offset + questions.length) % questions.length;
  update(questions[currentIndex]);
}

// Initial display
update(questions[currentIndex]);