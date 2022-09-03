/* eslint-disable quotes */
// when chihuahua img clicked, add one to num chihuahuas
let chihuahuaCount = 0;
document.getElementById("attackOverlay").style.display = "none";

const divToBeClicked = document.getElementById("chihuahuaContainer");
let numberToAdd = document.querySelector("h2");

function moreChihuahuas() {
  chihuahuaCount += 1;
  numberToAdd.innerHTML = `Number of Karats: ${chihuahuaCount}`;
  console.log(chihuahuaCount);
  // if (document.getElementById("picToChange").src === chihuahuaPics[9]) {
  //   chihuahuaCount = 0;
  //   console.log("youve been attacked");
  // }
}
// when div is clicked, run more chihuahuas
divToBeClicked.addEventListener("click", moreChihuahuas);

setInterval(moreChihuahuas, 500);

const wayMoreButton = document.getElementById("wayMore");

wayMoreButton.addEventListener("click", wayMoreChihuahuas);

function wayMoreChihuahuas() {
  chihuahuaCount += 100;
  numberToAdd.innerHTML = `Number of Karats: ${chihuahuaCount}`;
  console.log(chihuahuaCount);
  changePic();
}

///////////////////***********dont alter above code************//////////////
// console.log("randomChiPicture-->", randomChiChiPicture.innerHTML);

// make a helper function to change the chihuahua pic

let chihuahuaPics = [
  "./imagesOfChihuahuas/chi1.jpg",
  "./imagesOfChihuahuas/chi2.jpg",
  "./imagesOfChihuahuas/chi3.jpeg",
  "./imagesOfChihuahuas/chi4.jpg",
  "./imagesOfChihuahuas/chi5.jpg",
  "./imagesOfChihuahuas/chi6.jpg",
  "./imagesOfChihuahuas/chi7.jpg",
  "./imagesOfChihuahuas/chi8.jpg",
  "./imagesOfChihuahuas/chi9.jpg",
  "./imagesOfChihuahuas/attack.jpeg",
  "./imagesOfChihuahuas/chi10.jpg",
  "./imagesOfChihuahuas/chi11.jpeg",
  "./imagesOfChihuahuas/chi12.jpg",
  "./imagesOfChihuahuas/chi13.jpg",
  "./imagesOfChihuahuas/chi14.jpeg",
  "./imagesOfChihuahuas/chi15.jpg",
  "./imagesOfChihuahuas/chi16.jpg",
  "./imagesOfChihuahuas/chi17.jpg",
  "./imagesOfChihuahuas/chi18.jpg",
  "./imagesOfChihuahuas/chi19.jpg",
  "./imagesOfChihuahuas/chi20.jpg",
  "./imagesOfChihuahuas/chi21.jpg",
  "./imagesOfChihuahuas/chi22.jpeg",
  "./imagesOfChihuahuas/chi23.jpeg",
  "./imagesOfChihuahuas/chi24.jpeg",
];

function changePic() {
  const randomChi = Math.floor(Math.random() * chihuahuaPics.length);
  document.getElementById("picToChange").src = chihuahuaPics[randomChi];
  if (randomChi === 9) {
    chihuahuaCount = 0;
    document.getElementById("attackOverlay").style.display = "block";
    console.log("youve been attacked");
  } else {
    document.getElementById("attackOverlay").style.display = "none";
  }
}

divToBeClicked.addEventListener("click", changePic);

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
