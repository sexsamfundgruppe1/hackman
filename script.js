window.addEventListener("load", sidenVises);

"use strict";
let points = 0;
let times = 20;

let showSettingsEffektSound = true;
let showSettingsMusic = true;

function sidenVises() {
	console.log("siden bliver vist");
	showStart();

}


function showStart() {
	console.log("spillet starter");

	document.querySelector("#start").classList.remove("hide");

	document.querySelector("#play_button").addEventListener("click", hideStart);

	document.querySelector("#settings").addEventListener("click", showSettings);
}


function hideStart() {

	console.log("startside gemmes");

	document.querySelector("#start").classList.add("fade_out");
	document.querySelector("#start").addEventListener("animationend", startGame);
}






function showSettings() {
	console.log("showSettings");
	document.querySelector("#menu_background").classList.add("blur");
	document.querySelector("#game_background").classList.add("blur");
	document.querySelector("#settings_menu").classList.remove("hide");
	document.querySelector("#cross").addEventListener("click", hideSettings);
	document.querySelector("#sound").addEventListener("click", toggleSounds);
	document.querySelector("#music").addEventListener("click", toggleMusic);
}

function toggleSounds() {
	console.log("toggleSounds");

	if (showSettingsEffektSound == false) {
		//Her tænder vi for lyden
		showSettingsEffektSound = true;
		document.querySelector("#sound_sprite").classList.add("off_on");
		document.querySelector("#sound_sprite").classList.remove("off");
		document.querySelector("#sound_sprite").addEventListener('animationend', soundsOn);

	} else {
		showSettingsEffektSound = false;
		//Her slukker vi for lyden
		document.querySelector("#sound_sprite").classList.add("on_off");
		document.querySelector("#sound_sprite").classList.remove("on");
		document.querySelector("#sound_sprite").addEventListener('animationend', soundsOff);
	}
}

function soundsOff() {
	document.querySelector("#sound_sprite").removeEventListener('animationend', soundsOff);
	console.log("soundsOff function værdi er " + showSettingsEffektSound);
	document.querySelector("#sound_sprite").classList.remove("on_off");
	document.querySelector("#sound_sprite").classList.add("off");

}

function soundsOn() {
	console.log("soundsOn function værdi er " + showSettingsEffektSound);
	document.querySelector("#sound_sprite").removeEventListener('animationend', soundsOn);
	document.querySelector("#sound_sprite").classList.remove("off_on");
	document.querySelector("#sound_sprite").classList.add("on");
	//    her tændes for efx
	//document.querySelector("#hapshaps").muted = false;
	//document.querySelector("#prut1").muted = false;
}

function toggleMusic() {
	console.log("showSettingsMusic function " + showSettingsMusic);

	if (showSettingsMusic == true) {
		//Her slukker vi for musikken
		showSettingsMusic = false;
		document.querySelector("#music_sprite").classList.add("on_off");
		document.querySelector("#music_sprite").classList.remove("on");
		document.querySelector("#music_sprite").addEventListener('animationend', musicOff);

	} else {
		showSettingsMusic = true;
		document.querySelector("#music_sprite").classList.add("off_on");
		document.querySelector("#music_sprite").classList.remove("off");
		document.querySelector("#music_sprite").addEventListener('animationend', musicOn);

	}
}

function musicOff() {
	console.log("musicOff function værdi er " + showSettingsEffektSound);

	//    her slukkes for musikken
	document.querySelector("#music_sprite").removeEventListener('animationend', musicOff);
	document.querySelector("#music_sprite").classList.remove("on_off");
	document.querySelector("#music_sprite").classList.add("off");

	document.querySelector("#min_musik").muted = true;

}

function musicOn() {
	console.log("musicOn function værdi er " + showSettingsEffektSound);
	document.querySelector("#music_sprite").removeEventListener('animationend', musicOn);
	document.querySelector("#music_sprite").classList.remove("off_on");
	document.querySelector("#music_sprite").classList.add("on");

	//    her tændes for musikken
	document.querySelector("#min_musik").muted = false;

}

