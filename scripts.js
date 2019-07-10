// Create a greeter function that will use the persons name and display "Hello" and their name in <h1>

/*
  3. Construct or Concatenate a string with 'hello' and the value stored in memory for their name.
  4. Select the <h1> tag on the page.
  5. Replace the value of the <h1> tag.
*/

const name = prompt('What is your name?');

document.querySelector('h1').textContent = `Hello, ${name}`;
