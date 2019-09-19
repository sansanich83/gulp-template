'use strict';
var popupCallback = document.querySelector('.feedback--popup');
var openPopupButton = document.querySelector('.header__callback');
var bodyHolder = document.querySelector('body');
var closePopupButton = document.querySelector('.feedback__close-button');


if (openPopupButton && popupCallback && bodyHolder) {
  openPopupButton.addEventListener('click', function () {
    popupCallback.classList.add('feedback--popup--show');
    bodyHolder.classList.add('feedback--popup--show');
  });
}

if (popupCallback && popupCallback && bodyHolder) {
  popupCallback.addEventListener('click', function () {
    popupCallback.classList.remove('feedback--popup--show');
    bodyHolder.classList.remove('feedback--popup--show');
  });
}

if (closePopupButton && popupCallback && bodyHolder) {
  closePopupButton.addEventListener('click', function () {
    popupCallback.classList.remove('feedback--popup--show');
    bodyHolder.classList.remove('feedback--popup--show');
  });
}

document.addEventListener('keydown', function (evt) {
  if ((evt.keyCode === 27) && popupCallback && bodyHolder) {
    popupCallback.classList.remove('feedback--popup--show');
    bodyHolder.classList.remove('feedback--popup--show');
  }
});
