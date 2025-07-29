const form = document.querySelector("#form");

function iraIS(){
    window.location.href = '../IniciarSesion/inises.html';
}
function validarEmail(){
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarEmail();
    iraIS();
});

