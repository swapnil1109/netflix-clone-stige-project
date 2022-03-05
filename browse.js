var btns = document.querySelector(".btn");

var openVideo = function() {

  var video = document.querySelector(".video");
  video.css('display', 'block')

  

  // trailerbox.onclick = function() {
  //   modal.css('display', 'none');
  //   // When the user clicks anywhere outside of the modal, close it
  // }
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.css('display', 'none');
  //   }
  // }

};

for (var i = 0; i < btns.length; i++) {
  btns.addEventListener('click', openVideo, false);


}