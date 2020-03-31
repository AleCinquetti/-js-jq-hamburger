// OGGETTO ESERCIZIO
// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

// funzione comparsa hamburger menù
$(".fa-bars").click(
    function() {
        $(".hamburger-menu").fadeIn(1250);
    }
)

// funzione comparsa hamburger menù
$(".close").click(
    function() {
        $(".hamburger-menu").fadeOut(1250);
    }
)
