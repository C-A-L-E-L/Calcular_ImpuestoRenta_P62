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

/**
 * 
 * @param {string} input - El valor del salario ingresado.
 * @param {string} nameInput - El ID del elemento del campo de entrada.
 * 
 * 1. Emilinar . del num
 * 2. Agregar . separador
 * 3. Actualizar input
 */
function setPuntoMil(input,nameInput) {
    var number = input.replace(/\./g, '');
    var formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    document.getElementById(nameInput).value = formattedNumber;
}

/**
 * Establece el contenido de un elemento span con un valor numérico formateado con dos decimales.
 * @param {string} span - El ID del elemento span en el documento HTML.
 * @param {number} total - El valor numérico que se mostrará en el elemento span.
 */
function setSpan(span,total) {
    var nesSpan = document.getElementById(span);
    nesSpan.textContent = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

/**
 * Realiza cálculos anuales 
 * y actualiza los elementos correspondientes.
 * 
 * @param {string} input - El valor del salario ingresado.
 * 
 * 1. Convertir la coma por punto
 * 2. Mostrar el número decimal formateado en la consola
 * 
 * 3. Establecer el salario con separador de miles
 *
 * 4. Calcular salario Anual
 * 5. Actualizar el elemento span con el salario anual
 */
function obtenerSalario(input) {
    var numeroDecimal = parseFloat(input.replace(",","."));
    console.log(numeroDecimal.toLocaleString(undefined, {maximumFractionDigits: 2}));

    setPuntoMil(input,'sueldoM');

    var sueldoA = numeroDecimal*12;
    console.log("anual: "+sueldoA);

    setSpan("totalIngresos",sueldoA);
}

/**
 * Calcula los gastos deducibles a partir de los valores proporcionados.
 * 
 * @param {string} vi - El valor de vivienda ingresado.
 * @param {string} edu - El valor de educacion ingresado.
 * @param {string} ali - El valor de alimentacion ingresado.
 * @param {string} ves - El valor de vestimenta ingresado.
 * @param {string} tu - El valor de turismo ingresado.
 * @param {string} sa - El valor desalud ingresado.
 * @returns {HTMLElement} - Elemento HTML que muestra el total de los gastos deducibles.
 * 
 * 1. Convertir la coma por punto
 * 2. Mostrar el número decimal formateado en la consola
 * 
 * 3. Establecer el salario con separador de miles
 *
 * 4. Calcular total de gastos
 * 5. Actualizar el elemento span con el gasto total
 */
function obtenerGastosDeducibles(vi,edu,ali,ves,tu,sa){
    var vivienda = parseFloat(vi.replace(",","."));
    var educaion = parseFloat(edu.replace(",","."));
    var alimentacion = parseFloat(ali.replace(",","."));
    var vestimenta = parseFloat(ves.replace(",","."));
    var turismo = parseFloat(tu.replace(",","."));
    var salud = parseFloat(sa.replace(",","."));

    console.log(vivienda.toLocaleString(undefined, {maximumFractionDigits: 2}));
    console.log(educaion.toLocaleString(undefined, {maximumFractionDigits: 2}));
    console.log(alimentacion.toLocaleString(undefined, {maximumFractionDigits: 2}));
    console.log(vestimenta.toLocaleString(undefined, {maximumFractionDigits: 2}));
    console.log(turismo.toLocaleString(undefined, {maximumFractionDigits: 2}));
    console.log(salud.toLocaleString(undefined, {maximumFractionDigits: 2}));

    setPuntoMil(vi, 'vivienda');
    setPuntoMil(edu, 'educacion');
    setPuntoMil(ali, 'alimentacion');
    setPuntoMil(ves, 'vestimenta');
    setPuntoMil(tu, 'turismoI');
    setPuntoMil(sa, 'salud');

    var gastos = vivienda+educaion+alimentacion+vestimenta+turismo+salud;
    console.log("GastosDedu: "+gastos);

    setSpan("totalGastos",gastos);
   
    return totalGastos;
} 

/**
 * Obtiene el valor de un elemento HTML.
 * @param {string} input - El ID del elemento en el documento HTML.
 * @returns {number} - El valor numérico obtenido del elemento.
 */
function obtenervalor(input) {
    var totalAnual = document.getElementById(input);
    var anualTotal = totalAnual.innerText;
    var numero = parseFloat(anualTotal.replace('.', '').replace(',', '.'));
    return numero
}

/**
 * Realiza cálculos Impuesto a la Renta
 */
function calcularImpuesto() {
    // Obtener el valor del ingreso anual 
    var numeroI=0;
    numeroI = obtenervalor("totalIngresos");

    // Obtener el valor de gastos y costos
    var numeroG=0;
    numeroG = obtenervalor("totalGastos");

    // Calcular la base imponible (Ingresos - Gastos Deducibles)
    var baseImponible=0;
    baseImponible = numeroI-numeroG
    console.log("BASE: "+baseImponible)
    
    // Setear span
    setSpan("base",baseImponible);

    // "Tabla de Impuestos"
    var array0=[0,11212,14285,17854,21442,42874,64297,85729,114288];
    var array=[11212,14285,17854,21442,42874,64297,85729,114288];
    var array2=[0,0,154,511,941,4156,8440,13798,22366];

    var FB=0;
    var impuestoFB=0;
    var porcentajeFE=0;

    if (0 < baseImponible && baseImponible < array[0]) {
        FB=array0[0]
        impuestoFB=array2[0]
        porcentajeFE=0
        console.log("llegue01: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[0] < baseImponible && baseImponible < array[1]) {
        FB=array0[1]
        impuestoFB=array2[1]
        porcentajeFE=5
        console.log("llegue02: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[1] < baseImponible && baseImponible < array[2]) {
        FB=array0[2]
        impuestoFB=array2[2]
        porcentajeFE=10
        console.log("llegue03: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[2] < baseImponible && baseImponible < array[3]) {
        FB=array0[3]
        impuestoFB=array2[3]
        porcentajeFE=12
        console.log("llegue04: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[3] < baseImponible && baseImponible < array[4]) {
        FB=array0[4]
        impuestoFB=array2[4]
        porcentajeFE=15
        console.log("llegue05: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[4] < baseImponible && baseImponible < array[5]) {
        FB=array0[5]
        impuestoFB=array2[5]
        porcentajeFE=20
        console.log("llegue06: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[5] < baseImponible && baseImponible < array[6]) {
        FB=array0[6]
        impuestoFB=array2[6]
        porcentajeFE=25
        console.log("llegue07: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }else if (array[6] < baseImponible && baseImponible < array[7]) {
        FB=array0[7]
        impuestoFB=array2[7]
        porcentajeFE=30

    }else if (array[7] < baseImponible) {
        FB=array0[8]
        impuestoFB=array2[8]
        porcentajeFE=35
        console.log("llegue08: "+FB+" "+impuestoFB+" "+porcentajeFE)

    }

    var impuestoFE=0;
    var impuestoFE=baseImponible-FB;

    var impuestoTotal=0.0;
    var impuestoTotal=impuestoFB+((impuestoFE*porcentajeFE)/100);
    console.log("ImpuestoFinal: "+impuestoTotal)

    setSpan("impuestoR",impuestoTotal);
}

/**
 * Limpia los input
 */
function resetInput() {
    document.getElementById("sueldoM").value = "";
    document.getElementById("vivienda").value = "";
    document.getElementById("educacion").value = "";
    document.getElementById("alimentacion").value = "";
    document.getElementById("vestimenta").value = "";
    document.getElementById("turismoI").value = "";
    document.getElementById("salud").value = "";
}

/**
 * actuador XD
 */
FIR.addEventListener("submit", function(e) {
    // Evitar valores vacios
    e.preventDefault();   
    
    var input = document.getElementById("sueldoM").value;
    obtenerSalario(input)

    var vivienda = document.getElementById("vivienda").value;
    var educacion = document.getElementById("educacion").value;
    var alimentacion = document.getElementById("alimentacion").value;
    var vestimenta = document.getElementById("vestimenta").value;
    var turismoI = document.getElementById("turismoI").value;
    var salud = document.getElementById("salud").value;
    obtenerGastosDeducibles(vivienda,educacion,alimentacion,vestimenta,turismoI,salud)

    calcularImpuesto()

    resetInput()
});