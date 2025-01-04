const { default: expect } = require('expect');
const { test } = require('picomatch');
const calculoRota = require('./calculoRota');

test('calculo de razao entre combustivel e distância de acordo com o tipo', () => {

    const distancia = 160
    const combustivel = "G"

    const resultado = calculoRota(distancia, combustivel);

    expect(resultado).toBe(10);
})

test("calculo de razao entre combustivel e distância de acordo com o tipo", () => {

    const distancia = 160;
    const combustivel = "E";

    const resultado = calculoRota(distancia, combustivel);

    expect(resultado).toBeCloseTo(14.545)
//


})