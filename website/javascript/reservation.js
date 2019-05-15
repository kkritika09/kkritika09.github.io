// hamburger menu for responsive devices
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


// validating the form elements
var inputs = document.querySelectorAll('input');
var form = document.querySelector('#form');

var formItems = [];

var errorField = document.querySelector('.errors');
var errorList = document.querySelector('.errors ul');

for(var i = 0; i <= inputs.length-1; i++) {
  var obj = {};
  obj.input = inputs[i];
  formItems.push(obj);
}

errorField.style.left = '-100%';

form.onsubmit = validate;

function validate(e) {
  errorList.innerHTML = '';
  for(var i = 0; i < formItems.length; i++) {
    var testItem = formItems[i];
    if(testItem.input.value === '') {
      errorField.style.left = '360px';
      createLink(testItem);
    }

  }

  if(errorList.innerHTML !== '') {
    e.preventDefault();
  }

}

function createLink(testItem) {
  var listItem = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.textContent = testItem.input.name + ' field is required : fill in your ' + testItem.input.name + '.';
  anchor.href = '#' + testItem.input.name;
  anchor.onclick = function() {
    testItem.input.focus();
  };
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
