'use strict';

//Всплывающая надпись BMW сверху
function showBMW() {
    let headBMW = document.querySelector('h1');
    headBMW.className = 'showTextBMW';
}

setTimeout(showBMW, 400);


//Смена изображений BMW
function changeImg() {
    let myImg = document.querySelector('img'),
        mySrc = myImg.getAttribute('src');

    if (mySrc === 'images/bmw.jpg') {
        myImg.setAttribute('src', 'images/bmw2.jpg');
    } else if (mySrc === 'images/bmw2.jpg') {
        myImg.setAttribute('src', 'images/bmw3.jpg');
    } else {
        myImg.setAttribute('src', 'images/bmw.jpg');
    }
}

function hideImg() {
    let myImg = document.querySelector('img');
    myImg.className = 'hideImgBMW';
}

function showImg() {
    let myImg = document.querySelector('img');
    myImg.className = '';
}

setInterval(hideImg, 9000);
setInterval(changeImg, 9300);
setInterval(showImg, 9300);



//Смена пользователя
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'For ' + myName;
}

myButton.addEventListener('click', setUserName);





