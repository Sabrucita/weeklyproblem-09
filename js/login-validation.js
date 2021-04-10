document.getElementById("email").addEventListener("blur", emailValidation);
document.getElementById("password").addEventListener("blur", passwordValidation);

document.getElementById("submit").addEventListener("click", FormValues);

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

function FormValues(e){
	e.preventDefault();
	var container = document.querySelector('.container');
	container.innerHTML ="Email: "+document.querySelector('#email').value+
	"\nPassword: "+document.querySelector('#password').value;
	fetch('https://jsonplaceholder.typicode.com/users?email='+document.querySelector('#email').value)
		.then(response => response.json())
		.then(json => console.log(json))
	console.log("https://jsonplaceholder.typicode.com/users?email="+document.querySelector('#email').value);
}