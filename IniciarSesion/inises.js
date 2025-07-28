const form = document.querySelector(".form");
const email = document.querySelector("#inputEmail3");
const contra = document.querySelector("#inputPassword3");
const cb = document.querySelector("#gridCheck1");

function verCalendario(){
    window.location.href = '../calendario/calendario.html';
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cb.checked) {
        recordarSes()
    }
    verCalendario();
});

function recordarSes(){
    if(localStorage.getItem("email")===null && localStorage.getItem("pswd")===null){
      let em = email;
      let ps = contra;
      localStorage.setItem("email", `${em}`);
      localStorage.setItem("pswd", `${ps}`);
    } 
}
window.onload = function(){
    if(localStorage.getItem("email")!==null && localStorage.getItem("pswd")!==null){
        alert("Bienvenido!");
        verCalendario();
    }
}
