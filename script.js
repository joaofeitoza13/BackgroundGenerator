var css = document.querySelector("h3");
var btn1 = document.getElementById("btn1")
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

const randomColor = () => {
	//return '#'+Math.random().toString(16).slice(-3)
	return '#' + Math.random().toString(16).slice(-6)
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor() 
	+ ", " 
	+ randomColor()
	+ ")";

	css.textContent = body.style.background + ";";
	console.log(body.style.background);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn1.addEventListener("click", randomGradient);