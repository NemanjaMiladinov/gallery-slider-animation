"use strict";
/* --------------------------------------------- */
// Arrows for selection
const right = document.querySelector(".right");
const left = document.querySelector(".left");
/* --------------------------------------------- */
// Node list of smaller images
const altImgs = document.querySelectorAll(".alt-img");
// Active CSS-class in images
const activeImg = document.querySelector(".active");
// display image, change on arrows
const displayImage = document.querySelector(".display-img");

/* --------------------------------------------- */

// Counter for alternative images
let count = 0;
console.log(altImgs.length);
console.log(altImgs);

/*********************************************
 ************* EVENT LISTENERS ****************
 **********************************************/
right.addEventListener("click", function (e) {
  count++;
  // Loop for changing active class
  for (let i = 0; i < altImgs.length; i++) {
    // Logic for changing active class
    if (count >= altImgs.length) {
      count = 0;
      displayImage.src = `/flowers/flower-${count}.jpg`;
      displayImage.classList.remove("ani-4");
    } else {
      altImgs[i].classList.remove("active");
      altImgs[count].classList.add("active");
      // Display main image
      displayImage.src = `/flowers/flower-${[count + 1]}.jpg`;
      // Logic for changing animation classes
      displayImage.classList.remove(`ani-${count - 1}`);
      displayImage.classList.add(`ani-${count}`);
    }
  }
  /*Function for adding and removing opacity css-class*/
  addOpacity();
});

left.addEventListener("click", function () {
  count--;
  for (let i = 0; i < altImgs.length; i++) {
    if (count <= -1) {
      count = altImgs.length - 1;
      altImgs[0].classList.remove("active");
    } else {
      altImgs[i].classList.remove("active");
      altImgs[count].classList.add("active");
      // Display main image
      displayImage.src = `/flowers/flower-${[count + 1]}.jpg`;
    }
  }
  /*Function for adding and removing opacity css-class*/
  addOpacity();
});
/*********************************************
 ************* FUNCTION'S *********************
 **********************************************/
// Opacity function for alternative images
function addOpacity() {
  for (let i = 0; i < altImgs.length; i++) {
    if (altImgs[i].classList.contains("active")) {
      console.log("active class");
      altImgs[i].classList.remove("opacity");
    } else {
      altImgs[i].classList.add("opacity");
    }
  }
}
function defaultOpacity() {
  for (let i = 0; i < altImgs.length; i++) {
    if (altImgs[i].classList.contains("active")) {
      console.log("active class");
      altImgs[i].classList.remove("opacity");
    } else {
      altImgs[i].classList.add("opacity");
    }
  }
}

// default functions
defaultOpacity();
