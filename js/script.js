
function searchPicture () {
  var smallPicture = document.getElementsByClassName('smallPicture')

  var windowWidth = window.width();
  var windowHeight = window.height();

  smallPicture.style.top = windowHeight / 2 - 100 + "px";
  smallPicture.style.left = windowWidth / 2 - 100 + "px";
}
