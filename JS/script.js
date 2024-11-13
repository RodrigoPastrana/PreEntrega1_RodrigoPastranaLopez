// Función para calcular el costo total de varios productos
function calcularCostoTotal() {
    // Pedimos la cantidad de productos al usuario
    const cantidadProductos = parseInt(prompt("¿Cuántos productos deseas ingresar?"));

    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
        alert("Por favor, ingresa una cantidad válida de productos.");
        return;
    }

    let costoTotal = 0;

    // Recorremos desde 1 hasta la cantidad de productos
    for (let i = 1; i <= cantidadProductos; i++) {
        const precio = parseFloat(prompt(`Ingresa el precio del producto ${i}:`));

        // Validación del precio ingresado
        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingresa un precio válido para el producto.");
            i--; // Regresamos un paso en el ciclo para volver a pedir el precio de este producto
            continue;
        }

        // Sumamos el precio del producto al costo total
        costoTotal += precio;
    }

    // Mostramos el resultado en la página y en un alert
    document.getElementById("resultadoCostoTotal").textContent = `El costo total es: $${costoTotal.toFixed(2)}`;
    alert(`El costo total es: $${costoTotal.toFixed(2)}`);
}

// Función para calcular el pago en cuotas sin interés
function calcularCuotas() {
    const monto = parseFloat(document.getElementById("montoTotal").value);
    const cuotas = parseInt(document.getElementById("cantidadCuotas").value);

    if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Calcular la cuota fija sin interés
    const cuotaFija = monto / cuotas;

    // Mostrar el resultado en la página y en un alert
    document.getElementById("resultadoCuotas").textContent = `Cada cuota es de: $${cuotaFija.toFixed(2)}`;
    alert(`Cada cuota es de: $${cuotaFija.toFixed(2)}`);
}

// Función para reiniciar los campos de la sección de Costo Total
function reiniciarCostoTotal() {
    document.getElementById("resultadoCostoTotal").textContent = ""; // Limpiamos el resultado del párrafo
}

// Función para reiniciar los campos de la sección de Cuotas
function reiniciarCuotas() {
    document.getElementById("montoTotal").value = "";
    document.getElementById("cantidadCuotas").value = "";
    document.getElementById("resultadoCuotas").textContent = "";
}