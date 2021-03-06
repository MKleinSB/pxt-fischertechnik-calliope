/**
 * Custom blocks for fischertechnik
 * 
 * Diese Blöcke sollen den Umgang mit Fischertechnik am Calliope Mini
 * vereinfachen. Vorschläge z.B. auf forum.calliope.cc immer willkommen!
 * 
 * MIT LICENSE Michael Klein 21.04.2019 https://twitter.com/kleinswelt
 * 
 */

const enum ftPins {
    C16 = 9,   //C16
    C17 = 15,  //C17
    P1 = 7,   //P1
    P2 = 8,   //P2
    P0 = 19, //P0
    P3 = 23, //P3 
    C4 = 10,  //C4
    C5 = 11, //C5
    C6 = 17, //C6
    C7 = 20,  //C7
    C8 = 21,  //C8
    C9 = 22,  //C9
    C10 = 16, //C10
    C11 = 14, //C11
    C12 = 13 //C12
}

enum pushType {
    //% block="gedrückt"
    down = PulseValue.High,
    //% block="losgelassen"
    up = PulseValue.Low
}


//% weight=100 color=#0641f9  icon="\uf085"

namespace fischertechnik {

    /**
    * Check if a specific pin is pressed
    * @param pin to be checked
    */
    //% blockId="PinIsPressed" block="Pin %ftpin|gedrückt"
    // Gridpicker und 5 in eine Reihe
    //% ftpin.fieldEditor="gridpicker" ftpin.fieldOptions.columns=5
    // hohes Gewicht d.h. Block nach oben
    //% weight=95 blockGap=8
    // vorgegebener Pin C16
    //% ftpin.defl=ftPins.C16
    export function PinIsPressed(ftpin: ftPins): boolean {
        const pin = <DigitalPin><number>ftpin;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }

    /**
    * Check if a specific pin is released
    * @param pin to be checked
    */
    //% blockId="PinIsReleased" block="Pin %ftpin|losgelassen"
    //% ftpin.fieldEditor="gridpicker" ftpin.fieldOptions.columns=5
    //% weight=94 blockGap=8
    export function PinIsReleased(ftpin: ftPins): boolean {
        const pin = <DigitalPin><number>ftpin;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 1;
    }

    /**
    * Define a pin to send up/down event messages.
    * only necessary for OnPinPressed and OnPinReleased.
    * Sets the pullmode for the pin Up.
    * @param pin to be used as switch
    */
    //% blockId="PinAsSwitch" block="lege Pin %ftpin| als Schalter fest"
    //% ftpin.fieldEditor="gridpicker" ftpin.fieldOptions.columns=5
    //% weight=83 blockGap=8
    export function PinAsSwitch(ftpin: ftPins) {
        const pin = <DigitalPin><number>ftpin;
        pins.setPull(pin, PinPullMode.PullUp);
        return;
    }

    /**
    * Do something when one of the pins is pressed.
    * Use PinAsSwitch first!
    * @param pin to be checked
    */
    //% blockId="OnPinPressed" block="wenn Pin %ftpin | gedrückt"
    //% ftpin.fieldEditor="gridpicker" ftpin.fieldOptions.columns=5
    //% weight=82 blockGap=8
    export function OnPinPressed(ftpin: ftPins, handler: Action) {
        const pin = <DigitalPin><number>ftpin;
        //        pins.setPull(pin, PinPullMode.PullUp);
        pins.onPulsed(pin, <number>pushType.down, handler);
    }

    /**
    * Do something when one of the pins is released.
    * Use PinAsSwitch first!
    * @param pin to be checked
    */
    //% blockId="OnPinReleased" block="wenn Pin %ftpin | losgelassen"
    //% ftpin.fieldEditor="gridpicker" ftpin.fieldOptions.columns=5
    //% weight=81 blockGap=8
    export function OnPinReleased(ftpin: ftPins, handler: Action) {
        const pin = <DigitalPin><number>ftpin;
        //       pins.setPull(pin, PinPullMode.PullUp);
        pins.onPulsed(pin, <number>pushType.up, handler);
    }

    /**
     * Write a comment in MakeCode
     */
    //% blockId="comment" block="Kommentar %leerstring"
    export function comment(text: string): void {
    }
}