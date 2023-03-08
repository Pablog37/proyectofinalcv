var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido')
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarformulario(){
    console.log('Formulario enviado con éxito');

    var error = [];
    if (nombre.value == null || nombre.value == ''){
        error.push('Ingresa tu nombre');
    }
    if (apellido.value == null || apellido.value == ''){
        error.push('Ingresa tu apellido');
    }
    if (email.value == null || email.value == ''){
        error.push('Ingresa tu email');
    }

    error.innerHTML = error.join(',');
    return false;
}

if (nombre == "")
console.log('Completa tu nombre')
