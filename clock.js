let seconds = 0
let minutes = 0
let hours = 0

function secondRotation(second){
    let degree = second * 6;
    return degree;
}

function minuteRotation(minutes, seconds){
    let minToSec = minutes * 60 + seconds;
    let degree = minToSec * .1;
    return degree;
}

function hourRotation(hours, minutes){
    let hrToMin = hours * 60 + minutes;
    let degree = hrToMin * .5;
    return degree;
}

function tick(){
    seconds ++;

    if (seconds == 60){
        senconds = 0;
        minutes ++;
    }
    
    if (minutes == 60){
        minutes = 0;
        hours ++;
    }

    if (hours == 12){
        hours = 0;
    }
    
    // sting interpolation
    // console.log('${hours}:${minutes}:${senconds}');
    
    secondHand.style.transform = 'rotate(' + secondRotation(seconds) + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteRotation(minutes, seconds) + 'deg)';
    hourHand.style.transform = 'rotate(' + hourRotation(hours, minutes) + 'deg)';

}


//// this is code gets run

document.addEventListener('DOMContentLoaded', function(){

    secondHand = document.getElementById("second");
    minuteHand = document.querySelector('#minute');
    hourHand = document.querySelector('#hour');

    setInterval(tick, 1000);
})

