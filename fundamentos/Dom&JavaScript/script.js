function changeText() {
    let par = document.getElementsByTagName('p')[1];
    par.innerText = 'Não usando o gabarito'
}
changeText();

function changeBackToGreen() {
    let back = document.getElementsByClassName('main-content')[0];
    back.style.background = "rgb(76,164,109)";
}
changeBackToGreen();

function changeBackToWhite() {
    let back = document.getElementsByClassName('center-content')[0];
    back.style.background = 'white'
}
changeBackToWhite();

function fixTitle() {
    let title = document.getElementsByClassName('title')[0];
    title.innerText = 'Exercicio 5.1 - JavaScript'
}
fixTitle();
