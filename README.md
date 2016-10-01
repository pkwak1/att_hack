Editing:
  All relevant app files should be in the www folder (everything else handles builds)

  TODO Files should log elements of concern, who's handling what tasks, and any bugs found (if we can't just tell each other)

Building:
  To build you must have
    Cordova >=4.2.0 (an Ionic dependency)
    Ionic CLI (through node/npm)
    ios-display and anything else ionic asks for when running:
      ionic --version
    Xcode w/ iOS emulator

  Build with
    ionic Build

  run with
    ionic run ios

  test with the ios emulator (won't support multitouch)
