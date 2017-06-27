var num = 6;
var colors = generateRandomColors(num);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var reset = document.querySelector("#reset");
var stat = document.querySelector("#status");
var mode = document.querySelectorAll(".mode");
var pickedColor = pickRandomColor();
var backgroundColor = "#232323"



resetGame();


reset.addEventListener("click", function(){
	resetGame();
})

for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected")
			mode[1].classList.remove("selected")
			this.classList.add("selected");
			(this.textContent === "EASY") ? num=3 : num=6
			resetGame();
	})
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return ("rgb("+r+", "+g+", "+b+")");
};

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	};
	return arr
};



function pickRandomColor (){
	var ran = Math.floor(Math.random() * num);
	return colors[ran]
};


function gameArea(){
	//make squares clickable
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clicked = this.style.background
			if (clicked === pickedColor){
				changeColor(pickedColor)
				h1.style.background = pickedColor
				reset.textContent = "PLAY AGAIN"
				stat.textContent = "	CORRECT"
			}else{
				this.style.background = "#232323"
				stat.textContent = "TRY AGAIN!"
			}
			})
		//check if clicked squares correspond with picked color
	}

}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color
	}
}

function resetGame(){
	h1.style.background="steelblue";
	reset.textContent= "NEW COLOR";
	stat.textContent = "";
	colors = generateRandomColors(num)
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	};
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	gameArea()
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i] = colors[i]
		}else{
			squares[i].style.display = "none"
		}
	}
	
}


