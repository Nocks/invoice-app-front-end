const pageBody = document.body;
const themeToggler = document.querySelector('.theme-toggler__img');


themeToggler.addEventListener('click', () => {

    pageBody.classList.toggle('dark-theme');
    
    if (pageBody.classList.contains("dark-theme")) {
        themeToggler.src="assets/icon-sun.svg";
    } else {
        themeToggler.src="assets/icon-moon.svg";
    }
    
});