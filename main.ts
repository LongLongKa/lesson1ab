input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # # .
        . # . # .
        # . . # .
        # # # # .
        # . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . . #
        . # # # .
        `)
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
