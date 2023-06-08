// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.
// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following elements inside of it:
//   - another <h1> that says “I’m in a div”
//   - a <p> that says “ME TOO!”
//   - Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const container = document.querySelector('#container');

const par = document.createElement('p');
par.textContent = "Hey I\'m red!";
par.setAttribute('style', 'color: red;');
container.appendChild(par);

const h3 = document.createElement('h3');
h3.textContent = "I\'m a blue h3!";
h3.setAttribute('style', 'color: blue;');
container.appendChild(h3);

const customDiv = document.createElement('div');
customDiv.setAttribute('style', 'background-color:pink; border: solid black;');

const h1 = document.createElement('h1');
h1.textContent = "I\'m in a div";
customDiv.appendChild(h1);

par.textContent = "ME TOO!";
customDiv.appendChild(par);

container.appendChild(customDiv);