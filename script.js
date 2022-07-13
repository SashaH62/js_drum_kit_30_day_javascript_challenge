//  Function to play sound on key press

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // Assigning currently pressed key to variable for adding class
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If unassigned key is pressed, end function
  if (!audio) return;

  // Reset audio to beginning to allow for constant keypress
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Adding event listener to window for keypress
window.addEventListener("keydown", playSound);
