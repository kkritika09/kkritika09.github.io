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
