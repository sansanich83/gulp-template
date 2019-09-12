'use strict';
var popupCallback = document.querySelector('.popup-callback');
var openPopupButton = document.querySelector('.popup-callback__open-button');
var bodyHolder = document.querySelector('body');


openPopupButton.addEventListener('click', function () {
  popupCallback.classList.add('popup-callback--show');
  bodyHolder.classList.add('popup-callback--show');
});

popupCallback.addEventListener('click', function () {
  popupCallback.classList.remove('popup-callback--show');
  bodyHolder.classList.remove('popup-callback--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupCallback.classList.remove('popup-callback--show');
    bodyHolder.classList.remove('popup-callback--show');
  }
});
