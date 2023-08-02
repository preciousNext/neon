let burgerIcon = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let section = document.querySelector("section");
burgerIcon.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  burgerIcon.classList.toggle("navbar-active");
  section.classList.toggle("shift");
});
//
var down = document.querySelector("#down");
var dropdown = document.querySelector(".dropdown");
down.addEventListener("click", function () {
  dropdown.classList.toggle("view");
});

// var display = document.querySelector(".Learn");
// var gi = document.querySelector(".gi");
// display.addEventListener("click", function () {
//   gi.classList.toggle("view");
// });
// function show() {
//   var gi = document.querySelector(".gi");
//   gi.style.display = "block";
// }
// function clear() {
//   var gi = document.querySelector(".gi");
//   gi.style.display = "none";
// }

// function hover() {
//   var blockchain = document.querySelector("#block");
//   var chain = document.querySelector("#chain");
//   blockchain.style.border = "1px solid red";
//   blockchain.style.backgroundcolor = "red";
// }

//
function validateForm() {
  var password1 = document.forms["myForm"]["password1"].value;
  if (password1 == null || password1 == "") {
    alert("Password is required");
    return false;
  }
}
function validateForm() {
  var password1 = document.forms["myForm"]["password1"].value;
  if (password1.length < 5) {
    alert("password requires more than 5 characters");
    return false;
  } else {
    return true;
  }
}
function validateForm() {
  var password2 = document.forms["myForm"]["password2"].value;
  var password1 = document.forms["myForm"]["password1"].value;
  var pp = document.querySelector(".pp");

  if (password2 != password1) {
    alert("password does not match");
    pp.style.display = "block";
    return false;
  }
}
//
