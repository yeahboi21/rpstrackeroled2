input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    P1 += 1
    Rounds += 1
    updateScores()
})
input.onGesture(Gesture.FreeFall, function () {
    P2 = 0
    updateScores()
})
input.onGesture(Gesture.TiltLeft, function () {
    P1 = 6969
    updateScores()
})
input.onGesture(Gesture.ScreenDown, function () {
    nerfPlayerB()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    updateScores()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    P2 += 1
    Rounds += 1
    updateScores()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
input.onGesture(Gesture.TiltRight, function () {
    P1 = 1000000
    updateScores()
})
input.onGesture(Gesture.LogoDown, function () {
    P1 += 5
    updateScores()
})
function updateScores () {
    OLED.clear()
    OLED.init(128, 64)
    OLED.writeStringNewLine("Player 1: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
function reset () {
    OLED.clear()
    OLED.init(128, 64)
    OLED.writeStringNewLine("Shall we play a game?")
    P1 = 0
    P2 = 0
    Rounds = 0
    Ties = 0
    basic.pause(2000)
    updateScores()
}
function nerfPlayerB () {
    OLED.clear()
    OLED.init(128, 64)
    OLED.writeStringNewLine("Player 1: " + "Too much to count")
    OLED.newLine()
    OLED.writeStringNewLine("Player 2: " + "Too low to count")
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Alright Player A wins")
    basic.pause(10000)
    reset()
}
let Ties = 0
let P2 = 0
let Rounds = 0
let P1 = 0
reset()
