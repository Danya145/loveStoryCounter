const image = document.getElementsByTagName("img");
const length = image.length;
for (let i = 0; i < length; i++) {
  image[i].addEventListener("click", function () {
    this.setAttribute("id", "fullImage");
    console.log("advfbdgn");
  });
}
const background = document.getElementById("empty");

background.addEventListener("click", function () {
  background.setAttribute("id", "");
  console.log("vsrbt");
});
