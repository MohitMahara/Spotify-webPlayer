// songs card clicks

var length = document.querySelectorAll(".song-card").length;
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".song-card")[i].addEventListener("click", function () {
        var name = $(this).attr('id');
        soundMaker(name);
        remove(name);
    });
}

// selecting audios for stop and play audio.

var one = document.querySelector("#callYou");
var two = document.querySelector("#snap");
var three = document.querySelector("#besabriya");
var four = document.querySelector("#jeena");
var five = document.querySelector("#meriJaan");
var six = document.querySelector("#glitch");
var seven = document.querySelector("#old");
var eight = document.querySelector("#house");
var nine = document.querySelector("#Ami");
var ten = document.querySelector("#Feeling-Good");

// for stop all audio.

var allAudios = document.querySelectorAll("audio");

function stopAudio() {
    allAudios.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Playing sound


function soundMaker(music) {

    switch (music) {

        case 'first':
            stopAudio();
            one.play();
            sound = one;
            PausePlay(one);

            break;

        case 'second':
            stopAudio();
            two.play();
            sound = two;
            PausePlay(two);
            break;

        case 'third':
            stopAudio();
            three.play();
            sound = three;
            PausePlay(three);
            break;

        case 'fourth':
            stopAudio();
            four.play();
            sound = four;
            PausePlay(four);
            break;

        case 'fifth':
            stopAudio();
            five.play();
            sound = five;
            PausePlay(five);
            break;

        case 'sixth':
            stopAudio();
            six.play();
            sound = six;
            PausePlay(six);
            break;

        case 'seventh':
            stopAudio();
            seven.play();
            sound = seven;
            PausePlay(seven);
            break;

        case 'eighth':
            stopAudio();
            eight.play();
            sound = eight;
            PausePlay(eight);
            break;

        case 'nineth':
            stopAudio();
            nine.play();
            sound = nine;
            PausePlay(nine);
            break;

        case 'tenth':
            stopAudio();
            ten.play();
            sound = ten;
            PausePlay(ten);
            break;

        default:
            stopAudio();
            break;
    }
}

//  for removing 

function remove(Class) {

    switch (Class) {

        case 'first':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".one").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("one");
            document.querySelector(".song-info-text").innerHTML = "At my wrost";
            home(".one");
            break;

        case 'second':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".two").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("two");
            document.querySelector(".song-info-text").innerHTML = "Span";
            home(".two")
            break;

        case 'third':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".three").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("three");
            document.querySelector(".song-info-text").innerHTML = "Besabriya";
            home(".three");
            break;

        case 'fourth':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".four").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("four");
            document.querySelector(".song-info-text").innerHTML = "Jeena Jeena";
            home(".four");
            break;

        case 'fifth':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".five").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("five");
            document.querySelector(".song-info-text").innerHTML = "Maan Meri Jaan";
            home(".five");
            break;

        case 'sixth':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".six").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("six");
            document.querySelector(".song-info-text").innerHTML = "Glich";
            home(".six");
            break;


        case 'seventh':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".seven").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("seven");
            document.querySelector(".song-info-text").innerHTML = "Dekha ek khwaab";
            home(".seven");
            break;


        case 'eighth':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".eight").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("eight");
            document.querySelector(".song-info-text").innerHTML = "House of Memories";
            home(".eight");
            break;

        case 'nineth':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".nine").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("nine");
            document.querySelector(".song-info-text").innerHTML = "ami tomake";
            home(".nine");
            break;

        case 'tenth':
            document.querySelector(".first-row").classList.add("Display");
            document.querySelector(".second-row").classList.add("Display");
            document.querySelector(".ten").classList.remove("Display");
            document.querySelector(".song-bg").classList.remove("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
            document.querySelector(".song-bg").classList.add("ten");
            document.querySelector(".song-info-text").innerHTML = "FEELING GOOD";
            home(".ten");
            break;

    }

}

// Home buttons
function home(Display) {
    document.querySelector(".home").addEventListener("click", function () {
        document.querySelector(".first-row").classList.remove("Display");
        document.querySelector(".second-row").classList.remove("Display");
        document.querySelector(Display).classList.add("Display");
    });

    document.querySelector(".back").addEventListener("click", function () {
        document.querySelector(".first-row").classList.remove("Display");
        document.querySelector(".second-row").classList.remove("Display");
        document.querySelector(Display).classList.add("Display");
    });

}


// Pause and play.
let PauseButton = document.querySelector(".pause");

function PausePlay(sound) {
    PauseButton.classList.remove('fa-circle-play');
    PauseButton.classList.add('fa-pause-circle');
    document.querySelector(".music-playing-icon").style.opacity = 1;
    Timeupdate(sound);
}

document.querySelector(".pause").addEventListener("click", function () {
    if (sound.paused || sound.currentTime <= 0) {
        sound.play();
        document.querySelector(".music-playing-icon").classList.remove('Display');
        PauseButton.classList.remove('fa-circle-play');
        PauseButton.classList.add('fa-pause-circle');
        document.querySelector(".music-playing-icon").style.opacity = 1;
        document.querySelector("")
    } else {
        sound.pause();
        document.querySelector(".music-playing-icon").classList.add('Display');
        PauseButton.classList.remove('fa-pause-circle');
        PauseButton.classList.add('fa-circle-play');
        document.querySelector(".music-playing-icon").style.opacity = 0;
    }
});



// update value

var myProgressBar = document.getElementById('myProgressBar');

function Timeupdate(sound) {
    sound.addEventListener('timeupdate', () => {
        var progress = parseInt((sound.currentTime / sound.duration) * 100);
        myProgressBar.value = progress;

        // Current Time.
        var currentTime = document.querySelector(".current-time");

        var mins = Math.floor(sound.currentTime / 60);
        if (mins < 10) {
            mins = '0' + String(mins);
        }
        var secs = Math.floor(sound.currentTime % 60);
        if (secs < 10) {
            secs = '0' + String(secs);
        }

        currentTime.innerHTML=(mins + ':' + secs);

    
        // Audio duration
        var duration = document.querySelector(".duration");
        var minutes = parseInt(sound.duration / 60, 10);
        var seconds = parseInt(sound.duration % 60);
        duration.innerHTML = (minutes + ':' + seconds);

      if(mins==minutes&&secs==seconds){
        currentTime.innerHTML="00:00";
        myProgressBar.value=0;
    document.querySelector(".music-playing-icon").style.opacity = 0;
    PauseButton.classList.remove('fa-pause-circle');
    PauseButton.classList.add('fa-circle-play');

      }

    });
    myProgressBar.addEventListener('change', () => {

        sound.currentTime = (myProgressBar.value * sound.duration) / 100;
    });

}



// click me
document.querySelector(".click").addEventListener("click", function () {
    location.reload();
});