let arr = [10, 20, 30, 40, 50]

function tripleOfChance(arr) {

    let resultado = []

    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 3)

    }
    return resultado

}
console.log(tripleOfChance(arr))