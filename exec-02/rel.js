function atualizarTempo() {

    var disp1 = document.querySelector('#display1');

    var disp2 = document.querySelector('#display2');

    var disp3 = document.querySelector('#display3');
   
    var agora = new Date();

    var h1 = corrigirHorario(agora.getHours());

    var h2 = corrigirHorario(agora.getMinutes());

    var h3 = corrigirHorario(agora.getSeconds());

    disp1.textContent = h1;

    disp2.textContent = h2;

    disp3.textContent = h3;

}


function corrigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

setInterval(atualizarTempo, 1000);