const DARK_MODE = "dark";
const LIGHT_MODE = "light";
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function switchMode(isLight) {
  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  //   Images handlers
  isLight ? imageMode(LIGHT_MODE) : imageMode(DARK_MODE);
}

// Switch Function
function switchTheme(event) {
  let mode = event.target.checked ? DARK_MODE : LIGHT_MODE;
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
  switchMode(!event.target.checked);
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

// check local storage for "Theme"
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === DARK_MODE) {
    toggleSwitch.checked = true;
    switchMode(false);
  }
}
