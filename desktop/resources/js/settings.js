function changeTheme(theme) {
    document.body.className = '';
    switch (theme) {
        case 0:
            break;
        case 1:
            document.body.classList.add('dark-theme');
            break;
        case 2:
            document.body.classList.add('pink-theme');
    }
    localStorage.setItem('theme', theme);
}

function changeBackground(background) {
    document.body.style.backgroundImage = 'url("./resources/img/background'+(background+1)+'.jpg")';
    localStorage.setItem('background', background);
}