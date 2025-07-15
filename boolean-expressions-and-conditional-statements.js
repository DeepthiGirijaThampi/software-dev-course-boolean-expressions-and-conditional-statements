/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

let hasSword = false; // New item added for customization
let hasCompass = false; // Another item added for customization

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
const choiceSword = readline.question("Do you have a sword? (yes/no) ").toLowerCase();
const choiceCompass = readline.question("Do you have a compass? (yes/no) ").toLowerCase();
if (choiceSword === "yes") {
  hasSword = true;
}
if(choiceCompass === "yes"){
  hasCompass = true;
}


if (choice === "mountains" && hasTorch) {
  if(hasCompass && hasSword) {
    console.log("You use both your compass and sword to navigate and defend yourself.");
  }else if(hasCompass) {
    console.log("You use your compass to find the safest route through the mountains.");
  }else if(hasSword) {
    console.log("You bravely fight off wild creatures with your sword.");
  }else{
    console.log("You safely navigate through the dark mountains using your torch.");
  }
  // console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
if(hasSword && hasCompass) {
    console.log("You confidently head to the village, sword in hand and compass guiding you.");
  }else if(hasSword) {
    console.log("You head to the village, ready to defend yourself with your sword.");
  }else if(hasCompass) {
    console.log("You find your way to the village using your compass.");
  }else{
    console.log("You find your way to the village using your map.");
  }
  // console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/