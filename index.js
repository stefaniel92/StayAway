	var beachBG = false;

	var background = document.getElementById("landing-page");

	document.getElementById("landing-page").style.transition = "all 2s ease-in-out";

	setInterval(function(){
		if (beachBG) {
		background.style.backgroundImage = "url('images/city.jpg')";
	} else {
		background.style.backgroundImage = "url('images/beach.jpg')";
	}
	beachBG = !beachBG
}, 8000);
