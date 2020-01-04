
let currentTime = new Date();
let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();
let currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds;
document.body.innerHTML = '<h1>' + currentTimeString + '</h1>';
