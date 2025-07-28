const form = document.querySelector(".form");

function isIniSes(){
    window.location.href = '../IniciarSesion/inises.html';
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    isIniSes();
});