function hideSettings() {
	console.log("hideSettings");
	document.querySelector("#settings_menu").classList.add("hide");

	document.querySelector("#menu_background").classList.remove("blur");
	document.querySelector("#game_background").classList.remove("blur");

}



//game starts

function startGame() {
	console.log("spil starter");
	document.querySelector("#min_musik").play();
	document.querySelector("#points").classList.remove("hide");

	//	document.querySelector("#start").classList.remove("fade_out");
	document.querySelector("#phone1").addEventListener("click", clickPhone);
	document.querySelector("#phone2").addEventListener("click", clickPhone);
	document.querySelector("#phone3").addEventListener("click", clickPhone);
	document.querySelector("#phone4").addEventListener("click", clickPhone);
	document.querySelector("#phone5").addEventListener("click", clickPhone);
	document.querySelector("#phone6").addEventListener("click", clickPhone);
	document.querySelector("#phone7").addEventListener("click", clickPhone);
	document.querySelector("#phone8").addEventListener("click", clickPhone);
	document.querySelector("#phone9").addEventListener("click", clickPhone);
	document.querySelector("#phone10").addEventListener("click", clickPhone);
	document.querySelector("#phone11").addEventListener("click", clickPhone);
	document.querySelector("#phone12").addEventListener("click", clickPhone);
	document.querySelector("#phone13").addEventListener("click", clickPhone);
	document.querySelector("#phone14").addEventListener("click", clickPhone);
	document.querySelector("#phone15").addEventListener("click", clickPhone);
	document.querySelector("#phone16").addEventListener("click", clickPhone);
	document.querySelector("#phone17").addEventListener("click", clickPhone);
	document.querySelector("#phone18").addEventListener("click", clickPhone);
	document.querySelector("#phone19").addEventListener("click", clickPhone);
	document.querySelector("#phone20").addEventListener("click", clickPhone);
	document.querySelector("#phone21").addEventListener("click", clickPhone);
	document.querySelector("#phone22").addEventListener("click", clickPhone);
	document.querySelector("#phone23").addEventListener("click", clickPhone);
	document.querySelector("#phone24").addEventListener("click", clickPhone);
	document.querySelector("#phone25").addEventListener("click", clickPhone);

}

function clickPhone() {
	console.log("phone clicked")
	points++;
	document.querySelector("#points").innerHTML = "Point: " + points;
	document.querySelector("#phone1").className = "";

	console.log(this);

	document.querySelector("#phone1").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone2").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone3").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone4").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone5").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone6").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone7").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone8").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone9").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone10").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone11").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone12").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone13").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone14").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone15").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone16").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone17").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone18").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone19").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone20").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	gameStatus();
}

function nyPhone() {
	console.log("nyPhone");
	document.querySelector("#phone1").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone2").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone3").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone4").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone5").classList.add("position" + Math.floor((Math.random() * 5) + 1));
	document.querySelector("#phone6").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone7").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone8").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone9").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone10").classList.add("position" + Math.floor((Math.random() * 10) + 1));
	document.querySelector("#phone11").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone12").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone13").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone14").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone15").classList.add("position" + Math.floor((Math.random() * 15) + 1));
	document.querySelector("#phone16").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone17").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone18").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone19").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	document.querySelector("#phone20").classList.add("position" + Math.floor((Math.random() * 20) + 1));
	//	document.querySelector("position").classList.remove("hide");

}



function gameStatus() {
	if (points == 5) {
		document.querySelector("#level_2").classList.remove("hide");
	}
	if (points == 10) {
		document.querySelector("#level_3").classList.remove("hide");
	}
	if (points == 15) {
		document.querySelector("#level_4").classList.remove("hide");
	}
	if (points == 20) {
		document.querySelector("#level_5").classList.remove("hide");
	}
}
