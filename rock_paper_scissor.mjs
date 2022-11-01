import randomInteger from "random-int";
import PromptSync from "prompt-sync";

let choices=["rock","paper","scissors"];

// let userprompt="0 for rock, 1 for paper, 2 for scissors ";
let outcome="ready to play";

let computerchoice=randomInteger(0,2);
computerchoice=choices[computerchoice];

const prompt=PromptSync();
let userinput=prompt("0 for rock, 1 for paper, 2 for scissors ");
let userchoice=choices[userinput];

if(computerchoice === userchoice){
     outcome="Draw";
}
else if(computerchoice === "rock" && userchoice === "paper"){
    outcome="player wins";
}
else if(computerchoice === "rock" && userchoice === "scissors"){
    outcome="computer wins";
}
else if(computerchoice === "paper" && userchoice === "rock"){
    outcome="computer wins";
}
else if(computerchoice === "paper" && userchoice === "scissors"){
    outcome="player wins";
}
else if(computerchoice === "scissors" && userchoice === "rock"){
    outcome="player wins";
}
else if(computerchoice === "scissors" && userchoice === "paper"){
    outcome="computer wins";
}

console.log("computer chooses  " + computerchoice);
console.log("player chooses   " + userchoice);
console.log(outcome);


