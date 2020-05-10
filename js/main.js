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
    
    const observer = new IntersectionObserver((entries) => {
        let menuItem;
        let activeMenuItem;

        const clearActive = () => {
            let menuItens = document.querySelectorAll('a.active');
            menuItens.forEach(m => m.classList.remove('active'));
        }

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

    observer.observe(homeElement)
    observer.observe(aboutElement)
    observer.observe(skillsElement)
    observer.observe(contactElement)
});