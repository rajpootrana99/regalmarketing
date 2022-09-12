let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");
function showReview() {
  //   console.log(event.target);
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
var logo = document.getElementById("logo");

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
    logo.src = "images/logo.png";
  } else {
    navbar.classList.remove("sticky");
    logo.src = "images/logo-secondary.png";
  }
};
