let readLineSync = require('readline-sync');
let kuler = require('kuler');
let score = 0;
let userName = readLineSync.question("What is your name? ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`, "#dc2626"));
console.log(kuler("\nLet's play the quiz", "#b91c1c"));
//creating data set
const database={
  data:[
    {
      question:`let a={},b={}
      console.log(a==b)
      console.log(a===b)`,
      options:{
        a:"false,false",
        b:"true,false",
        c:"false,true",
        d:"true,true"
      },
    correctAnswer:"a"
    },
    {
      question:"object.assign(target,source)creates which type of copy?",
    options: {
      a: "Deep copy",
      b: "Shallow copy",
      c: "Nested copy",
      d: "Creates a new reference"
    },
    correctAnswer:"b"
  },
 {
    question: "Is method chaining possible with forEach?",
    options:{
      a: "Yes",
      b: "No"
    },
    correctAnswer: "b"
 }
   ]
}
//creating high score data set
const highScores ={
  data:[
    {
      name:"Rohit",
      score:1
    },
    {
      name:"Rahul",
      score:3
    },
    {
      name:"Rohan",
      score:2
    }
  ]
}

function playGame(userAnswer,correctAnswer){
  if(userAnswer===correctAnswer){
    console.log(kuler("You are right", "#16a34a"));
    score++;
  }else{
    console.log(kuler("You are wrong", "#dc2626"));
    console.log(kuler(`Correct answer is ${correctAnswer}`, "#1d4ed8"));
  }
}
function showQuestionAndOptions(database){
  for(let i=0;i<database.data.length;i++){
    console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer=readLineSync.question("Enter your answer(a/b/c/d)- ").toLowerCase();
    playGame(userAnswer,database.data[i].correctAnswer);
  }
}
function highScored(score){
  console.log(`\nYour score is ${score}`);
  console.log(`\nLeaderBoard:\n`);
  highScores.data.push({name:userName,score:score});
  let sortedData=highScores.data.sort((a,b)=>b.score-a.score);
  for(let i=0;i<sortedData.length;i++){
    console.log(`${i+1} - ${sortedData[i].name} : ${sortedData[i].score}`);
  }
}
showQuestionAndOptions(database);
console.log(`\nYour score is ${score}`);
highScored(score);
