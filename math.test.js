// math.test.js - Pruebas unitarias para math.js
const { calcularCostoTotal } = require('./math');

describe('calcularCostoTotal', () => {
    test('debería calcular el costo total de dos rutas correctamente', () => {
        const rutaA = [10, 20, 30];
        const rutaB = [5, 15, 25];
        const resultado = calcularCostoTotal(rutaA, rutaB);
        expect(resultado).toBe(105); // 10 + 20 + 30 + 5 + 15 + 25 = 105
    });

    test('debería retornar 0 si ambas rutas están vacías', () => {
        const rutaA = [];
        const rutaB = [];
        const resultado = calcularCostoTotal(rutaA, rutaB);
        expect(resultado).toBe(0);
    });

    test('debería manejar rutas con costos negativos', () => {
        const rutaA = [-10, -20];
        const rutaB = [-5, -15];
        const resultado = calcularCostoTotal(rutaA, rutaB);
        expect(resultado).toBe(-50); // -10 + -20 + -5 + -15 = -50
    });

    test('debería manejar rutas con un solo costo', () => {
        const rutaA = [100];
        const rutaB = [50];
        const resultado = calcularCostoTotal(rutaA, rutaB);
        expect(resultado).toBe(150); // 100 + 50 = 150
    });
}); 