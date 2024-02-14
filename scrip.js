const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const button4=document.getElementById("button4")
const nextButton=document.getElementById("next")
const text = document.getElementById("text")


nextButton.onclick= nextQuestion

const questions=[
    {
        name:"question1",
        "button question": ["Abdulhadi", "neima", "etete","chaltu"],
         text: "What is my name"
    },
    {
        name:"question2",
        "button question": ["Go to store", "Go to cave", "Fight dragon","fight me"],
         text: "where o you want "
    },
    {
        name:"question3",
        "button question": ["Go to store", "Go to cave", "Fight dragon","fight her"],
         text: "where do  want to go"
    },
    {
        name:"question4",
        "button question": ["Go to store", "Go to cave", "Fight dragon", "fight anyone"],
         text: "where do you want to go"
    },
]

let currentindex=questions[0]


function update(questions){

    button1.innerText=questions["button question"][0]
    button2.innerText=questions["button question"][1]
    button3.innerText=questions["button question"][2]
    button4.innerText=questions["button question"][3]
    text.innerText=questions.text
}


function nextQuestion(){
   update(questions[1])
}


function updateIndex(offset) {
    currentindex = (currentindex + offset + data.length) % data.length;
    update(questions[currentindex])
}


nextButton.addEventListener('click', () => {
    updateIndex(1);
  });






























// const data = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   let currentIndex = 0;
//   const output = document.getElementById('output');

//   function displayData(index) {
//     const person = data[index];
//     output.innerHTML = `<p>Name: ${person.name}, Age: ${person.age}</p>`;
//   }

//   function updateIndex(offset) {
//     currentIndex = (currentIndex + offset + data.length) % data.length;
//     displayData(currentIndex);
//   }

//   document.getElementById('nextButton').addEventListener('click', () => {
//     updateIndex(1);
//   });

//   // Initial display
//   displayData(currentIndex);