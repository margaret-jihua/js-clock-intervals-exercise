function secondRotation(second){
    let degree = second * 6;
    return degree;
}

function minuteRotation(minutes, seconds){
    let minToSec = minutes * 60 + seconds;
    let degree = minToSec * .1;
    return degree;
}

console.log(minuteRotation(10,20));

function hourRotation(hours, minutes){
    let hrToMin = hours * 60 + minutes;
    let degree = hrToMin * .5;
    return degree;
}

console.log(hourRotation(3,3));