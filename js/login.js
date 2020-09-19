function manejadorDeSubmit(evento) {
    evento.preventDefault();
    var email = document.getElementById('inputEmail').value;
    localStorage.setItem('cuenta', email);;
    sessionStorage.setItem("logueado", "true");
    console.log(document.getElementById('inputEmail').value);
    window.location.href = 'index.html';
    return true;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById('datos_usuario').addEventListener('submit', manejadorDeSubmit);
});