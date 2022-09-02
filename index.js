/* eslint-disable quotes */
// when chihuahua img clicked, add one to num chihuahuas
let chihuahuaCount = 0;

const divToBeClicked = document.getElementById("chihuahuaContainer");
let numberToAdd = document.querySelector("h2");

function moreChihuahuas() {
  chihuahuaCount += 1;
  numberToAdd.innerHTML = `Number of Chihuahuas: ${chihuahuaCount}`;
  // changeChiChi();
  console.log(chihuahuaCount);
}
// when div is clicked, run more chihuahuas
divToBeClicked.addEventListener("click", moreChihuahuas);

setInterval(moreChihuahuas, 500);

const wayMoreButton = document.getElementById("wayMore");

wayMoreButton.addEventListener("click", wayMoreChihuahuas);

let backgroundImage = document.getElementById;

function wayMoreChihuahuas() {
  chihuahuaCount += 100;
  numberToAdd.innerHTML = `Number of Chihuahuas: ${chihuahuaCount}`;
  console.log(chihuahuaCount);
}

// Requirements:
// [ ] Create an empty webpage (html, css, + javascript)
// [ ] Add two items to the HTML:
// [ ] A line of text with the number "0" in it
// [ ] An image or button
// [ ] Add interactivity
// [ ] Every 2 seconds, the counter goes up by 1
// [ ] On click of the image or button, the counter on the page goes up by 1

const randomIndex = Math.floor(Math.random() * 11);

const randomChiChiPicture = document.getElementById(`${randomIndex}`);

///////////////////***********dont alter above code************//////////////
// console.log("randomChiPicture-->", randomChiChiPicture.innerHTML);

// make a helper function to change the chihuahua pic

let currentImage = document.getElementById("chihuahuaContainer");

function changeChiChi() {}

// add later:
// buy a lot of chihuahuas at once button += 5

// $(".hole").click(function () {
//   //if the class is currently mole, we want to add one to score and remove the mole
//   if ($(this).hasClass("hole mole")) {
//     score += 1;
//     $(this).removeClass("mole");
//   }
//   $("#score").html(score);
// });

function newBackgroundColor() {}
