// math.js - Lógica central de CargaSmart 
// Función para calcular el costo total de 2 rutas a y b

function calcularCostoTotal(rutaA, rutaB) {
    const costoRutaA = rutaA.reduce((total, costo) => total + costo, 0);
    const costoRutaB = rutaB.reduce((total, costo) => total + costo, 0);
    return costoRutaA + costoRutaB;
}

module.exports = {
    calcularCostoTotal
};