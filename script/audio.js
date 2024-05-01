var audio = document.getElementById('backgroundMusic');
audio.volume = 0.3;
toggleMusic();


document.getElementById('speaker-btn').addEventListener('click', toggleMusic);
function toggleMusic() {
    let music = document.getElementById('backgroundMusic');
    let speaker = document.getElementById('speaker');
    music.volume = 0.3;
    if (music.paused) {
        music.play();
        speaker.src = "assets/speaker_on.png";
    } else {
        music.pause();
        speaker.src = "assets/speaker_off.png";
    }
}
let volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('change', adjustVolume);
function adjustVolume() {
    let music = document.getElementById('backgroundMusic');
    let volumeSlider = document.getElementById('volumeSlider');
    music.volume = volumeSlider.value;
}

let iframeLoaded = false;

document.querySelector('iframe').addEventListener('load', function() {
  if (iframeLoaded) {
    let audio = document.getElementById('backgroundMusic');
    audio.pause();
  } else {
    iframeLoaded = true;
  }
});

document.querySelector('iframe').addEventListener('load', function() {
    if (this.contentWindow.location.href === "file:///E:/SorteiObaum2/pages/inicio.html") {
      let audio = document.getElementById('backgroundMusic');
      audio.play();
    }
  });