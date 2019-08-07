//  Brings in the functional data
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Import the Navigo constructor function from the node module called "navigo".
import Navigo from 'navigo';

/**
 * location.origin provides the 'base' URL for Navigo to get started.
 * new creates a new instance of Navigo from it's constructor function.
 */
const router = new Navigo(location.origin);


const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'This is the home page!',
        'page': `
        <!-- Sections are like subtopics directly related to the general topic of the page -->
    <section>
        <h2>This Is Section 1</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            aliquid exercitationem vitae in, eius odit, itaque eligendi, hic
            facere ad veniam necessitatibus dolore nemo natus modi? Voluptatibus,
            sit similique!
        </p>
        <!--CTA=Call To Action-->
        <a href="#" class="cta-btn">Read More!</a>
    </section>

    <section>
        <h2>This Is Section 2</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            aliquid exercitationem vitae in, eius odit, itaque eligendi, hic
            facere ad veniam necessitatibus dolore nemo natus modi? Voluptatibus,
            sit similique!
        </p>
        <a href="#" class="cta-btn">Read More!</a>
    </section>

    <section>
        <h2>This Is Section 3</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam
            aliquid exercitationem vitae in, eius odit, itaque eligendi, hic
            facere ad veniam necessitatibus dolore nemo natus modi? Voluptatibus,
            sit similique!
        </p>
        <a href="#" class="cta-btn">Read More!</a>
        </section>`
    },
    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': `
        <p class="about-me-text">
        Hello, I'm Roger! A little bit about me. I have been in the IT world
        for over 15 years. My specialty is in hardware and networking. I hold
        two CompTIA certifications, those being the A+ and Network+ certs. I'm
        hoping to find an entry level position on the Software Development
        side to use my existing skills and build upon those as my career
        advances.
        </p>
        `
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': `
            <form action="form-responses/new" method="POST" netlify>
        <input
            type="text"
            name="firstname"
            placeholder="First Name"
            autofocus
            required
        />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input
            type="email"
            name="userEmail"
            placeholder="your.email@example.com"
        />

        <p>What's this message about?</p>

        <div class="input-group">
            <span>
                <!-- Generally the 'for' attribute on <label> should mach an 'ID' of an <input>.
                radio button groups need to have the same 'name' attribute value so the server
                can properly interpret the results. -->
                <input
                    ype="radio"
                    name="subject"
                    value="professional"
                    id="pro"
                    checked
                />
                <label for="pro">I'd like to hire you!</label>
            </span>

            <span>
                <input type="radio" name="subject" value="personal" id="personal" />
                <label for="personal">Personal message</label>
            </span>

            <span>
                <input type="radio" name="subject" value="other" />
                <label>Don't know/something else</label>
            </span>
        </div>

        <div class="input-group">
            <input
                type="checkbox"
                name="optin"
                value="trusting"
                checked
            />Subscribe me to your newsletter!
            <input
                type="checkbox"
                name="optout"
                value="skeptical"
                disabled
            />Cheeky
                checkbox...
        </div>

        <div class="input-group input-group--flex">
            <label for="marketing">How did you hear about me?</label>
            <select name="marketing" id=marketing">
                <optgroup label="Online">
                    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                        <option value="github">Online Portfolio (GitHub)</option>
                        <option value="search">Search Engine</option>
                        <option value="email">Email</option>
                </optgroup>
                <optgroup label="In-Person">
                        <option value="networking">We met at a networking event</option>
                        <option value="referral">Personal referral</option>
                        <option value="random">We met somewhere else</option>
                </optgroup>
                <option value="other">Other</option>
            </select>
        </div>

        <div class="input-group--flex">
            <textarea name="user_message" rows="8" cols="40"></textarea>
            <div>
                <input type="submit" />
                <input type="reset" value="Reset" />
            </div>
        </div>
    </form>
        `
    },
    'blog': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Blog Page',

        // TODO: 'page' will be updated after we fetch the data for the blog post.
        'page': `
        <p>Loading blog posts!</p>
        `
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

    // updatePageLinks() works in conjunction with 'data-navigo' and the <a href>s found in the Navigation functional component.
    router.updatePageLinks();  // Replaces our custom click event listeners with the recursive render.
}

render(store.home);
// The elements will not exist until page is rendered.  This is placed after the render item.

router.on(':view', (params) => {
    render(store[params.view]);
}).resolve();
