let ingresos = 0;
const gastos = [];
const categoriaGastos = [];
let totalGastos = 0;


function validarDato(dato) {
    if(isNaN(dato) || dato === 0) {
        return true;
    } else {
        return false;
    }
}

function verificadorNumeros(pregunta) {
    let numero = Number(prompt(pregunta));
    let validado = validarDato(numero);

    while(validado) {
        alert("Por favor, escribe un valor válido para los ingresos");
        numero = Number(prompt(pregunta));
        validado = validarDato(numero);
    }

    return numero
}

function inicio() {

    ingresos = verificadorNumeros("¿Cuánto ganas al mes?\n (Ingresa un valor con números)");
    
    alert("Tus ingresos son $" + ingresos + ".\n A continuación, ingresa tus gastos.");


    let bandera = true;
    while(bandera) {
        let categoria = prompt("¿A qué categoría pertenece el gasto?\n (Ejemplo: servicios, supermercado, entretenimiento, etc.)");
        let gasto = verificadorNumeros("¿Cuánto gastaste en " + categoria + "?");

        categoriaGastos.push(categoria);
        gastos.push(gasto);
        bandera = confirm("¿Deseas agregar otro gasto?");
    }

    alert("En consola verás el resultado");

    for(let i = 0; i < gastos.length; i++) {
        totalGastos += gastos[i];
    }

    console.log("Tus ingresos mensuales son: $" + ingresos + ".\n Tus gastos totales son: $" + totalGastos + ".\n Tu balance restante es: $" + (ingresos - totalGastos) + ".");

    if(ingresos > totalGastos) {
        console.log("Has manejado bien tu presupuesto. A continuación verás los detalles de gastos.")
    } else {
        console.log("¡Cuidado! Tus gastos son mayores que tus ingresos. A continuación verás los detalles de gastos.")
    }

    for(let i = 0; i < categoriaGastos.length; i++) {
        console.log(categoriaGastos[i] + ": " + gastos[i] + "\n");
    }

}

inicio();