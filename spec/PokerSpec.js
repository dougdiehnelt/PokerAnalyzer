describe("Poker Analyzer", function () {

    beforeEach(function () {
        // nothing to setup
    });

    describe("valid hands", function () {
        it("should fail on a hand with too few cards", function () {
            expect(poker.isHandValid('8h 9d')).toBeFalsy();
        });
        it("should fail on a hand with too many cards", function () {
            expect(poker.isHandValid('8h 9d 6s 7s 8s 9s')).toBeFalsy();
        });
        it("should pass on a valid hand", function () {
            expect(poker.isHandValid('8h 9d 6h 3d As')).toBeTruthy();
        });

        it("should fail on a invalid card", function () {
            expect(poker.isHandValid('8h 9d 6h 3d 1s')).toBeFalsy();
        });
        it("should fail on a duplicate card", function () {
            expect(poker.isHandValid('8h 9d 6h 3d 8h')).toBeFalsy();
        });
    });
    describe("analysis of hand", function () {
        it ("should validate a high card hand",function(){
           expect(poker.analyze('4h 6d 8s Js Ah')).toEqual('High Card');
        });
        it("should validate a pair",function(){
           expect(poker.analyze('8h 8d 7s Kh 9s')).toEqual('One Pair');
        });
        it("should validate 2 pairs",function(){
            expect(poker.analyze('8h 8d 7s Kh 7c')).toEqual('Two Pairs');
        });
        it("should validate 3 of a kind",function(){
            expect(poker.analyze('8h 8d 8s Kh 9s')).toEqual('Three of a Kind');
        });
        it("should validate a straight",function(){
            expect(poker.analyze('8h 10d 7s 6h 9s')).toEqual('Straight');
        });
        it("should validate a flush",function(){
            expect(poker.analyze('8h 7h 2h Kh Ah')).toEqual('Flush');
        });
        it("should validate a full house",function(){
            expect(poker.analyze('8h 8d 7s 7h 7c')).toEqual('Full House');
        });
        it("should validate four of a kind",function(){
            expect(poker.analyze('8h 8d 8s 8c 9s')).toEqual('Four of a Kind');
        });
        it("should validate a straight flush",function(){
            expect(poker.analyze('8h jH 9h 10h Qh')).toEqual('Straight Flush');
        });
    });
});
