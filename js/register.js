function formExists(){
	var formFound= document.querySelector("form");
	if (formFound == null){
		results.innerHTML = "Form doesn't exist. ";
	} else{
	}
}
function countFields(expectedResult){
	var countInput= document.querySelectorAll("form input");
	if (countInput.length == expectedResult){
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
			} else {
				results.innerHTML = results.innerHTML+requiredId+": <li>Found id and incorrect required value. </li>";
			}
		}
	}
	if(found == false){
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
			}
		}
		if (found == false){
			results.innerHTML = results.innerHTML+id+": <li>Id does not have an associated label. </li>";
		}
	}
}
results = document.querySelector('.container ul');

function validationTests(){
	var container = document.querySelector('.container');
	if(container.textContent == ""){
		container.innerHTML = "validations results: every validation has passed.";
	}
	container.classList.remove("hidden");
}

formExists();
countFields(4);
checkRequired("name",true);
checkRequired("email",true);
checkRequired("password",true);
checkRequired("repeatPassword",true);
checkLabels();
validationTests()