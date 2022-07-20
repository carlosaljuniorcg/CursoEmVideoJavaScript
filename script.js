function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora <=0 || hora < 12) {
        //Bom dia
        img.src = 'Manhã.png'
        document.body.style.background = '#ffd628'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'Tarde.png'
        document.body.style.background = '#d4654f'
    } else if (hora > 18 && hora < 24) {
        //Boa noite
        img.src = 'Noite.png'
        document.body.style.background = '#2b3044'
    }
}

