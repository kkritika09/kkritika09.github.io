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


const card = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modalContent");
var getCloseBtn = document.querySelector('.closeBtn');
function open(e){
  modal.classList.add('open');
  const src = e.currentTarget.querySelector('img').src;
  modalImage.src = src;
}

function close(){
  modal.classList.remove('open');
}

card.forEach(image => image.addEventListener('click', open));
getCloseBtn.addEventListener('click', close);
