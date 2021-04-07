function formExists(){
	var formFound= document.querySelector("form");
	if (formFound == null){
		console.log("Form doesn't exist");
		results.innerHTML = "Form doesn't exist. ";
	} else{
		console.log("Form exist");
		results.innerHTML = "<li>Form exist. </li>";
	}
}
function countFields(expectedResult){
	var countInput= document.querySelectorAll("form input");
	if (countInput.length == expectedResult){
		console.log("Quantity of fields correct");
		results.innerHTML = results.innerHTML+"<li> Quantity of fields correct. </li>";
	} else{
		console.log("Quantity of fields is not correct")
		results.innerHTML = results.innerHTML+"<li> Quantity of fields is not correct. </li>";

	}
}
function checkRequired(requiredId,required){
	var inputs= document.querySelectorAll("form input");
	found = false;
	for (let index = 0; index < inputs.length; index++) {
		const element = inputs[index];
		if(element.id == requiredId){
			found = true;
			if (element.required == required){
				console.log(requiredId+": Found id and correct required value");
				results.innerHTML = results.innerHTML+requiredId+": <li>Found id and correct required value. </li>";
			} else {
				console.log(requiredId+": Found id and incorrect required value");
				results.innerHTML = results.innerHTML+requiredId+": <li>Found id and incorrect required value. </li>";
			}
		}
	}
	if(found == false){
		console.log(requiredId+": Id not found");
		results.innerHTML = results.innerHTML+requiredId+": <li>Id not found. </li>";
	}
}
function checkLabels(){
	var foundInputs = document.querySelectorAll("form input");
	var foundLabels = document.querySelectorAll("form label");
	for (let index = 0; index < foundInputs.length; index++) {
		const id = foundInputs[index].id;
		found = false;
		for (let index = 0; index < foundLabels.length; index++) {
			const labelFor = foundLabels[index].getAttribute("for");
			if(id == labelFor){
				found = true;
				console.log(id,labelFor+": Element id has an associated label");
				results.innerHTML = results.innerHTML+id+": <li>Element id has an associated label. </li>";
			}
		}
		if (found == false){
			console.log(id+": Id does not have an associated label");
			results.innerHTML = results.innerHTML+id+": <li>Id does not have an associated label. </li>";
		}
	}
}
loginButton = document.getElementsByName("login");
if( loginButton != null){
	loginType = loginButton[0].type;
	comparation = loginType == "submit";
	if (comparation){
		console.log("It has a login input.");
	}
	else{
		console.log("It doesn't have a login input.");
	}
}
resetButton = document.getElementsByName("reset");
if( resetButton != null){
	resetType = resetButton[0].type;
	comparation = resetType == "reset";
	if (comparation){
		console.log("It has a reset input.");
	}
	else{
		console.log("It doesn't have a reset input.");
	}
}
anchor = document.getElementById("register-link");
anchorHref = anchor.href;
anchorLink ="http://127.0.0.1:5500/register.html";
if(anchorHref == anchorLink){
	console.log("It has a correct anchor tag.");
}
else{
	console.log("It doesn't have a correct anchor tag.");
}
results = document.querySelector('.container ul');
console.log(results);

function validationTests(){
	var container = document.querySelector('.container');
	if(container.textContent == ""){
		container.innerHTML = "validations results: every validation has passed.";
	}
	container.classList.remove("hidden");
}

formExists();
countFields(2);
checkRequired("email",true);
checkRequired("password",true);
checkLabels();
validationTests()