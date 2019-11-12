const userInput = window.prompt('What is your favorite animal?');
const userInputWhy = window.prompt('Why?');
const userOutputEl = document.getElementById('output');

console.log(userInput);
console.log(userOutputEl)

userOutputEl.innerText = `Your favorite animal is the ${userInput} because ${userInputWhy}.`;

