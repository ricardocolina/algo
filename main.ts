input.onButtonPressed(Button.A, function () {
    envio = "" + randint(0, 4) + randint(0, 4)
    radio.sendString(envio)
    radio.setGroup(parseFloat(envio))
    Escuchar = 1
})
radio.onReceivedString(function (receivedString) {
    if (Escuchar == 1) {
        basic.showString(receivedString)
        Escuchar = 0
    }
})
let Escuchar = 0
let envio = ""
radio.setGroup(1)
