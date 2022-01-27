input.onButtonPressed(Button.A, function () {
    Empf += 100
    basic.showNumber(Empf)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Schritte:" + Schritte)
})
input.onButtonPressed(Button.B, function () {
    Empf += -100
    basic.showNumber(Empf)
})
let Empf = 0
let Schritte = 0
Schritte = 0
Empf = 1500
let EmpfModus = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > Empf) {
        Schritte += 1
        basic.showNumber(Schritte)
        basic.clearScreen()
    }
})
