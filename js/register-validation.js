document.getElementById("name").addEventListener("blur", nameValidation);
document.getElementById("email").addEventListener("blur", emailValidation);
document.getElementById("password").addEventListener("blur", passwordValidation);
document.getElementById("repeatPassword").addEventListener("blur", repPassValidation);

document.getElementById("name").addEventListener("focus", nameFocus);
document.getElementById("email").addEventListener("focus", emailFocus);
document.getElementById("password").addEventListener("focus", passwordFocus);
document.getElementById("repeatPassword").addEventListener("focus", repPassFocus);

function nameFocus(e) {
    var errorMessage = document.querySelector('#nameError');
    errorMessage.classList.add("hidden");
  }

function emailFocus(e) {
  var errorMessage = document.querySelector('#emailError');
  errorMessage.classList.add("hidden");
}

function passwordFocus(e) {
  var errorMessage = document.querySelector('#passwordError');
  errorMessage.classList.add("hidden");
}
function repPassFocus(e) {
    var errorMessage = document.querySelector('#repPassError');
    errorMessage.classList.add("hidden");
  }

function nameValidation(e){
    var expReg = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    var esValido = expReg.test(e.target.value);
    var errorMessage = document.querySelector('#nameError');
    if (esValido==false){
      errorMessage.innerHTML = "Full Name is required";
      errorMessage.classList.remove("hidden");
    }
    else{
      errorMessage.classList.add("hidden");
    }
  }

function emailValidation(e){
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido = expReg.test(e.target.value);
  var errorMessage = document.querySelector('#emailError');
  if (esValido==false){
    errorMessage.innerHTML = "The email adress is invalid";
    errorMessage.classList.remove("hidden");
  }
  else{
    errorMessage.classList.add("hidden");
  }
}

function passwordValidation(e){
  var expReg = /^(?=.*\d)[a-zA-Z0-9]{8,}$/;
  var esValido = expReg.test(e.target.value);
  var errorMessage = document.querySelector('#passwordError');
  if (esValido==false){
    errorMessage.innerHTML = "The password is invalid, it must have numbers and letters";
    errorMessage.classList.remove("hidden");
  }
  else{
    errorMessage.classList.add("hidden");
  }
}

function repPassValidation(e){
    var errorMessage = document.querySelector('#repPassError');
    if(e.target.value == document.querySelector('#password').value){
        errorMessage.classList.add("hidden");
    }else{
        errorMessage.innerHTML = "The password is invalid";
        errorMessage.classList.remove("hidden");
    }
}