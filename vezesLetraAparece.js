let text = 'O rato roeu a roupa do rei de roma'
let letra = 'r'

function vezesLetra(text, letra) {
    return (text.split(letra)).length -1
}
console.log(vezesLetra(text, letra))