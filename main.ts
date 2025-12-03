radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dado1) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    dado1 = randint(1, 6)
    basic.showNumber(dado1)
    radio.sendNumber(dado1)
})
let dado1 = 0
radio.setGroup(1)
