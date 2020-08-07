radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        kitronik_servo_lite.backward()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.showArrow(ArrowNames.North)
    }
    if (receivedNumber == 20) {
        kitronik_servo_lite.forward()
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 40) {
        kitronik_servo_lite.turnLeft(90)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.showArrow(ArrowNames.West)
    }
    if (receivedNumber == 30) {
        kitronik_servo_lite.turnRight(90)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.showArrow(ArrowNames.East)
    }
    if (receivedNumber == 50) {
        kitronik_servo_lite.stop()
        lights()
        basic.showIcon(IconNames.No)
    }
})
function lights () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 10; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(30)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(50)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(20)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(40)
    basic.showArrow(ArrowNames.East)
})
let strip: neopixel.Strip = null
radio.setGroup(10)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
lights()
basic.showIcon(IconNames.Heart)
