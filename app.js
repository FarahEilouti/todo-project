
var answersArray = [];


function greet(){

var userName = prompt("Enter your name please")
answersArray.push(userName);

return userName;
}

// --------------------------
function genderSelect(userName) {

var gender = prompt('Select gender')
answersArray.push(gender); 

if (gender == 'male') {
    alert ("Welcome Mr. "+ userName)
} else if (gender == 'female') {
    alert("Welcome Mrs. " + userName)}
else{
    alert("Welcome " + userName)
}

}

// --------------------------------------

function userAge(){

var userAge = prompt("Enter your age please:")

while (userAge <= 0){
    alert("Please enter a valid age. ")
    userAge = prompt("Enter your age please:")

}
answersArray.push(userAge);
} 
// -------------------------------------

function userExperience1(){

var AcceptMessage = confirm("Do you want to skip the welcoming message?")
if (AcceptMessage == false){
    alert("Welcome to our website, feel free to explore! ")
}
}
// ------------------------------------------
function userExperience2(){

var enjoy = prompt("are you enjoying browsing this website?")
if(enjoy === 'yes' || enjoy == 'no'){
    alert("Ok, thanks");
    answersArray.push(enjoy)
}else{
    alert("Invalid answer")
    answersArray.push("invalid")
}
}
// -------------------------------------------

function userExperience3(){

var share = prompt("Will you share our website link?")
if(share === 'yes' || share == 'no'){
    alert("Ok, thanks");
    answersArray.push(share)
}else{
    alert("Invalid answer")
    answersArray.push("invalid")
}
}
 // --------------------------------------------
function userExperience4(){

var suggest = prompt("Do you have suggestions to enhance our website?")
if(suggest === 'yes'){
    alert("Please provide us by email");
    answersArray.push(suggest)
}else if (suggest === 'no'){
    alert("Thank you.")
    answersArray.push(suggest)
}else{
    alert("Invalid answer")
    answersArray.push("invalid")
}

}



var employeeName = greet();
genderSelect(employeeName);
userAge();
userExperience1();
userExperience2();
userExperience3();
userExperience4();
console.log(answersArray);
