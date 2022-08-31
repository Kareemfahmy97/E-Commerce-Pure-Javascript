var nameInput = document.getElementById("fname");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var radioBtn1 = document.getElementById("genderM");
var radioBtn2 = document.getElementById("genderF");
var genderLabel = document.getElementById("gender");
var dropdownInput = document.getElementById("country");
var submitHandler = document.getElementById("submit");
var resetHandler = document.getElementById('reset')
var errMsg = document.getElementById("errMsg");
var arrChecked = [];

var nameFormat = /^([^0-9]*)$/;
var emailFormat =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Real time validation
nameInput.addEventListener("input", function (e) {
  if (!nameFormat.test(e.target.value)) {
    e.target.style.border = "2px solid green";
    errMsg.innerHTML = "";
  }
  if (e.target.value.trim() == "" || !nameFormat.test(e.target.value)) {
    e.target.style.border = "3px solid red";
    errMsg.innerText = "Please Enter a valid name";
    errMsg.className = "errorMsg";
  }
});

emailInput.addEventListener("input", function (e) {
  if (e.target.value.length > 1) {
    e.target.style.border = "2px solid green";
    errMsg.innerHTML = "";
  }
  if (e.target.value.trim() == "" || !emailFormat.test(e.target.value)) {
    e.target.style.border = "3px solid red";
    errMsg.innerText = "Please Enter a valid Email";
    errMsg.className = "errorMsg";
  }
});

passInput.addEventListener("input", function (e) {
  if (e.target.value.trim == "" || e.target.value.length < 8) {
    e.target.style.border = "3px solid red";
    errMsg.innerHTML = "<p id='passErr'>Password Must be 8 Char at least</p>";
    errMsg.className = "errorMsg";
  }
  if (e.target.value.length >= 8) {
    e.target.style.border = "2px solid green";
    errMsg.innerHTML = "";
  }
});

// Preventing duplication of error msgs
function clearInner() {
  errMsg.innerHTML = "";
}


// Validation of every field
var validatePass = function () {
  if (passInput.value.trim == "" || passInput.value.length < 8) {
    passInput.style.border = "3px solid red";
    errMsg.innerHTML += "<p> Must be 8 Char at least.</p>";
    errMsg.className = "errorMsg";
    return false;
  } else {
    return true;
  }
};
var validateRadiobtn = function () {
  if (!radioBtn1.checked && !radioBtn2.checked) {
    errMsg.innerHTML += "<p>Please Choose your Gender.</p>";
    errMsg.className = "errorMsg";
    return false;
  } else {
    return true;
  }
};

var validateDropdown = function () {
  if (dropdownInput.options[dropdownInput.selectedIndex].value == "") {
    errMsg.innerHTML += "<p>Please select your country</p>";
    errMsg.className = "errorMsg";
    return false;
  } else {
    return true;
  }
};
var validateEmail = function () {
  if (emailInput.value.trim() == "" || !emailFormat.test(emailInput.value)) {
    emailInput.style.border = "3px solid red";
    errMsg.innerHTML += "<p>Please Enter a valid Email.</p>";
    errMsg.className = "errorMsg";
    return false;
  } else {
    return true;
  }
};
var validateName = function () {
  if (nameInput.value.trim() == "" || !nameFormat.test(nameInput.value)) {
    nameInput.style.border = "3px solid red";
    errMsg.innerHTML += "<p>Please Enter a valid Name.</p>";
    errMsg.className = "errorMsg";
    return false;
  } else {
    return true;
  }
};

// Reseting all values
var resetForm = function(){
  errMsg.innerHTML ='';
  nameInput.style.border = '';
  emailInput.style.border = '';
  passInput.style.border = '';
  emailInput.value = '';
  nameInput.value = '';
  passInput.value = '';
  dropdownInput.value = '';
  radioBtn1.checked = false;
  radioBtn2.checked = false;
}


submitHandler.addEventListener("click", function (e) {
  e.preventDefault();
  if(validateName() &&  validateDropdown() && validatePass() && validateEmail() && validateRadiobtn()){
    resetForm();
  }else{
    clearInner();
    validateName();
    validateEmail();
    validatePass();
    validateRadiobtn();
    validateDropdown();
  }  
});

resetHandler.addEventListener('click', function(e){
  e.preventDefault();
   if(validateName() || validateCheckbox() || validateDropdown() || validatePass() || validateEmail() || validateRadiobtn()){
    var confirmReset = confirm('Are you sure you want to reset?');
    if(confirmReset){
    resetForm();
    }else{
      return false
    }
  }else{
    resetForm();
  }
})
