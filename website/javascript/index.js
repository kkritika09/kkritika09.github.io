$(window).load(function()
{
	$(".loader").fadeOut("slow");
});

$(window).ready(function(){
  $('.overlay-box').click(function(){
    window.location = "../website/menu.html";
  });
});

$(window).ready(function(){
	var btn = $('.slide-content button');
	btn.click(function(){
		window.location = "../website/blog.html";
	});
});
var menuOpen = false;
var getMenuToggle = document.querySelector(".menu-toggle");
getMenuToggle.addEventListener("click", function(){
  var getNav = document.querySelector("nav");
  if(menuOpen==false){
  getNav.style.width = "100%";
  getNav.style.visibility = "visible";
  menuOpen = true;
  }
  else if(menuOpen==true){
    getNav.style.width= "0";
    getNav.style.visibility = "hidden";
    menuOpen = false;
  }
});

let getSlideImages = document.querySelectorAll(".slide"),
getArrowLeft = document.querySelector("#left-arrow"),
getArrowRight = document.querySelector("#right-arrow"),
current = 0;

// reset the image so that none of the images are displayed at the beginning
function reset(){
  for(var i=0; i<getSlideImages.length; i++){
    getSlideImages[i].style.display = "none";
  }
}
// only the image at 0 index is being dislayed
function showImage(){
  reset();
  getSlideImages[0].style.display = "block";
}
//to display the images on the left
function slideLeft(){
  reset();
  getSlideImages[current -1].style.display = "block";
  current--;
}
// event fired when the left arrow button is clicked
getArrowLeft.addEventListener("click", function()
{
	if (current==0)
	{
		current = getSlideImages.length;
	}
	slideLeft();
});
//to display the images on the right
function slideRight(){
  reset();
  getSlideImages[current +1].style.display = "block";
  current++;
}
//event fired whent he right arrow button is clicked
getArrowRight.addEventListener("click",function() {
  if(current == getSlideImages.length -1){
    current = -1;
  }
  slideRight();
});
//calling the function shoImage
showImage();



// automatic slideshow for customer reviews div
var index =0;
automaticShow();
function automaticShow(){
  var getSlidesText = document.querySelectorAll(".slides");
// clearing out the slides by default at first
  for(var i = 0; i<getSlidesText.length; i++){
    getSlidesText[i].style.display = "none";
  }
  index++;
  if(index > getSlidesText.length )
      {index = 1;}
      // displaying the slides
getSlidesText[index -1].style.display = "block";
  setTimeout(automaticShow, 4000);
}
