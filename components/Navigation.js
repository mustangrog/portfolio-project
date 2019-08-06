function linkBuilder(links){
    return links.map(function linkLister(link){
        /**
         * An HTML data attribute provides additional information that can be used as a hook.
         * In this case, 'navigo' is something that navigo uses to bind the link 'text' to the Navigo router.
         */
        return `<li><a href="/${link.toLowerCase()}" data-navigo>${link}</a></li>`;
    }).join(' ');
}

export default function(state){
    return `
<nav>
      <ul>
        ${linkBuilder(state.links.primary)}
        <li class="dropdown">
          Portfolio
          <ul>
            ${linkBuilder(state.links.dropdown)}
          </ul>
        </li>
      </ul>
    </nav>
    `
    ;
}
