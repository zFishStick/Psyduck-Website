//TO DO convertire in JSON
var imgClass = ["psyduck-img-1", "psyduck-img-2"]
var paragraphClass = ["paragraph-1", "paragraph-2"]

var image = document.getElementById('psy-1');
var paragraph = document.getElementById('p1');
var prevArrow = document.getElementById('prev-arrow');
var nextArrow = document.getElementById('next-arrow');
var txt_img_container = document.getElementById('img-txt-container');

var page_1 = document.getElementById('page-1');

if (!sessionStorage.getItem('prev-arrow-hidden') && !sessionStorage.getItem('next-arrow-hidden')) {
    console.log("Primo if");
    nextArrow.classList.remove('disabled');
    prevArrow.classList.add('disabled');
}
else {
    if (sessionStorage.getItem('prev-arrow-hidden') === 'true') {
        console.log("1");
        prevArrow.classList.add('disabled');
    } else {
        console.log("2");
        prevArrow.classList.remove('disabled');
    }
    if (sessionStorage.getItem('next-arrow-hidden') === 'true') {
        console.log("3");
        nextArrow.classList.add('disabled');
    } else {
        console.log("4");
        nextArrow.classList.remove('disabled');
    }
}

console.log("La pagina esiste " + page_1.innerHTML);

function nextPage(id) {
    if (id === "to-desc-page-2") {
        const x = (50 / 100) * document.documentElement.scrollWidth;
        window.scrollTo({ left: x, behavior: "smooth" });

        prevArrow.classList.remove('disabled');
        nextArrow.classList.add('disabled');
        
        // Aggiorna lo stato delle frecce in sessionStorage
        sessionStorage.setItem('prev-arrow-hidden', prevArrow.classList.contains('disabled'));
        sessionStorage.setItem('next-arrow-hidden', nextArrow.classList.contains('disabled'));

        setTimeout(() => {
            sessionStorage.setItem('current-div', 'page-2');
        }, 1000);
    }
}

function previousPage(id) {
    if (id === "to-desc-page-1") {
        const x = (50 / 100) * document.documentElement.scrollWidth;
        window.scrollTo({ left: -x, behavior: "smooth" });

        prevArrow.classList.add('disabled');
        nextArrow.classList.remove('disabled');

        // Aggiorna lo stato delle frecce in sessionStorage
        sessionStorage.setItem('prev-arrow-hidden', prevArrow.classList.contains('disabled'));
        sessionStorage.setItem('next-arrow-hidden', nextArrow.classList.contains('disabled'));

        setTimeout(() => {
            sessionStorage.setItem('current-div', 'page-1');
        }, 1000);
    }
}


function saveSession() {
    sessionStorage.setItem('paragraph-text', paragraph.textContent);
    sessionStorage.setItem('paragraph-style', paragraph.className)
    saveActiveImage()

    sessionStorage.setItem('prev-arrow-hidden', prevArrow.style.display === "block");
    sessionStorage.setItem('next-arrow-hidden', nextArrow.style.display === "block");
}

function saveActiveImage() {
    sessionStorage.setItem('image-src', image.src);
    sessionStorage.setItem('image-class', image.className);
}

function getActiveImage() {
    image.src = sessionStorage.getItem('image-src');
    image.className = sessionStorage.getItem('image-class');
}

function support(params) {
    sessionStorage.clear()
}