let numero = 10
let outroNumero = 15
let operador = '+'

function calculadoraAdicaoSubtracao(numero, outroNumero, operador) {
    if (operador === '+') {
        return (numero + outroNumero)
    }

    if (operador === '-') {
        return (numero - outroNumero)
    }
    else {
        return 0
    }
} console.log(calculadoraAdicaoSubtracao(numero, outroNumero, operador))