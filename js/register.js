function formExists(){
	formFound= document.querySelector("form");
	if (formFound == null){
		console.log("Form doesn't exist");
		results.innerHTML = "Form doesn't exist. ";
	} else{
		console.log("Form exist");
		results.innerHTML = "<li>Form exist. </li>";
	}
}
function countFields(expectedResult){
	countInput= document.querySelectorAll("form input");
	if (countInput.length == expectedResult){
		console.log("Quantity of fields correct");
		results.innerHTML = results.innerHTML+"<li> Quantity of fields correct. </li>";
	} else{
		console.log("Quantity of fields is not correct")
		results.innerHTML = results.innerHTML+"<li> Quantity of fields is not correct. </li>";

	}
}
function checkRequired(requiredId,required){
	inputs= document.querySelectorAll("form input");
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
	foundInputs = document.querySelectorAll("form input");
	foundLabels = document.querySelectorAll("form label");
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
results = document.querySelector('.container ul');
console.log(results);


formExists();
countFields(4);
checkRequired("name",true);
checkRequired("email",true);
checkRequired("password",true);
checkRequired("repeatPassword",true);
checkLabels();