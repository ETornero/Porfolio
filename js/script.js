document.addEventListener("DOMContentLoaded", function() {

    let body = document.body;
    let sideBar = document.getElementById('side-bar');
    let contentContainer = document.getElementById('content-container');
    let title = document.getElementById("title-text");
    let subtitle = document.getElementById("subtitle-text");
    let titleValue = "Eric Tornero Medina";
    let subtitleValue = 'Desarrollador de Videojuegos y Aplicaciones Web';

    if(sessionStorage.getItem('loaded') == null) {

        sessionStorage.setItem('loaded', true);

        title.textContent = '';
        subtitle.textContent = '';
        
        addCharacterWithDelay(0, 100, title, titleValue);
    
        setTimeout(() => {
    
            addCharacterWithDelay(0, 35, subtitle, subtitleValue);
            setTimeout(() => {
    
                body.classList.remove('dark')
                sideBar.classList.remove('closed');
                contentContainer.classList.remove('full');
        
            }, (35 * subtitleValue.length) + 1000);
    
        }, (75 * titleValue.length) + 1000);
    }
    else {
        body.classList.remove('dark')
        sideBar.classList.remove('closed');
        contentContainer.classList.remove('full');
    }


    let sideBarMenuItems = document.querySelectorAll('.main-menu-item');

    sideBarMenuItems.forEach(function(item) {

        item.addEventListener('click', function() {

            if(changeSectionReady == true) {

                changeSectionReady = false;

                sideBarMenuItems.forEach(function(element) {

                    element.classList.remove('selected');
                });

                item.classList.add('selected');

                var section = item.getAttribute('data-id');
                openSection(section);

                if(window.innerWidth < 1024) {
                    sideBar.classList.add('closed');
                }
            }
        });
    });

    document.getElementById('toggle-sidebar').addEventListener('click', () => {
        
        sideBar.classList.toggle('closed');
        contentContainer.classList.toggle('full');
    });
});

function addCharacterWithDelay(index, delay, target, value) {

    if (index < value.length) {
        
        target.innerHTML += value[index];

        setTimeout(function() { 

            addCharacterWithDelay(index + 1, delay, target, value);

        }, delay);
    } 
    else {
       
        target.innerHTML = value;
    }
}

let changeSectionReady = true;

function openSection(value) {

    closeAllSections(value);
    if(!document.getElementById(value+'-section').classList.contains('opened')) document.body.classList.add('dark');

    setTimeout(() => {
        
        let targetSection = document.getElementById(value+'-section');
        if(targetSection != null) targetSection.classList.add('opened');
        document.body.style.backgroundImage = 'url(../resources/'+value+'Background.jpg)';

        changeSectionReady = true;

        setTimeout(() => {
            document.body.classList.remove('dark');
        }, 300);

    }, 300);     
}

function closeAllSections(exeption) {

    var childrens = document.getElementById('content-container').children;

    for (var i = 0; i < childrens.length; i++) {
        if(childrens[i].id != exeption+'-section') childrens[i].classList.remove('opened');
    }
}

function playVideo(miniatureId) {

    var miniature = document.getElementById(miniatureId);

    var video = miniature.querySelector('video');

    miniature.classList.add('video-play');
    
    video.play();

    video.addEventListener('ended', function() {
        miniature.classList.remove('video-play');
    });
}