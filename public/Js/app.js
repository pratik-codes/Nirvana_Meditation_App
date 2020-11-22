const song = document.querySelector(".song");
const play = document.querySelector(".play button");
const replay = document.querySelector(".replay");
const restart_btn = document.querySelector(".restart-btn-div button");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");

//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 0;

timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    console.log("attribute changed")
  });
});

play.addEventListener("click", function() {
  checkPlaying(song);
  if (play.innerText == "Play") {
    play.innerText = "Pause"
  } else {
    play.innerText = "Play"
  }
  console.log("play button selected")
});

const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("restart clicked")
}

restart_btn.addEventListener("click", function() {
  let currentTime = song.currentTime;
  song.currentTime = 0;
  song.pause()
  console.log("restart button selected")

});

timeSelect.forEach(option => {
  console.log("timeselect selected")
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = song => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
};

song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
  }
  
};