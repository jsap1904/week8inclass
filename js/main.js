//week 7 exercise to move to week 8

// console.log("print to console");
// alert("alert");
// document.write("print to page");

// var username = prompt("what is your name?");
// 	console.log(username);

// string ("hello hi hello")
// array ["red", 1, true, 4]
// boolean (true,false)
// number (1,2,3,4)

// var red = 1
// var blue = 2
// var green = 3
// var colors = (blue + red + green) 
// 	console.log(colors);

// var whatColor = prompt("red or blue?") 


// if(whatColor === "red") {
// 	console.log("red");
	
// }
// else  if(whatColor === "blue") {
// 	console.log("blue");
	
// }else {
// 	console.log("green");
// }

// for(var i=1;i<=20;i++) {
// 	console.log(i);}

// var one = 1
// var two = 2

// function add(a, b) {
// 	document.write (a+b)
// }
// add(one,two)

// var username = prompt("what is your name?") 
// 	console.log(username);
// 	alert("hi "+ username);

// var name1 = "alice"
// var name2 = "bob"


// var username = prompt("what is your name?") 

// 	if(username === name1) {
// 		alert("Hi "+ "alice");
// 	}
// 	else if(username === name2) {
// 		alert("Hi "+ "bob");
	
// 	}
// 	else {
// 		while(username != "alice" || "bob") {
// 		 prompt("what is your name?");
			
// 	}
// }

// var stolenText = document.getElementById('one').textContent = "Good Bye"

// document.getElementById('two').innerHTML = stolenText

function getInfo() {
var username = document.getElementById("username").value
var password = document.getElementById('password').value

document.write("username: "+ username + " and Password:" + password)
}