// declarar un objeto
var persona = {
    nombres : "Esteban Ariel",
    apellidos : "Quiroga Benitez",
    edad : "17",
    es_profesor : false,
    estatura : "1.73"
};

var datos_persona = document.getElementById("datos_persona");
function actualizarDatosPersona(){
    datos_persona.innerHTML = `
        Yo me llamo ${persona.nombres} ${persona.apellidos}
        y mi edad es ${persona.edad} 
        y soy un ${persona.es_profesor ? "profesor" : "alumno"}.
    `;

    console.log(persona)
}

actualizarDatosPersona();

// obtener referencias a los elementos del DOM
var nombres = document.getElementById("nombres");
var apellidos = document.getElementById("apellidos");
var edad = document.getElementById("edad");
var puesto = document.getElementById("puesto");
var estatura = document.getElementById("estatura");
var mayorDeEdad = document.getElementById("mayorDeEdad");

// Llenar formulario con los datos originales
nombres.value = persona.nombres;
apellidos.value = persona.apellidos;
edad.value = persona.edad;
estatura.value = persona.estatura;
puesto.value = persona.es_profesor ? "Profesor" : "Estudiante";
mayorDeEdad.checked = persona.edad >= 18 ? true : false;

var btn_actualizar = document.getElementById("btn_actualizar");

// evento boton actualizar 
btn_actualizar.addEventListener('click', function(event){
    persona.nombres = nombres.value;
    persona.apellidos = apellidos.value;
    persona.edad = edad.value;
    persona.estatura = estatura.value;
    persona.es_profesor = puesto.value == "Profesor" ? true : false;

    mayorDeEdad.checked = persona.edad >= 18 ? true : false;
    actualizarDatosPersona();
});