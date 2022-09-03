/* eslint-disable quotes */
// when chihuahua img clicked, add one to num chihuahuas
const chihuahuaPics = [
  "./imagesOfChihuahuas/chi2.jpeg",
  "./imagesOfChihuahuas/chi3.jpeg",
  "./imagesOfChihuahuas/chi4.jpeg",
  "./imagesOfChihuahuas/chi6.jpeg",
  "./imagesOfChihuahuas/chi7.jpeg",
  "./imagesOfChihuahuas/chi8.jpeg",
  "./imagesOfChihuahuas/chi9.jpeg",
  "./imagesOfChihuahuas/chi10.jpeg",
  "./imagesOfChihuahuas/chi11.jpeg",
  "./imagesOfChihuahuas/chi12.jpeg",
  "./imagesOfChihuahuas/chi13.jpeg",
  "./imagesOfChihuahuas/chi14.jpeg",
  "./imagesOfChihuahuas/chi15.jpeg",
  "./imagesOfChihuahuas/chi16.jpeg",
  "./imagesOfChihuahuas/chi17.jpeg",
  "./imagesOfChihuahuas/chi18.jpeg",
  "./imagesOfChihuahuas/chi19.jpeg",
  "./imagesOfChihuahuas/chi20.jpeg",
  "./imagesOfChihuahuas/chi21.jpeg",
  "./imagesOfChihuahuas/chi22.jpeg",
  "./imagesOfChihuahuas/chi23.jpeg",
  "./imagesOfChihuahuas/chi24.jpeg",
  "./imagesOfChihuahuas/chi25.jpeg",
  "./imagesOfChihuahuas/chi26.jpeg",
  "./imagesOfChihuahuas/chi27.jpeg",
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
  if (randomChi === 0) {
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
