## Poker Hand Analyzer ##

JavaScript implementation of a poker hand analysis engine.

### Valid Input ###

- Hand: `Ah As 10c 7d 6s` (Pair of Aces)
- Hand: `Kh Kc 3s 3h 2d` (2 Pair) 
- Hand: `Kh Qh 6h 2h 9h` (Flush) 

### Running ###

This code relies upon a browser that support array.indexOf(). This library will not work with IE 8 and below.
If you must have that support, you can shim for it.

- Include `poker.js`
- call `poker.analyze(hand)`
where hand is in the form of '8h 9d 10s Jh Kd'

### Tests ###
Open Specrunner.html in a modern browser.