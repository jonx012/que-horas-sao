function carregar() {
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minute}`
    
    if (hora >= 4 && hora < 12) {
        // BOM DIA !!!
        img.src = './img/manha.png'
        document.body.style.background = "#d4d85b"
        document.querySelector("#imagem").style.border = "3px solid #d4d85b"
    } else if (hora < 18) {
        // BOA TARDE !!!
        img.src = './img/tarde.png'
        document.body.style.background = "#e74719"
        document.querySelector("#imagem").style.border = "3px solid #e74719"
    } else {
        // BOA NOITE !!!
        img.src = './img/noite.png'
        document.body.style.background = "#082432"
        document.querySelector("#imagem").style.border = "3px solid #082432"
    }
}
