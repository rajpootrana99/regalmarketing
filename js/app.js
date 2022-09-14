let subMenu = document.getElementById("subMenu");
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
var logo = document.getElementById("logo");
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");
let checkbtn = document.getElementsByClassName("checkbtn")[0];

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

let nav = document.querySelector("#navbar");
let ul = document.querySelector("#navbar > ul");
let lis = document.querySelectorAll("#navbar > ul > li");

function showMenu() {
  if (ul.style.opacity == 1) {
    //Setting Menu Opacity Back to 0
    ul.style.opacity = 0;
    ul.style.display = "none";

    //Setting All LI Tags opacity back to 0
    document.documentElement.style.setProperty("--li_opacity", 0);
  } else if (ul.style.opacity == 0) {
    //Setting Menu Opacity Back to 1
    ul.style.opacity = 1;
    ul.style.display = "block";

    //Setting All LI Tags opacity back to 1
    document.documentElement.style.setProperty("--li_opacity", 1);
  }

  console.log(lis);
}

function showReview() {
  //   console.log(event.target);
  for (let userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (let userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
    checkbtn.style.marginRight = "40px";
    logo.src = "images/logo.png";
  } else {
    navbar.classList.remove("sticky");
    checkbtn.style.marginRight = "0px";
    logo.src = "images/logo-secondary.png";
  }
};
