"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
/ /= ../../node_modules/jquery/dist/jquery.js
 */
var profileContainer = document.querySelector('.profile');
var formRename = document.querySelector('.form-rename');
var closeBtn = document.querySelectorAll('.close');
var formCard = document.querySelector('.form-card');

var saveInfo = function saveInfo(nameValue, descriptionValue) {
  profileContainer.querySelector('.profile-info__name').textContent = nameValue;
  profileContainer.querySelector('.profile-info__description').textContent = descriptionValue;
};

var openInfo = function openInfo(inputNameValue, inputDescriptionValue) {
  formRename.querySelector('#form-name').value = inputNameValue;
  formRename.querySelector('#form-description').value = inputDescriptionValue;
};

var closeFunction = function closeFunction() {
  var _iterator = _createForOfIteratorHelper(closeBtn),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var close = _step.value;
      close.addEventListener('click', function () {
        formRename.classList.remove('--active');
        formCard.classList.remove('--active');
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

profileContainer.querySelector('.profile-info__button').addEventListener('click', function () {
  var nameInput = formRename.querySelector('#form-name');
  var descriptionInput = formRename.querySelector('#form-description');
  var nameProfile = profileContainer.querySelector('.profile-info__name');
  var descriptionProfile = profileContainer.querySelector('.profile-info__description');
  openInfo(nameProfile.textContent, descriptionProfile.textContent);
  formRename.classList.add('--active');
  closeFunction();
  formRename.addEventListener('submit', function (e) {
    e.preventDefault();
    saveInfo(nameInput.value, descriptionInput.value);
    formRename.classList.remove('--active');
  });
});
var initialCards = [{
  name: 'Lago di Braies',
  link: 'https://code.s3.yandex.net/web-code/lago.jpg'
}, {
  name: 'Vanoise National Park',
  link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
}, {
  name: 'Latemar',
  link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
}, {
  name: 'Bald Mountains',
  link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
}, {
  name: 'Lake Louise',
  link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
}, {
  name: 'Yosemite Valley',
  link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
}];

var addNewCard = function addNewCard(elementLink, elementName) {
  var cardTemplate = document.querySelector('#card-template').content;
  var cardElement = cardTemplate.querySelector('.grid-element').cloneNode(true);
  cardElement.querySelector('.grid-element__img').style.backgroundImage = 'url(' + elementLink + ')';
  cardElement.querySelector('.title').textContent = elementName;
  document.querySelector('.grid').prepend(cardElement);
  cardElement.querySelector('.grid-element__trash').addEventListener('click', function (e) {
    e.stopPropagation();
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
  });
  cardElement.querySelector('.grid-element__like').addEventListener('click', function (e) {
    e.target.classList.toggle('grid-element__like_active');
  });
};

var addCard = function addCard() {
  initialCards.forEach(function (element) {
    addNewCard(element.link, element.name);
  });
};

addCard();
profileContainer.querySelector('.add-button').addEventListener('click', function () {
  formCard.classList.add('--active');
  closeFunction();
});
formCard.addEventListener('submit', function (e) {
  var titleCard = formCard.querySelector('#card-title');
  var linkCard = formCard.querySelector('#card-link');
  addNewCard(linkCard.value, titleCard.value);
  e.preventDefault();
  formCard.classList.remove('--active');
});

var openPhoto = function openPhoto(photoLink, photoTitle) {
  var photoTemplate = document.querySelector('#photo-template').content;
  var photoContent = photoTemplate.querySelector('.photo-content').cloneNode(true);
  photoContent.querySelector('.photo-element__img').style.backgroundImage = photoLink;
  photoContent.querySelector('.photo-element__title').textContent = photoTitle;
  var closePhoto = photoContent.querySelector('.close');
  closePhoto.addEventListener('click', function () {
    closePhoto.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(closePhoto.parentNode.parentNode.parentNode.parentNode);
  });
  document.querySelector('.body').prepend(photoContent);
};

var clickPhoto = function clickPhoto() {
  var photoGrid = document.querySelectorAll('.grid-element__img');

  var _iterator2 = _createForOfIteratorHelper(photoGrid),
      _step2;

  try {
    var _loop = function _loop() {
      var photo = _step2.value;
      photo.addEventListener('click', function () {
        var srcContainer = photo.style.backgroundImage;
        var titleGrid = document.querySelector('.grid-element .title').textContent;
        openPhoto(srcContainer, titleGrid);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

clickPhoto(); // enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2ZpbGVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtUmVuYW1lIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUNhcmQiLCJzYXZlSW5mbyIsIm5hbWVWYWx1ZSIsImRlc2NyaXB0aW9uVmFsdWUiLCJ0ZXh0Q29udGVudCIsIm9wZW5JbmZvIiwiaW5wdXROYW1lVmFsdWUiLCJpbnB1dERlc2NyaXB0aW9uVmFsdWUiLCJ2YWx1ZSIsImNsb3NlRnVuY3Rpb24iLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuYW1lSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwibmFtZVByb2ZpbGUiLCJkZXNjcmlwdGlvblByb2ZpbGUiLCJhZGQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0aWFsQ2FyZHMiLCJuYW1lIiwibGluayIsImFkZE5ld0NhcmQiLCJlbGVtZW50TGluayIsImVsZW1lbnROYW1lIiwiY2FyZFRlbXBsYXRlIiwiY29udGVudCIsImNhcmRFbGVtZW50IiwiY2xvbmVOb2RlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcmVwZW5kIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidG9nZ2xlIiwiYWRkQ2FyZCIsImZvckVhY2giLCJlbGVtZW50IiwidGl0bGVDYXJkIiwibGlua0NhcmQiLCJvcGVuUGhvdG8iLCJwaG90b0xpbmsiLCJwaG90b1RpdGxlIiwicGhvdG9UZW1wbGF0ZSIsInBob3RvQ29udGVudCIsImNsb3NlUGhvdG8iLCJjbGlja1Bob3RvIiwicGhvdG9HcmlkIiwicGhvdG8iLCJzcmNDb250YWluZXIiLCJ0aXRsZUdyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FB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QUFBLEtBQUssQ0FBQ3pDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQUk7QUFDaEMsWUFBTTBDLFlBQVksR0FBR0QsS0FBSyxDQUFDckIsS0FBTixDQUFZQyxlQUFqQztBQUNBLFlBQU1zQixTQUFTLEdBQUczRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLEVBQStDUSxXQUFqRTtBQUNBd0MsUUFBQUEsU0FBUyxDQUFDUyxZQUFELEVBQWVDLFNBQWYsQ0FBVDtBQUNILE9BSkQ7QUFIYzs7QUFFbEIsMkRBQTRCO0FBQUE7QUFNM0I7QUFSaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNyQixDQVREOztBQVdBSixVQUFVLEcsQ0FDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi8gLz0gLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xyXG4gKi9cclxuY29uc3QgcHJvZmlsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlJyk7XHJcbmNvbnN0IGZvcm1SZW5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZW5hbWUnKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKTtcclxuY29uc3QgZm9ybUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jYXJkJyk7XHJcblxyXG5sZXQgc2F2ZUluZm8gPSAobmFtZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlKSA9PntcclxuICAgIHByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fbmFtZScpLnRleHRDb250ZW50ID0gbmFtZVZhbHVlO1xyXG4gICAgcHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25WYWx1ZTtcclxufTtcclxubGV0IG9wZW5JbmZvID0gKGlucHV0TmFtZVZhbHVlLCBpbnB1dERlc2NyaXB0aW9uVmFsdWUpID0+e1xyXG4gICAgZm9ybVJlbmFtZS5xdWVyeVNlbGVjdG9yKCcjZm9ybS1uYW1lJykudmFsdWUgPSBpbnB1dE5hbWVWYWx1ZTtcclxuICAgIGZvcm1SZW5hbWUucXVlcnlTZWxlY3RvcignI2Zvcm0tZGVzY3JpcHRpb24nKS52YWx1ZSA9IGlucHV0RGVzY3JpcHRpb25WYWx1ZTtcclxufTtcclxubGV0IGNsb3NlRnVuY3Rpb24gPSAoKSA9PntcclxuICAgIGZvciAobGV0IGNsb3NlIG9mIGNsb3NlQnRuKXtcclxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGZvcm1SZW5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgZm9ybUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxucHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLW5hbWUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBuYW1lUHJvZmlsZSA9IHByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fbmFtZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Qcm9maWxlID0gcHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19kZXNjcmlwdGlvbicpO1xyXG4gICAgb3BlbkluZm8obmFtZVByb2ZpbGUudGV4dENvbnRlbnQsIGRlc2NyaXB0aW9uUHJvZmlsZS50ZXh0Q29udGVudCk7XHJcbiAgICBmb3JtUmVuYW1lLmNsYXNzTGlzdC5hZGQoJy0tYWN0aXZlJyk7XHJcbiAgICBjbG9zZUZ1bmN0aW9uKCk7XHJcbiAgICBmb3JtUmVuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzYXZlSW5mbyhuYW1lSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGZvcm1SZW5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnLS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmxldCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xhZ28gZGkgQnJhaWVzJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdWYW5vaXNlIE5hdGlvbmFsIFBhcmsnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xhdGVtYXInLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JhbGQgTW91bnRhaW5zJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTGFrZSBMb3Vpc2UnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdZb3NlbWl0ZSBWYWxsZXknLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGcnXHJcbiAgICB9XHJcbl07IFxyXG5sZXQgYWRkTmV3Q2FyZCA9IChlbGVtZW50TGluaywgZWxlbWVudE5hbWUpID0+e1xyXG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmQtdGVtcGxhdGUnKS5jb250ZW50O1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmdyaWQtZWxlbWVudCcpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnRfX2ltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJysgZWxlbWVudExpbmsgKyAnKSc7XHJcbiAgICBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudCA9IGVsZW1lbnROYW1lO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKS5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnRfX3RyYXNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICB9KTtcclxuICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnRfX2xpa2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWVsZW1lbnRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufTtcclxubGV0IGFkZENhcmQgPSAoKSA9PntcclxuICAgIGluaXRpYWxDYXJkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGFkZE5ld0NhcmQoZWxlbWVudC5saW5rLCBlbGVtZW50Lm5hbWUpO1xyXG4gICAgfSk7XHJcbn07XHJcbmFkZENhcmQoKTtcclxuXHJcblxyXG5wcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZm9ybUNhcmQuY2xhc3NMaXN0LmFkZCgnLS1hY3RpdmUnKTtcclxuICAgIGNsb3NlRnVuY3Rpb24oKTtcclxufSk7XHJcblxyXG5mb3JtQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcclxuICAgIGNvbnN0IHRpdGxlQ2FyZCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRpdGxlJyk7XHJcbiAgICBjb25zdCBsaW5rQ2FyZCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLWxpbmsnKTtcclxuICAgIGFkZE5ld0NhcmQobGlua0NhcmQudmFsdWUsIHRpdGxlQ2FyZC52YWx1ZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmb3JtQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCctLWFjdGl2ZScpO1xyXG59KTtcclxuXHJcbmxldCBvcGVuUGhvdG8gPSAocGhvdG9MaW5rLCBwaG90b1RpdGxlKSA9PntcclxuICAgIGNvbnN0IHBob3RvVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvdG8tdGVtcGxhdGUnKS5jb250ZW50O1xyXG4gICAgY29uc3QgcGhvdG9Db250ZW50ID0gcGhvdG9UZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcucGhvdG8tY29udGVudCcpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHBob3RvQ29udGVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG8tZWxlbWVudF9faW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gcGhvdG9MaW5rO1xyXG4gICAgcGhvdG9Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90by1lbGVtZW50X190aXRsZScpLnRleHRDb250ZW50ID0gcGhvdG9UaXRsZTtcclxuICAgIGNvbnN0IGNsb3NlUGhvdG8gPSBwaG90b0NvbnRlbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbiAgICBjbG9zZVBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBjbG9zZVBob3RvLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9zZVBob3RvLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpLnByZXBlbmQocGhvdG9Db250ZW50KTtcclxufTtcclxubGV0IGNsaWNrUGhvdG8gPSAoKSA9PntcclxuICAgIGNvbnN0IHBob3RvR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWVsZW1lbnRfX2ltZycpO1xyXG4gICAgZm9yIChsZXQgcGhvdG8gb2YgcGhvdG9HcmlkKXtcclxuICAgICAgICBwaG90by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHNyY0NvbnRhaW5lciA9IHBob3RvLnN0eWxlLmJhY2tncm91bmRJbWFnZTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtZWxlbWVudCAudGl0bGUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgb3BlblBob3RvKHNyY0NvbnRhaW5lciwgdGl0bGVHcmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsaWNrUGhvdG8oKTtcclxuLy8gZW5hYmxlVmFsaWRhdGlvbih7XHJcbi8vICAgICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4vLyAgICAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4vLyAgICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX2J1dHRvbicsXHJcbi8vICAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9kaXNhYmxlZCcsXHJcbi8vICAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXHJcbi8vICAgICBlcnJvckNsYXNzOiAncG9wdXBfX2Vycm9yX3Zpc2libGUnXHJcbi8vIH0pOyJdfQ==
