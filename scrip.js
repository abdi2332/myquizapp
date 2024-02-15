const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const nextButton = document.getElementById("next");
const text = document.getElementById("text");

let answer; // Declare answer variable outside the update function

nextButton.addEventListener('click', () => {
  updateIndex(1);
});

const questions = [
  {
    name: "question1",
    buttonAnswers: [
        {answer:"Abdulhadi",correct:true},
        {answer:"neima",correct:false},
        {answer:"etete",correct:false},
        {answer:"chaltu",correct:false}
    ],
    text: "What is my name"
  },
  {
    name: "question2",
    buttonAnswers: [
        {answer:"Abdulhadi",correct:true},
        {answer:"Go to store",correct:false},
        {answer:"etete",correct:false},
        {answer:"Fight dragon",correct:true}
    ],
    text: "where do you want "
  },
  {
    name: "question3",
    buttonAnswers: [
        {answer:"Abdulhadi",correct:true},
        {answer:"Go to blackmamba",correct:false},
        {answer:"chaltu",correct:false},
        {answer:"Fight dragon",correct:true}
    ],
    text: "where do you want to go"
  },
  {
    name: "question4",
    buttonAnswers: [
        {answer:"Abdulhadi",correct:true},
        {answer:"Go to store",correct:false},
        {answer:"go to italy",correct:false},
        {answer:"die",correct:true}
    ],
    text: "where do you want to go"
  },
];

let currentIndex = 0;

function update(question) {
  button1.innerText = question.buttonAnswers[0].answer;
  button2.innerText = question.buttonAnswers[1].answer;
  button3.innerText = question.buttonAnswers[2].answer;
  button4.innerText = question.buttonAnswers[3].answer;
  text.innerText = question.text;

  for(let i=0; i<4; i++){
    if(question.buttonAnswers[i].correct){
     answer = question.buttonAnswers[i].answer; // Assign correct answer to answer variable
    }
  }
}

function updateIndex(offset) {
  currentIndex = (currentIndex + offset + questions.length) % questions.length;
  update(questions[currentIndex]);
}

// Initial display
update(questions[currentIndex]);

document.querySelectorAll(".buttons").forEach(button => {
  button.addEventListener("click", checkAnswer);
});

function checkAnswer(e){
  const selectedAnswer=e.target.innerText; // Use innerText to get the text of the selected button
  if(selectedAnswer === answer){
    e.target.classList.add("style"); // Add style class to the selected button
  }
}
