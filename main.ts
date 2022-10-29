input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            # . # . #
            `)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
