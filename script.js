document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleIcon = document.querySelector('.theme-toggle i');
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
        body.className = storedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.className = 'dark-theme';
    }
    
    updateIcon();
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.className);
    updateIcon();
}

function updateIcon() {
    const body = document.body;
    const toggleIcon = document.querySelector('.theme-toggle i');
    if (body.classList.contains('dark-theme')) {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    } else {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }
}