# pxt-fischertechnik-calliope
[![Build Status](https://travis-ci.org/MKleinSB/pxt-fischertechnik-calliope.svg?branch=master)](https://travis-ci.org/MKleinSB/pxt-fischertechnik-calliope)

Das fischertechnik-Paket für MakeCode und Calliope Mini http://makecode.calliope.cc stellt Blöcke zur Verfügung, die die Programmierung von Fischertechnik-Modellen https://www.fischertechnik.de am Calliope Mini vereinfachen sollen. So gibt es nun Eventblöcke für alle Pins (statt nur für P0-P3) oder ein Kommentarblock.
Eine weitere Erleichterung ist die Fischertechnikerweiterung für den Calliope Mini: https://www.hackster.io/MKlein/calliope-mini-und-fischertechnik-ff288d


| ![Fischertechnik Blöcke](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft0.png "Fischertechnik Blöcke") | ![Erweiterung](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft00.png "Erweiterung") |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                                            _Fischertechnikblöcke_                                            |                                   _Calliope Mini Fischertechnikerweiterung_                                   |

## Blöcke des Pakets

![Pin C16 gedrückt](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft1.png) 

frägt ab, ob ein bestimmter Pin (Schalter) gedrückt ist.

![Pin C16 losgelassen](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft3.png) 

frägt ab, ob ein bestimmter Pin (Fischertechnikschalter) losgelassen ist.

![lege Pin C16 als Schalter fest](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft5.png) 

Wenn man den Pin als Event (eine der unteren Klammern) abfragen möchte, muss man festlegen, dass an ihm ein Schalter angeschlossen ist. Für die beiden oberen Funktionen wird dieser Block nicht benötigt, dort konnte ich es anders lösen!
Intern wird in der Funktion der interne Pull-up-Widerstand des Pins aktiviert und der Zustand des Pins auf high gesetzt. Wenn man dann den Schalter drückt, der ja mit Ground verbunden ist, wird der Pin auf Low runtergezogen und ein Event (Ereignis im Calliope Event-Bus) wird ausgelöst.

![Wenn Pin C16 gedrückt](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft2.png) 

Führt die eingeklammerten Blöcke aus, wenn ein Pin (Fischertechnik Schalter) gedrückt ist. Der Pin muss vorher als Schalterpin festgelegt werden.

![Wenn Pin C16 losgelassen](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft4.png) 

Führt die eingeklammerten Blöcke aus, wenn ein Pin (Fischertechnik Schalter) losgelassen ist. Der Pin muss vorher als Schalterpin festgelegt werden.

![Kommentar](https://github.com/MKleinSB/pxt-fischertechnik-calliope/blob/master/pics/ft6.png) 

Endlich ein Kommentarblock wie bei NEPO von OpenRoberta!

Wer den Fischertechnik Fototransistor ansteuern will, findet hier mein passendes Paket:

https://github.com/MKleinSB/pxt-ft-fototransistor-calliope

## License

MIT

## Supported targets

* for PXT/calliope
