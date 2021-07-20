describe("Given an unplayed game", function () {
  it("should score 'love' 'love'", function () {
    let game = new Game("Jan", "Piet");
    expect(game.score()).toEqual([0, 0]);
  })
  it("should have status 'undecided'", function () {
    expect(new Game("Jan", "Piet").status()).toEqual('undecided')
  })
})

describe("Given a started game", function () {
  it("should have status 'undecided'", function () {
    expect(new Game("Jan", "Piet").status()).toEqual('undecided')
  })
  describe("And a player A has 'fourty' and plays winning ball", function () {
    it("should have status 'won by player A'", function () {
      expect(new Game("Jan", "Piet").status()).toEqual('won by player A')
    })
  })
})