document.getElementById("email").addEventListener("blur", emailValidation);
document.getElementById("password").addEventListener("blur", passwordValidation);

document.getElementById("email").addEventListener("focus", emailFocus);
document.getElementById("password").addEventListener("focus", passwordFocus);

function emailFocus(e) {
  var errorMessage = document.querySelector('#emailError');
  errorMessage.classList.add("hidden");
}

function passwordFocus(e) {
  var errorMessage = document.querySelector('#passwordError');
  errorMessage.classList.add("hidden");
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
  var expReg = /^[a-zA-Z0-9]{8,}$/;
  var esValido = expReg.test(e.target.value);
  var errorMessage = document.querySelector('#passwordError');
  if (esValido==false){
    errorMessage.innerHTML = "The password is invalid";
    errorMessage.classList.remove("hidden");
  }
  else{
    errorMessage.classList.add("hidden");
  }
}