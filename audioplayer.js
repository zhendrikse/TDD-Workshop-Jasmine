class Audioplayer {
  constructor() {
    this.currentSong = "" 
  }

  isCurrentlyPlaying() {
    return this.currentSong
  }

  play() {
    throw new Error("Please load song first")
  }

  stop() {
  }

  load(newSong) {
    this.currentSong = newSong
  }
}