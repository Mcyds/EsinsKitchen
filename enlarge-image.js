var modal = document.getElementById("myModal");
var img = document.getElementById("picture");
var modalImg = document.getElementById("fullPicture");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}