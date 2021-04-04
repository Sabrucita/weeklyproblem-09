function formExists(){
    formFound= document.querySelector("form");
    if (formFound == null){
        console.log("Form doesn't exist");
    } else{
        console.log("Form exist");
    }
}
function countFields(expectedResult){
    countInput= document.querySelectorAll("form input");
    if (countInput.length == expectedResult){
        console.log("Quantity of fields correct");
    } else{
        console.log("Quantity of fields is not correct")
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
            } else {
                console.log(requiredId+": Found id and incorrect required value");
            }
        }
    }
    if(found == false){
        console.log(requiredId+": Id not found");
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
            }
        }
        if (found == false){
            console.log(id+": Id does not have an associated label");
        }
    }
}
checkLabels();
//checkRequired("name",true);
//checkRequired("email",true);
//checkRequired("password",true);
//checkRequired("password2",true);
//countFields(4);
//formExists();