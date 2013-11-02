var poker = (function(){
    var validSuits = ['h', 'd', 'c', 's'];
    var validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    var analyze = function(handStr){
        if (!isHandValid(handStr)){
            return "invalid hand";
        }
        console.log(handStr);

    };
    var isHandValid = function(hand){
        var cards = hand.split(' '),
            allCardsValid=true,
            seenCards =[];
        if (cards.length != 5) return false; //too many or too few cards in the hand
        for (var i =0; i < cards.length; i++){
            allCardsValid &= cardValid(cards[i]); //verify all cards are valid
            if (seenCards.indexOf(cards[i]) < 0) seenCards.push(cards[i]);
        }
        if (seenCards.length != cards.length) return false; //duplicate card in the hand
        return allCardsValid;
    };
    var cardValid = function(card){
        var suit = card.substr(card.length-1).toLowerCase(),
            value = card.substr(0, card.length-1).toUpperCase();
        return validSuits.indexOf(suit) > -1 && validCards.indexOf(value) > -1;

    };
    var createHand = function(handStr){
        var hand = [],
            cards = handStr.split(' ');
        for (var i =0; i < cards.length; i++){
            hand.push({
                suit: cards[i].substr(cards[i].length-1).toLowerCase(),
                value: cards[i].substr(0, cards[i].length-1).toUpperCase()
            })
        }
        return hand;
    }
    return {
        analyze: analyze,
        isHandValid: isHandValid
    };
}).call(this);
