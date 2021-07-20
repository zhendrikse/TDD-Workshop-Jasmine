describe("Given an unplayed game", function () {
  var game;

  beforeEach(function() {
      game = new Game("Jan", "Piet");
  })

  it("should score 'love' 'love'", function () {
    expect(game.score()).toEqual([0, 0]);
  })
  
  it("should have status 'undecided'", function () {
    expect(game.status()).toEqual('undecided')
  })
})

describe("Given a started game", function () {
  var game;

  beforeEach(function() {
      game = new Game("Jan", "Piet");
  })

  it("should have status 'undecided'", function () {
    expect(game.status()).toEqual('undecided')
  })

  describe("And a player A has 'fourty' and plays winning ball", function () {
    it("should have status 'won by player A'", function () {
      expect(game.status()).toEqual('won by player A')
    })
  })
})