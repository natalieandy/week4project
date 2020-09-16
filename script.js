var questions = [
    {
          prompt: "Space Jam by Quad City DJs the greatest sports anthem of all time.\n(a) True\n(b) False\n",
          answer: "a"
    },
    {
         prompt: "Fkj & Masego's hit song Tadow drew inspiration from YungFlexMaster Rauzi \n(a) True\n(b) False\n",
         answer: "b"
    },
    {
         prompt: "Terra likes EDM and Lofi?\n(a) True\n(b) False\n",
         answer: "a"
    }
];
var score = 0;


for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);