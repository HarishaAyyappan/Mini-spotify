function playSong(fileName, songTitle) {
    const player = document.getElementById("audioPlayer");
    player.src = "songs/" + fileName;
    player.play();
    document.getElementById("nowPlayingText").innerText = "Now playing: " + songTitle;
  }
  