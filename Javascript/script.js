var donutScore = 0;

var clickes = 0;

var autoClicker = 15;

var button = document.getElementById('autoClicker');

setInterval(function () {
    button.click()
}, 150)


var sfx = {
    clickDonut: new Audio({
        src: '/wavepop.mp3'
    })

}

function increment() {
    clickes = clickes + 1;
    counter.innerHTML = clickes;

}

function autoClicker() {
    clickes = clickes + 1;
    counter.innerHTML = clickes;
}

function buyAutoCursor() {
    if (clickes >= autoCursor) {

    }

}

function reset() {
    clickes = 0;
    counter.innerHTML = clickes;
}