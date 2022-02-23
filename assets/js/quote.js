let doc = document.getElementById("quote-p");
let list = ["Рок будет жить!", "Rock is immortal!"];

function randPage(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doIt() {
	let randText = list[randPage(0, list.length-1)]
	doc.innerHTML = randText;
}

doIt();