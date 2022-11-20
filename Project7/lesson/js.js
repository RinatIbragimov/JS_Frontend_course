let timerId = setTimeout(log, 2000);

function log() {
    console.log('Hello');
    timerId = setTimeout(log, 2000);
}