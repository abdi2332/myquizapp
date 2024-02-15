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
        {answer:"neged bank",correct:false},
        {answer:"Burj Khalifa",correct:true},
        {answer:"Shanghai Tower",correct:false},
        {answer:"2	Merdeka 118",correct:false}
    ],
    text: "tallest building on earth "
  },
  {
    name: "question3",
    buttonAnswers: [
        {answer:"56",correct:false},
        {answer:"67",correct:false},
        {answer:"65",correct:false},
        {answer:"49",correct:true}
    ],
    text: "average lifespan of a man"
  },
  {
    name: "question4",
    buttonAnswers: [
        {answer:"isa",correct:false},
        {answer:"mark zukerberg",correct:false},
        {answer:"messi",correct:false},
        {answer:"muhammed",correct:true}
    ],
    text: "the best man in the world"
  },
];

let currentIndex = 0;

function update(question) {
  button1.innerText = question.buttonAnswers[0].answer;
  button1.setAttribute("data-correct", question.buttonAnswers[0].correct)
  button2.innerText = question.buttonAnswers[1].answer;
  button2.setAttribute("data-correct", question.buttonAnswers[1].correct);
  button3.innerText = question.buttonAnswers[2].answer;
  button3.setAttribute("data-correct", question.buttonAnswers[2].correct);
  button4.innerText = question.buttonAnswers[3].answer;
  button4.setAttribute("data-correct", question.buttonAnswers[3].correct);
  text.innerText = question.text;
}

function updateIndex(offset) {
  currentIndex = (currentIndex + offset + questions.length) % questions.length;
  update(questions[currentIndex]);
}
// Initial display
update(questions[currentIndex]);


document.querySelectorAll(".buttons").forEach((button)=>{
button.addEventListener("click",checkAnswer)
})

function checkAnswer(e){
  const selectedAnswer=e.target
  const isCorrect=selectedAnswer.getAttribute('data-correct')==="true";
  if(isCorrect){
    selectedAnswer.classList.add("correct")

     setTimeout(() => {
      selectedAnswer.classList.remove("correct");
    }, 3000);
  }
  else{
    selectedAnswer.classList.add("incorrect")

     setTimeout(() => {
      selectedAnswer.classList.remove("incorrect");

    }, 3000);
  }
  }


