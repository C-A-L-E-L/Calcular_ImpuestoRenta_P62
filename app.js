// Ejercicio #1
document.write("<h1>Hola Mundo</h1>");

// Ejercicio #2
var nombre="Carlos ";
var apellido="Salcan";
var cedula="1714032719";
var ingresos=23678.43;
var gastos=10000;
var declarado=true;

const periodo=2021;

// Ejercicio #3
var datosCompletos=nombre + apellido;
console.log("Nombre y Apellido: "+ datosCompletos)

// Ejercicio #4
var baseImponible = ingresos-gastos;
console.log("Ingresos menos gastos: " + baseImponible)

// Ejercicio #5
"Andrea"
'Andrea'
10000
-34.6
true
false
['leer', 'nadar', 'escribir']
var persona = {
    "nombre": "Luis",
    "edad": 34,
    "ciudad":"Quito"
}

// Ejercicio #6
var ingresos=25000;
var gastos=6000;
var baseImponible=ingresos-gastos;
var impuesto=0;
var impuestoFraccionBasica=0;
var porcentajeExcedente=0;
var excedente=0;

if (baseImponible>17854 && baseImponible<=21442) {
    impuestoFraccionBasica=511;
    excedente=baseImponible-17854;
    porcentajeExcedente=excedente*0.12;
}

impuesto=impuestoFraccionBasica+porcentajeExcedente;
console.log('Impuesto a la Renta por cancelar: '+impuesto)
document.write("<h3>Su impuesto a la renta es </h3>"+impuesto)

// Ejercicio #7
let impuestoFraccionBasicas=[0,0,154,511,941,4156,8440,13798,22366];
console.log(impuestoFraccionBasicas)

// Ejercicio #8
for(let i=0; i<impuestoFraccionBasicas.length;i++) {
    console.log(impuestoFraccionBasicas[i])
}

// Ejercicio #9
function saludo() {
    console.log("Hola World <3")
}
saludo();

// Ejercicio #10
function saludos(persona) {
    console.log("Hola "+ persona)
}
saludos('Ana');

// Ejercicio #11 Calculadora de Impuesto a la Renta


IR.addEventListener("submit", function(e) {
    // Evitar valores vacios
    e.preventDefault();     

    var input = document.getElementById("sueldoM").value;
    obtenerSalario(input)
});

GD.addEventListener("submit", function(e) {
    // Evitar valores vacios
    e.preventDefault();     

    var vivienda = document.getElementById("vivienda").value;
    var educacion = document.getElementById("educacion").value;
    var alimentacion = document.getElementById("alimentacion").value;
    var vestimenta = document.getElementById("vestimenta").value;
    var turismoI = document.getElementById("turismoI").value;
    var salud = document.getElementById("salud").value;
    
    obtenerGastosDeducibles(vivienda,educacion,alimentacion,vestimenta,turismoI,salud)
});

FIR.addEventListener("submit", function(e) {
    // Evitar valores vacios
    e.preventDefault();     

    calcularImpuesto()
});