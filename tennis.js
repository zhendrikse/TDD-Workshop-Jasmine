class Game {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  score () {
    return [0, 0];
  }

  status () {
    return 'undecided';
  }
}
