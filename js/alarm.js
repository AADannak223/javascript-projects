const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

function ringBell() {
    var audio = new Audio('js/Water.mp3');
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    const alarmDate = new Date(alarm.value);
    console.log(alarmDate);
    const now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }

}