console.log("Portfolio Loaded 🚀");

/* Typing Effect */

const typingText = document.getElementById("typing");

const words = [
  "Manasa",
  "Backend Developer",
  "Full Stack Developer",
  "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

  if(charIndex < words[wordIndex].length){

    typingText.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect,100);

  }
  else{

    setTimeout(eraseEffect,1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typingText.textContent =
      words[wordIndex].substring(0,charIndex-1);

    charIndex--;

    setTimeout(eraseEffect,50);

  }
  else{

    wordIndex++;

    if(wordIndex >= words.length){
      wordIndex = 0;
    }

    setTimeout(typeEffect,300);

  }

}

typeEffect();

/* Scroll Progress */

window.addEventListener("scroll",()=>{

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent =
    (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width =
    scrollPercent + "%";

});

/* Mobile Navbar */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

  navLinks.classList.toggle("active");

});