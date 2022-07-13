// Adding event listener to window for keypress
window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // If unassigned key is pressed, end function
  if (!audio) {
    return;
  }
  // Reset audio to beginning to allow for constant keypress
  audio.currentTime = 0;
  audio.play();
  // Assigning currently pressed key to variable for adding class
  const key = document.querySelector(`[data-key="${event.keyCode}"]`);
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", () => {
    key.classList.remove("playing");
  });
});
