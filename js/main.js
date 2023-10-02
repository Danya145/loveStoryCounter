function changeImage(screenWidth) {
  if (screenWidth < 1000) {
    const changeImg = document.getElementById("changeImg");
    changeImg.src = "pics/main/gl.jpg";
  } else {
    const changeImg = document.getElementById("changeImg");
    changeImg.src = "pics/main/gl1.jpg";
  }
}
function changeBackground(screenWidth) {
  if (screenWidth < 1000) {
    document.body.style.background = "url('pics/main/fon1.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.background = "url('pics/main/fon.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
  }
}

function someFunc() {
  const screenWidth = window.innerWidth;
  changeImage(screenWidth);
  changeBackground(screenWidth);
}
window.addEventListener("resize", function () {
  someFunc();
});

someFunc();
getYear();
