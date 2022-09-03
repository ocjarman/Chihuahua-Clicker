/* eslint-disable quotes */
// when chihuahua img clicked, add one to num chihuahuas
const chihuahuaPics = [
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

let chihuahuaCount = 0;
document.getElementById("attackOverlay").style.display = "none";

const divToBeClicked = document.getElementById("chihuahuaContainer");
const numberToAdd = document.querySelector("h2");

function moreChihuahuas() {
  chihuahuaCount += 1;
  numberToAdd.innerHTML = `Number of Karats: ${chihuahuaCount}`;
}
// when div is clicked, run more chihuahuas
divToBeClicked.addEventListener("click", moreChihuahuas);

// more karats will populate every 500 ms by 1
setInterval(moreChihuahuas, 500);

function changePic() {
  const randomChi = Math.floor(Math.random() * chihuahuaPics.length);
  document.getElementById("picToChange").src = chihuahuaPics[randomChi];
  if (randomChi === 9) {
    chihuahuaCount = 0;
    document.getElementById("attackOverlay").style.display = "block";
  } else {
    document.getElementById("attackOverlay").style.display = "none";
  }
}

// when clicked, change pic
divToBeClicked.addEventListener("click", changePic);

// if you want way more chihuahuas
const wayMoreButton = document.getElementById("wayMore");

// this fxn gives a lot more chihuahuas & changes the pic when clicked
function wayMoreChihuahuas() {
  chihuahuaCount += 100;
  numberToAdd.innerHTML = `Number of Karats: ${chihuahuaCount}`;
  changePic();
}

wayMoreButton.addEventListener("click", wayMoreChihuahuas);
