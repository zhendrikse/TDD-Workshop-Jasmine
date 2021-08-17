describe('Given new audioplayer', function () {
  var myAudioplayer;

  beforeEach(function () {
    myAudioplayer = new Audioplayer()
  })

  describe('When looking at it status', function() {
    it('should not be playing a song', function () {
      expect(myAudioplayer.isCurrentlyPlaying()).toEqual("")
    })
  })

  describe('When play is pressed', function() {
    it('should throw "load song first" error when play is pressed', function () {
      expect(function () { myAudioplayer.play() })
        .toThrow(new Error("Please load song first"))
    })
  })

  describe('When stop is pressed', function() {
    it('should ignore the command', function () {
      spyOn(myAudioplayer, "stop")
      myAudioplayer.stop()
      expect(myAudioplayer.stop).toHaveBeenCalled();
    })
  })

  describe('When a song has been loaded', function() {
    describe('When play is pressed', function() {
      it('should play the currently loaded song', function() {
        expect(myAudioplayer.load("myGreatSong.mp3"))
        expect(myAudioplayer.isCurrentlyPlaying()).toEqual("myGreatSong.mp3")
      })
    })
  })
})
