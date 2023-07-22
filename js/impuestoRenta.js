document.addEventListener("DOMContentLoaded", function () {
    function validarCampos(sueldoM, vivienda, educacion, alimentacion, vestimenta, turismoI, salud) {
        const camposValidos = [sueldoM, vivienda, educacion, alimentacion, vestimenta, turismoI, salud].every(value => !isNaN(value));
        return camposValidos;
    }

    function baseImponible(ingresos, gastos) {
        var result = 0;
        resta = ingresos - gastos

        if (resta < 11212) {
            result = 0;
        } else if (resta >= 11212 && resta < 14285) {
            result = ((resta - 11212) * 0.05) + 0;
        } else if (resta >= 14285 && resta < 17854) {
            result = ((resta - 14285) * 0.1) + 154;
        } else if (resta >= 17854 && resta < 21442) {
            result = ((resta - 17854) * 0.12) + 551;
        } else if (resta >= 21442 && resta < 42874) {
            result = ((resta - 21442) * 0.05) + 941;
        } else if (resta >= 42874 && resta < 64297) {
            result = ((resta - 42874) * 0.05) + 4156;
        } else if (resta >= 64297 && resta < 85729) {
            result = ((resta - 64297) * 0.05) + 8440;
        } else if (resta >= 85729 && resta < 114288) {
            result = ((resta - 85729) * 0.05) + 13798;
        } else {
            result = ((resta - 114288) * 0.05) + 22366;
        }
        console.log("RESULT: " + result)

        const impuesto = document.getElementById("impuestoR");
        impuesto.textContent = result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        impuesto.style.color = "green";
        return result

    }

    function calcularImpuesto() {
        const sueldoM = parseFloat(document.getElementById("sueldoM").value);
        const vivienda = parseFloat(document.getElementById("vivienda").value);
        const educacion = parseFloat(document.getElementById("educacion").value);
        const alimentacion = parseFloat(document.getElementById("alimentacion").value);
        const vestimenta = parseFloat(document.getElementById("vestimenta").value);
        const turismoI = parseFloat(document.getElementById("turismoI").value);
        const salud = parseFloat(document.getElementById("salud").value);

        const gastos = document.getElementById("totalGastos");
        const totalGastos = (vivienda + educacion + alimentacion + vestimenta + turismoI + salud);

        if (validarCampos(sueldoM, vivienda, educacion, alimentacion, vestimenta, turismoI, salud)) {
            gastos.textContent = totalGastos.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            baseImponible(sueldoM, totalGastos);
        } else {
            alert("Por Favor no deje campos vacios.");
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        calcularImpuesto();
    });
});
