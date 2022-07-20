/*var idade = 26
if (idade < 22) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}*/

var idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 70) {
    console.log('Voto opcional')
} else if (idade > 18 || idade < 70) {
    console.log('Voto obrigatório')
}
