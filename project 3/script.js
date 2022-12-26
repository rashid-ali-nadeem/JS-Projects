// Getting DOM elements
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// create function for clicking on video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// create function for updating the play / pause icon
function updatePlayIcon () {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// create function for updating the progress
function updateProgress () {
    progress.value = (video.currentTime / video.duration) * 100;

    // set the time for the time stamp
    let mins = Math.floor(video.currentTime / 60);
    if ( mins < 10) {
        mins = '0' + String(mins);
    } 
    let secs = (video.currentTime % 60).toFixed(0);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs} / ${video.duration.toFixed(2)}`;

}

// create function for stop video
function stopVideo () {
    video.currentTime = 0;
    video.pause();
}

// create function to update the video progress using the slider
function setVideoProgress () {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Event Listeners
// 1. Event Listener for clicking on video
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

// 2. Event Listerns for Play button
play.addEventListener('click', toggleVideoStatus);

// 3. Event Listner for stop button
stop.addEventListener('click', stopVideo);

// 4. Event Listener for progress bar
progress.addEventListener('change', setVideoProgress);