'use strict';
var poker = (function () {
    var validSuits = ['h', 'd', 'c', 's'],
        validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        analyze = function (handStr) {
            if (!isHandValid(handStr)) return 'invalid hand';
            var hand = createHand(handStr);
            if (hand.isStraight && hand.isFlush) return 'Straight Flush';
            if (numberOfQty(hand, 4) === 1) return 'Four of a Kind';
            if (numberOfQty(hand, 3) === 1 && numberOfQty(hand, 2) == 1) return 'Full House';
            if (hand.isFlush) return 'Flush';
            if (hand.isStraight) return 'Straight';
            if (numberOfQty(hand, 3) === 1) return 'Three of a Kind';
            if (numberOfQty(hand, 2) === 2) return 'Two Pairs';
            if (numberOfQty(hand, 2) === 1) return 'One Pair';
            return "High Card";
        },
        isHandValid = function (hand) {
            var cards = hand.split(' '),
                allCardsValid = true,
                seenCards = [];
            if (cards.length != 5) return false; //too many or too few cards in the hand
            for (var i = 0; i < cards.length; i++) {
                allCardsValid &= cardValid(cards[i]); //verify all cards are valid
                if (seenCards.indexOf(cards[i]) < 0) seenCards.push(cards[i]);
            }
            if (seenCards.length != cards.length) return false; //duplicate card in the hand
            return allCardsValid;
        },
        // check to see if card is valid
        // input is '8h' or 'As' where 8 and A are the value and h and s are the suits
        cardValid = function (card) {
            var suit = card.substr(card.length - 1).toLowerCase(),
                value = card.substr(0, card.length - 1).toUpperCase();
            return validSuits.indexOf(suit) > -1 && validCards.indexOf(value) > -1;
        },
        // pre-process the hand to make for easier analysis
        createHand = function (handStr) {
            var hand = { cards: {}, suits: {}, seq: [], isStraight: true, isFlush: false },
                suit, value,
                cards = handStr.split(' ');
            for (var i = 0; i < cards.length; i++) {
                suit = cards[i].substr(cards[i].length - 1).toLowerCase();
                value = cards[i].substr(0, cards[i].length - 1).toUpperCase();
                hand.seq.push(validCards.indexOf(value));
                if (hand.cards['c' + value]) {
                    hand.cards['c' + value] += 1;
                } else {
                    hand.cards['c' + value] = 1;
                }
                if (hand.suits[suit]) {
                    hand.suits[suit] += 1;
                } else {
                    hand.suits[suit] = 1;
                }
            }
            hand.seq.sort(function (a, b) {
                return a - b
            });
            for (var i = 1; i < 5; i++) {
                //make sure that all the cards are in sequential order
                hand.isStraight &= ((hand.seq[i - 1] + 1) == hand.seq[i]);
            }
            for (var key in hand.suits) {
                if (hand.suits[key] === 5) hand.isFlush = true;
            }
            return hand;
        },
        numberOfQty = function (hand, qty) {
            var numQty = 0;
            for (var key in hand.cards) {
                if (hand.cards[key] === qty) numQty++;
            }
            return numQty;
        };
    return {
        analyze: analyze,
        isHandValid: isHandValid
    };
}).call(this);