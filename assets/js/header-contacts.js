let flag = false;
$(".li").click(function () {
	if (!flag) {
		$(".li > ul").slideDown();
	} else {
		$(".li > ul").slideUp();
	}
	flag = !flag;
})