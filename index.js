var choices = document.getElementsByClassName("choices");
var userChoice = ""
var compChoices = ["Rock", "Paper", "Scissors"]
var compChoice = Math.random();
var show = document.createElement("H1")


if (compChoice < 0.34) {
  compChoice = "Rock";
  show.innerHTML = compChoice
  document.body.appendChild(show)
}
else if (compChoice <= 0.67 ) {
  compChoice = "Paper";
  show.innerHTML = compChoice
  document.body.appendChild(show)
}
else {
  compChoice = "Scissors";
  show.innerHTML = compChoice
  document.body.appendChild(show)
}

// function reset()

for(var i =0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    console.log("You Chose: " + userChoice);
    console.log("Computer Chose: " + compChoice);
  });
};

// console.log(userChoice)
// console.log(compChoice)