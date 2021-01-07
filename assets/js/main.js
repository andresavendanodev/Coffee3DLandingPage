// Menu show and Hidden
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

//Show
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
});

//Hidden
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
});

// Mousemove Home IMG
document.addEventListener('mousemove', move);

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}