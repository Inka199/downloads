const nav = document.querySelector('.header__nav')
const navToggle = document.querySelector('.navToggle')
navToggle.addEventListener('click', function() {
    nav.classList.toggle('header__show')
})

let header = document.querySelector ('.header')

window.addEventListener('scroll', function () {
    let showInnaScreen = scrollY;

    if (showInnaScreen > 850) {
        header.classList.add ('header--fixed')
    } else {
        header.classList.remove ('header--fixed')
    }

    console.log (showInnaScreen);
})

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});