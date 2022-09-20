var _a;
var slider = (_a = document.querySelector('.slider')) === null || _a === void 0 ? void 0 : _a.children;
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var totalSlide = slider === null || slider === void 0 ? void 0 : slider.length;
var index = 0;
var duration = 6000;
console.log(totalSlide);
next === null || next === void 0 ? void 0 : next.addEventListener('click', function () {
    slide('next');
});
prev === null || prev === void 0 ? void 0 : prev.addEventListener('click', function () {
    slide('prev');
});
function slide(direction) {
    progress();
    if (direction == 'next') {
        if (index == totalSlide - 1) {
            index = 0;
        }
        else {
            index++;
        }
    }
    if (direction == 'prev') {
        if (index == 0) {
            index = totalSlide - 1;
        }
        else {
            index--;
        }
    }
    clearInterval(time);
    time = setInterval(autorun, duration);
    for (var i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active');
    }
    slider[index].classList.add('active');
}
function progress() {
    var _a;
    var element = document.querySelector('.progress');
    element.innerHTML = '';
    var div = document.createElement('div');
    div.style.height = '5px';
    div.style.width = '0';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.backgroundColor = 'red';
    div.id = 'progress';
    div.style.animation = 'progress ' + duration / 1000 + "s linear";
    (_a = document.querySelector('.progress')) === null || _a === void 0 ? void 0 : _a.appendChild(div);
}
function autorun() {
    slide('next');
}
var time = setInterval(autorun, duration);
progress();
