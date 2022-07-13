window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`[data-key="${event.keyCode}"]`);
  key.classList.add("playing");
  setTimeout(function () {
    key.classList.remove("playing");
  }, 150);
});
