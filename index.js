//  Brings in the functional data
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'This is the page Title!'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    }
};

function render(state){
    console.log('state came in as:', state);

    // We use function invocation that actually runs the function. and then 'return' the markup so that is is properly rendered in the browser
    document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;
}

render(states.home);
// The elements will not exist until page is rendered.  This is placed after the render item.
const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

navItems.forEach(function eventListenerAdder(navItem){
    navItem.addEventListener('click', function clickHandler(event){
        event.preventDefault();
        render(states[event.target.textContent.toLowerCase()]);
    });
});

// TODO: Refactor this loop structure
// Use the value of i as an index to access the nav item.
// Here I will run until 0-3, once it hits 3 the while statement stops.

// while(i < navItems.length){
//     // Add this callback function to each of the navItems.
//     navItems[i].addEventListener('click', function clickHandler(event){
//         event.preventDefault();
//         // 'target' will reveal what generated the event - that is, what was 'clicked'.
//         const clickedItem = event.target.textContent;
//         const clicked = clickedItem.toLowerCase();

//         // TODO: [textContent.toLowerCase()];


//         render(states[clicked]);
//     });
//     i++;
// }

// We want to re-render our page based on what the user clicks in our nav menu.
/*
1.Capture what was clicked in navigation - what is the text of the element that was clicked?
2.Access a piece of state based on said text.
3.Show the user the new view.
*/

