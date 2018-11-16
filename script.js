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
    startGame();

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

    //    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#phone1").addEventListener("click", clickPhone);
    document.querySelector("#phone2").addEventListener("click", clickPhone);
    document.querySelector("#phone3").addEventListener("click", clickPhone);
    document.querySelector("#phone4").addEventListener("click", clickPhone);
    document.querySelector("#phone5").addEventListener("click", clickPhone);

}

function clickPhone() {
    console.log("phone clicked")
}
