var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são exatametne ${hora} horas!`)
if (hora < 12 && hora > 6){
    console.log("Bom dia!")
} else if(hora <= 6) {
    console.log("boa madrugada")
} else if (hora <= 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite")
}