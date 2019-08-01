//  Brings in the functional data
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const store = {
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
    // We use function invocation that actually runs the function. and then 'return' the markup so that is is properly rendered in the browser
    document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;

    // Note: the 'navigation' functional component renders 'new' links each and every time/  Therefore on each re-render, we must grab those links and re-attach the event listeners to respond to 'clicks'.

    const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem){
        navItem.addEventListener('click', function clickHandler(event){
            event.preventDefault();

            render(store[event.target.textContent.toLowerCase()]);
        });
    });
}
render(store.home);
// The elements will not exist until page is rendered.  This is placed after the render item.


