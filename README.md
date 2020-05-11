# CA3 - Inractve Portfolio
Created by Tabita Lopes Paradizzo
Student ID - 19551

# Project Summary
    For this project I built a responsive portfolio website using HTML, CSS and JavaScript. In the portfolio I talk a few things about me and my skills.
    In front-end classes, I have learnt that when creating website we have to be clear about what you are showing, match right the colours and make it easy for the user.
    Below I'm goint to show my development process and the issues I faced and solved.

## Development Process

### Initial Ideas
    * All pages in one, making easy for the user.
    * Always have the menu on the side.
    * Keep the photo on the page all the time.
    * Clean and easy to understand.
    * Have some interactive design to identify the levels of skills.
    * Have icons identifing the contacts links.
    * Colours: black, white and salmon.
    
### Coding
    * I started coding the HTML part, connecting the font and fontawsome.
    * I positioned the photo on the left side.
    * With fontawsome I set up a full star and empty star to design the level of skills.
    * To make it interactive I used css using transition an transfom, where make it grow and change colour.
    * With fontawsome I set up the contacts icons that shows a location, an email and the linkedIn icon.
    * To make it better for the user I link the linkedIn, google maps and my email, and it's just click on them and you will be redirected to the page.
    * To make it responsive I used @media.
    * To make the menu interactive I used css and JavaScript.
    * In my JS coding I used the intersectionObsever.
    * I created the observer and the options I needed to select, then I asked te observer to start observing the target, and when the inersection happens it callbcak the function.
    * The condition above makes the menu change colour while scrowlling the screen. One item at time.

### Final Touch
    * At the end I reviewd my website and made comments where I have missed.
    * Ajusted some paddings and small details.

### Issues faced/solved
    * The issue I had was in the codition in JS. I was trying to make the colour appear one item at time.
    * I was selecting two and sometimes three. I had to add the "entry.target.dataset.menu" and ajust the rootMargin.
