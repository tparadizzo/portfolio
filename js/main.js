// select the option target
 window.addEventListener("load", (event) => {
    const homeElement = document.querySelector("#home")
    const aboutElement = document.querySelector("#about")
    const skillsElement = document.querySelector("#skills")
    const contactElement = document.querySelector("#contact")

    const options = {
        root: null,
        rootMargin: "-200px 0px -200px 0px",
        threshold: 0
    }
    
    // Build a new instance of the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        let menuItem;
        let activeMenuItem;

        // When one item is identified, clear the the prevos one, making it back to the colour black.
        const clearActive = () => {
            let menuItens = document.querySelectorAll('a.active');
            menuItens.forEach(m => m.classList.remove('active'));
        }
        // Make one at time colorful
        entries.forEach((entry) => {
            menuItem = document.querySelector(`#${entry.target.dataset.menu}`);
            if (entry.isIntersecting && !activeMenuItem) {
                clearActive();
                menuItem.classList.add('active');
                activeMenuItem = menuItem;
            }
            // menuItem.classList[(entry.isIntersecting) ? 'add' : 'remove']('active');
        })
    }, options);

    // Start observing
    observer.observe(homeElement)
    observer.observe(aboutElement)
    observer.observe(skillsElement)
    observer.observe(contactElement)
});