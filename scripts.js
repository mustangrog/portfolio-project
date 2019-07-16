// Create a greeter function that will use the persons name and display "Hello" and their name in <h1>

/*
1.Ask for first name and last name separately
2.If either are blank, continually re-ask for both names if user doesn't enter one.
3.Inject name as a <p> inside #greeting.
  */

let fname = prompt('What is your first name?');
let lname = prompt('What is your last name?');

while(!fname || !lname){
    fname = prompt('What is your first name?');
    lname = prompt('What is your last name?');
}

document.querySelector('h1').innerHTML = `<p>Hello, ${fname} ${lname}</p>`;


