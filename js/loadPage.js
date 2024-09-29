const path = "/pages/";
const index = document.getElementById('indexHome');

$(document).ready(function () {
    let currentPage = sessionStorage.getItem('current-page');
    let currentDiv = sessionStorage.getItem('current-div');

    if (currentPage) {
        console.log("Esiste una pagina in memoria: " + currentPage);
        $('#indexHome').addClass('no-current-test');
        $(currentPage).load(path + currentPage.split('#')[1] + ".html", function () {
            if (currentDiv) {
                // Mostra solo il div specifico salvato
                $('#' + currentDiv).show();
            } else {
                // Se non c'è un div specifico, mostra la pagina 1 di default
                $('#page-1').show();
                $('#page-2').hide();
            }
        });
    } else {
        $('#indexHome').removeClass();
        console.log("Pagina corrente non trovata");
    }

});

function loadPage(relPath) {
    relPath = relPath.split('#')[1];
    let currentPage = "#" + relPath;
    let storedPage = sessionStorage.getItem('current-page');

    // Non ricaricare se la pagina è già corrente
    if (storedPage !== currentPage) {
        console.log("Caricando pagina: " + currentPage);
        $('#indexHome')[0].className = 'no-current';
        //const x = (50 / 100) * document.documentElement.scrollWidth;
        const y = (50 / 100) * $('#indexHome').height()

        $('html, body').animate({
            scrollTop: y * 2
        }, 1000);

        $(currentPage).load(path + relPath + ".html", function () {
            $(currentPage).addClass("fadeIn");
        });

        sessionStorage.setItem('no-current-page', index.id);
        sessionStorage.setItem('current-page', currentPage);
    } else {
        console.log("La pagina è già corrente: " + storedPage);
    }
}

function returnToIndex() {

    let storedPage = sessionStorage.getItem('current-page');
    $('#indexHome')[0].className = 'current';

    const y = (50 / 100) * $('#indexHome').height()
    $('html, body').animate({
        scrollTop: -y * 2
    }, 2000);

    setTimeout(() => {
        $(storedPage).empty();
    }, 2000)

    sessionStorage.removeItem('current-page');
    sessionStorage.removeItem('no-current-page');



}
