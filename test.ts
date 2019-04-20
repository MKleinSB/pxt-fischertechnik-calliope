// tests go here; this will not be compiled when this package is used as a library
fischertechnik.OnPinPressed(ftPins.C16, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    if (fischertechnik.PinIsPressed(ftPins.C17)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
