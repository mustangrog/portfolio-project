//  Brings in the functional data
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const store = {
    'home': {
        'title': 'This is the home page!',
        'page': `<!-- Sections are like subtopics directly related to the general topic of the page -->
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
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Project', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>About Me</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="../styles.css" />
          </head>

          <body>
            <nav>
              <ul>
                <li><a href="../">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="../Contact/">Contact</a></li>
                <li class="dropdown">
                  Portfolio
                  <ul>
                    <li><a href="#">Project 1</a></li>
                    <li><a href="#">Project 2</a></li>
                    <li><a href="#">Project 3</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <header>
              <h1>About Me</h1>
            </header>
            <main>
              <div>
                <img class="about-me-photo"
                  src="https://media.licdn.com/dms/image/C5103AQHTzdS36du3tA/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=yxJEr20pr9WGztScYT_OB0nl56vcMMrMNlvZI8pIFCQ"
                  alt="Profile Photo"
                />

                <p class="about-me-text">
                  Hello, I'm Roger! A little bit about me. I have been in the IT world
                  for over 15 years. My specialty is in hardware and networking. I hold
                  two CompTIA certifications, those being the A+ and Network+ certs. I'm
                  hoping to find an entry level position on the Software Development
                  side to use my existing skills and build upon those as my career
                  advances.
                </p>
              </div>
            </main>
            <footer>
                <ul>
                  <li>
                    <a href="https://github.com/mustangrog" target="_blank">
                      <span class="fab fa-github-square"> </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/roger.dungan.7" target="_blank">
                      <span class="fab fa-facebook"> </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/roger-dungan-43455a56"
                      target="_blank"
                    >
                      <span class="fab fa-linkedin"> </span>
                    </a>
                  </li>
                </ul>
              </footer>
          </body>
        </html>
        `
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Project', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Contact Me</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="../styles.css" />
          </head>
          <body>
            <nav>
              <ul>
                <li><a href="../">Home</a></li>
                <li><a href="../About/">About</a></li>
                <li><a href="#">Contact</a></li>
                <li class="dropdown">
                  Portfolio
                  <ul>
                    <li><a href="#">Project 1</a></li>
                    <li><a href="#">Project 2</a></li>
                    <li><a href="#">Project 3</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <header>
              <h1>Contact Me</h1>
            </header>
            <main>
              <!--
              The action attribute defines where on the server the form data should be sent
              The method attribute specifies the HTTP method (GET or POST)
            -->

              <form action="form-responses/new" method="POST" netlify>
                <!-- Developer's Note: 'placeholder' without using ` < label > ` is NOT RECOMMENDED for accessibility purposes. -->
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
                          type="radio"
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
                  <input type="checkbox" name="optin" value="trusting" checked />Subscribe
                  me to your newsletter!
                  <input type="checkbox" name="optout" value="skeptical" disabled />Cheeky
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
                    <input type="submit" />
                    <input type="reset" value="Reset">
                </div>
              </form>
            </main>
            <footer>
                <ul>
                  <li>
                    <a href="https://github.com/mustangrog" target="_blank">
                      <span class="fab fa-github-square"> </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/roger.dungan.7" target="_blank">
                      <span class="fab fa-facebook"> </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/roger-dungan-43455a56"
                      target="_blank"
                    >
                      <span class="fab fa-linkedin"> </span>
                    </a>
                  </li>
                </ul>
              </footer>
          </body>
        </html>
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


