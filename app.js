console.log("hola")
const contraseña = document.querySelector(".contraseña")
const icono = document.querySelector("#iconoContraseña");

icono.addEventListener('click', e => {
    if(contraseña.type === "password"){
        contraseña.type = "text";
        icono.classList.remove("fa-solid fa-eye");
        icono.classList.add("fa-solid fa-eye-slash");
    }
    if(contraseña.type === "text"){
        contraseña.type = "password";
        icono.classList.remove("fa-solid fa-eye-slash");
        icono.classList.add("fa-solid fa-eye");
    }
})