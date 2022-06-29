function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!` 
    if ( hora >= 0 && hora <= 12){
        // bom dia 
        img.src = "https://i1.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2014/11/morning.jpg?resize=670%2C447&ssl=1"
    } else if (hora >= 13 && hora <= 18){
        // boa tarde
        img.src = "https://media-cdn.tripadvisor.com/media/photo-s/0f/34/3b/10/fim-de-tarde.jpg"
    } else {
        // boa noite
        img.src = "https://st2.depositphotos.com/4404267/6487/i/450/depositphotos_64872759-stock-photo-full-moon-in-night-sky.jpg"
    } 
}