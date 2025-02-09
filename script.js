


document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("play");

  if (!audio || !playButton) return;

  // Try to autoplay audio
  audio.play().catch(() => {
      document.addEventListener("click", function userInteraction() {
          audio.play();
          document.removeEventListener("click", userInteraction);
      });
  });

  // Play/Pause button functionality
  playButton.addEventListener("click", () => {
      if (audio.paused) {
          audio.play();
          playButton.src = "https://cdn-icons-png.flaticon.com/512/2920/2920686.png"; // Pause icon
      } else {
          audio.pause();
          playButton.src = "https://cdn-icons-png.flaticon.com/512/27/27223.png"; // Play icon
      }
  });
});



const titleText = "kookie" + "|"; // Change this to your desired title
let index = 0;
let isDeleting = false;

function typeWriter() {
  let currentText = titleText.substring(0, index);
  document.title = currentText ; // Adds a blinking cursor

  if (!isDeleting) {
    if (index < titleText.length) {
      index++;
    } else {
      isDeleting = true; // Start deleting after typing completes
      setTimeout(typeWriter, 1000); // Pause before deleting
      return;
    }
  } else {
    if (index > 0) {
      index--;
    } else {
      isDeleting = false; // Start typing again after deleting
      setTimeout(typeWriter, 500); // Short pause before retyping
      return;
    }
  }
  
  setTimeout(typeWriter, isDeleting ? 100 : 200); // Typing speed vs. backspacing speed
}

typeWriter();



let blog = document.getElementById("blog");
let slog = document.getElementById("slog");
let glog = document.getElementById("glog");
function firstFunction(){
   
  glog.style.transform = "translateX(-1000px)";
  slog.style.transform = "translateY(1000px)";
  blog.style.display = "flex"; 
  blog.style.transform = blog.style.transform === "translateY(30%)" ? "translateY(-1000px)" : "translateY(30%)";
}



function secFunction(){
  glog.style.transform = "translateX(-1000px)"
  blog.style.transform = "translateY(-1000px)";
  slog.style.display = "flex"; 
  slog.style.transform = slog.style.transform === "translateY(30%)" ? "translateY(1000px)" : "translateY(30%)";
}

function thirdFunction(){
  slog.style.transform = "translateY(1000px)";
  blog.style.transform = "translateY(-1000px)";
  glog.style.display = "flex"; 
  glog.style.transform = glog.style.transform === "translateX(30%)" ? "translateX(-1000px)" : "translateX(30%)";
}