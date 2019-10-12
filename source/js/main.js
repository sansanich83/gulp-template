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

// собираем все якоря; устанавливаем время анимации и количество кадров
var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
var animationTime = 300;
var framesCount = 20;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    var scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      var scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

var accordeonBtns = document.querySelectorAll('.contacts__section-button');
var i;

for (i = 0; i < accordeonBtns.length; i++) {

  accordeonBtns[i].addEventListener('click', function () {
    if ((this.classList.contains('contacts__section-button--closed'))) {
      for (i = 0; i < accordeonBtns.length; i++) {
        accordeonBtns[i].classList.add('contacts__section-button--closed');
        accordeonBtns[i].parentElement.nextElementSibling.classList.add('contacts__accordion-item--closed');
      }
      this.classList.toggle('contacts__section-button--closed');
      this.parentElement.nextElementSibling.classList.toggle('contacts__accordion-item--closed');
    } else {
      this.classList.toggle('contacts__section-button--closed');
      this.parentElement.nextElementSibling.classList.toggle('contacts__accordion-item--closed');
    }
  });
}

var element = document.getElementById('phone-mask');
var popupPhone = document.getElementById('popup-phone');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
};

var mask = new IMask(element, maskOptions);
var mask = new IMask(popupPhone, maskOptions);
