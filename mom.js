var username = document.getElementById("username")
var password = document.getElementById("password")
var submit = document.getElementById("submit")

var validity = {"username": "kashish","password": "kashish"}


submit.addEventListener("click",function valid(){
	if (username.value === validity.username && password.value === validity.password) {
	alert("Correct")
	}else{
	alert("Incorrect")
}});
