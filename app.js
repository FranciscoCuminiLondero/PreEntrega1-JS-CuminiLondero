// Función para validar que el input no esté vacío o sea null
function validarInput(input) {
    while (!input) {
        input = prompt(`El valor ingresado no es válido, por favor ingrese un valor válido:`);
    }
    return input;
}

let nombreUsuario = prompt("¡Bienvenido al boliche! ¿Cuál es tu nombre?", "Francisco Cumini");
nombreUsuario = validarInput(nombreUsuario);

let edadUsuario = Number(prompt("¿Cuál es tu edad?", "22"));
edadUsuario = validarInput(edadUsuario);

let tragosTomados = 0;
// Verificamos si la persona es mayor de edad
if (edadUsuario >= 18) {
    alert(`¡Bienvenido ${nombreUsuario} (${edadUsuario} años), que disfrutes de la noche!`);
    // Iteramos hasta que la persona tome 5 tragos o diga que no quiere tomar más
    while (tragosTomados < 5) {
        let quiereTomar = confirm("¿Querés tomar un trago?");
        if (quiereTomar) {
            tragosTomados++;
            alert(`¡Salud! Tomaste ${tragosTomados} tragos.`);
        }
        else {
            alert("¡Nos vemos! ¡Esperamos que vuelvas pronto!");
            break;
        }
        // Si la persona ha tomado 5 tragos, mostramos un mensaje indicando que ha alcanzado el límite máximo
        if (tragosTomados === 5) {
            alert("¡Tomaste demasiado, te vamos a pedir un taxi! ¡Gracias por venir!");
        }
    }
} else {
    alert(`Perdón con ${edadUsuario} años no podes entrar, sos menor de edad.`);
    alert(`¡Te esperamos cuando cumplas los 18 años!`)
}



