function carregar() {
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    
    if (hora >= 4 && hora < 12) {
        // BOM DIA !!!
        msg.innerHTML = `Bom dia!!! Agora são ${hora}:${minute}.`
        img.src = './img/manha.png'
        document.body.style.background = "#d4d85b"
        document.querySelector("#imagem").style.border = "3px solid #d4d85b"
    } else if (hora < 18) {
        // BOA TARDE !!!
        msg.innerHTML = `Boa tarde!!! Agora são ${hora}:${minute}.`
        img.src = './img/tarde.png'
        document.body.style.background = "#e74719"
        document.querySelector("#imagem").style.border = "3px solid #e74719"
    } else {
        // BOA NOITE !!!
        msg.innerHTML = `Boa noite!!! Agora são ${hora}:${minute}.`
        img.src = './img/noite.png'
        document.body.style.background = "#082432"
        document.querySelector("#imagem").style.border = "3px solid #082432"
    }
}