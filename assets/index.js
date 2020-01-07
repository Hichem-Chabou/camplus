
/*navbar toggle on small screens*/ 
const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-active');
});

/*lazy load images*/
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold : 0,
    rootMargin : "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
