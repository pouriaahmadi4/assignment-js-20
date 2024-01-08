// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.
// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.
//================answer=====================

// ✅ method 1> i eliminated "this" keyword and passed the clicked element to arrow function used for event for buttons
//we can assign the e.target value to a variable for later use

// ✅ method 2> i kept "this" keyword and turned arrow func for addEventListener To a regular function
// by doing this method ,i can refer this to the clicked elements which i used for h1 elements 

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}${g}${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    // const clickedBtn = e.target;
    console.log(e.target);
    console.dir(e.target);
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
  });
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', function() {
    console.log(this);
    console.dir(this);
    h1.style.backgroundColor = makeRandColor();
    h1.style.color = makeRandColor();
  });
}

