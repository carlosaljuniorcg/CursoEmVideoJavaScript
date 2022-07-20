var agora = new Date()
var hora = agora.getHours()
//var hora = 15
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 5 && hora < 12) {
    console.log('Bom dia, pequeno gafanhoto!')
} else if (hora < 18) {
    console.log('Boa tarde, pequeno gafanhoto!')
} else if (hora <24) {
    console.log('Boa noite, pequenoo gafanhoto!')
} else if (hora > 0 || hora < 5) {
    console.log('Boa madrugada, pequeno gafanhoto.')
}