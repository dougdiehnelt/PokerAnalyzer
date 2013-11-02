describe("Poker Analyzer", function() {
  
  beforeEach(function() {
  
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("invalid hands", function() {
    it("should throw an exception if a hand is invalid", function() {
      expect(function() {
        poker.analyse('Ah kk');
      }).toThrowError("hand does not contain enough cards");
    });
  });
});
