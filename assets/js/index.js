let str = "page/";
let minPage = 1;
let maxPage = 5;

function randPage(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.location.href = str + randPage(minPage, maxPage) + ".html";