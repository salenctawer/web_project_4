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
        formRename.style.display = 'none';
        formCard.style.display = 'none';
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
  formRename.style.display = 'flex';
  closeFunction();
  formRename.addEventListener('submit', function (e) {
    e.preventDefault();
    saveInfo(nameInput.value, descriptionInput.value);
    formRename.style.display = 'none';
  });
});
var initialCards = [{
  name: 'Yosemite Valley',
  link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
}, {
  name: 'Lake Louise',
  link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
}, {
  name: 'Bald Mountains',
  link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
}, {
  name: 'Latemar',
  link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
}, {
  name: 'Vanoise National Park',
  link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
}, {
  name: 'Lago di Braies',
  link: 'https://code.s3.yandex.net/web-code/lago.jpg'
}];

var addCard = function addCard() {
  var cardTemplate = document.querySelector('#card-template').content;
  initialCards.forEach(function (element) {
    var cardElement = cardTemplate.querySelector('.grid-element').cloneNode(true);
    cardElement.querySelector('.grid-element__img').style.backgroundImage = 'url(' + element.link + ')';
    cardElement.querySelector('.title').textContent = element.name;
    document.querySelector('.grid').append(cardElement);
  });
};

addCard();

var addNewCard = function addNewCard(elementLink, elementName) {
  var cardTemplate = document.querySelector('#card-template').content;
  var cardElement = cardTemplate.querySelector('.grid-element').cloneNode(true);
  cardElement.querySelector('.grid-element__img').style.backgroundImage = 'url(' + elementLink + ')';
  cardElement.querySelector('.title').textContent = elementName;
  document.querySelector('.grid').prepend(cardElement);
  initialCards.push({
    name: elementName,
    link: elementLink
  });
};

profileContainer.querySelector('.add-button').addEventListener('click', function () {
  formCard.style.display = 'flex';
  closeFunction();
});
formCard.addEventListener('submit', function (e) {
  var titleCard = formCard.querySelector('#card-title');
  var linkCard = formCard.querySelector('#card-link');
  addNewCard(linkCard.value, titleCard.value);
  e.preventDefault();
  formCard.style.display = 'none';
});
var deleteBtn = document.querySelectorAll('.grid-element__trash');

var deleteFunction = function deleteFunction() {
  var _iterator2 = _createForOfIteratorHelper(deleteBtn),
      _step2;

  try {
    var _loop = function _loop() {
      var deletes = _step2.value;
      deletes.addEventListener('click', function (e) {
        e.stopPropagation();
        deletes.parentNode.parentNode.parentNode.removeChild(deletes.parentNode.parentNode);
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

deleteFunction();
var likes = document.querySelectorAll('.grid-element__like');

function active() {
  var _iterator3 = _createForOfIteratorHelper(likes),
      _step3;

  try {
    var _loop2 = function _loop2() {
      var like = _step3.value;
      like.addEventListener('click', function () {
        like.classList.toggle('grid-element__like_active');
      });
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

active(); // container.querySelector('.grid-element__like').addEventListener('click', (e)=> {
//     e.target.classList.toggle('grid-element__like_active');
// });

var openPhoto = function openPhoto(photoLink, photoTitle) {
  var photoTemplate = document.querySelector('#photo-template').content;
  var photoContent = photoTemplate.querySelector('.photo-content').cloneNode(true);
  photoContent.querySelector('.photo-element__img').style.backgroundImage = photoLink;
  photoContent.querySelector('.photo-element__title').textContent = photoTitle;
  var closePhoto = photoContent.querySelector('.close');
  closePhoto.addEventListener('click', function () {
    closePhoto.parentNode.parentNode.parentNode.parentNode.removeChild(closePhoto.parentNode.parentNode.parentNode);
  });
  document.querySelector('.body').prepend(photoContent);
};

var clickPhoto = function clickPhoto() {
  var photoGrid = document.querySelectorAll('.grid-element__img');

  var _iterator4 = _createForOfIteratorHelper(photoGrid),
      _step4;

  try {
    var _loop3 = function _loop3() {
      var photo = _step4.value;
      photo.addEventListener('click', function () {
        var srcContainer = photo.style.backgroundImage;
        var titleGrid = document.querySelector('.grid-element .title').textContent;
        openPhoto(srcContainer, titleGrid);
      });
    };

    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};

clickPhoto();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2ZpbGVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtUmVuYW1lIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUNhcmQiLCJzYXZlSW5mbyIsIm5hbWVWYWx1ZSIsImRlc2NyaXB0aW9uVmFsdWUiLCJ0ZXh0Q29udGVudCIsIm9wZW5JbmZvIiwiaW5wdXROYW1lVmFsdWUiLCJpbnB1dERlc2NyaXB0aW9uVmFsdWUiLCJ2YWx1ZSIsImNsb3NlRnVuY3Rpb24iLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJuYW1lSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwibmFtZVByb2ZpbGUiLCJkZXNjcmlwdGlvblByb2ZpbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0aWFsQ2FyZHMiLCJuYW1lIiwibGluayIsImFkZENhcmQiLCJjYXJkVGVtcGxhdGUiLCJjb250ZW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjYXJkRWxlbWVudCIsImNsb25lTm9kZSIsImJhY2tncm91bmRJbWFnZSIsImFwcGVuZCIsImFkZE5ld0NhcmQiLCJlbGVtZW50TGluayIsImVsZW1lbnROYW1lIiwicHJlcGVuZCIsInB1c2giLCJ0aXRsZUNhcmQiLCJsaW5rQ2FyZCIsImRlbGV0ZUJ0biIsImRlbGV0ZUZ1bmN0aW9uIiwiZGVsZXRlcyIsInN0b3BQcm9wYWdhdGlvbiIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImxpa2VzIiwiYWN0aXZlIiwibGlrZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9wZW5QaG90byIsInBob3RvTGluayIsInBob3RvVGl0bGUiLCJwaG90b1RlbXBsYXRlIiwicGhvdG9Db250ZW50IiwiY2xvc2VQaG90byIsImNsaWNrUGhvdG8iLCJwaG90b0dyaWQiLCJwaG90byIsInNyY0NvbnRhaW5lciIsInRpdGxlR3JpZCJdLCJt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TixDQUFZa0IsZUFBakM7QUFDQSxZQUFNOEIsU0FBUyxHQUFHakUsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixFQUErQ1EsV0FBakU7QUFDQThDLFFBQUFBLFNBQVMsQ0FBQ1MsWUFBRCxFQUFlQyxTQUFmLENBQVQ7QUFDSCxPQUpEO0FBSGM7O0FBRWxCLDJEQUE0QjtBQUFBO0FBTTNCO0FBUmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTckIsQ0FURDs7QUFXQUosVUFBVSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4vIC89IC4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuICovXHJcbmNvbnN0IHByb2ZpbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZScpO1xyXG5jb25zdCBmb3JtUmVuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcmVuYW1lJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlJyk7XHJcbmNvbnN0IGZvcm1DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2FyZCcpO1xyXG5cclxubGV0IHNhdmVJbmZvID0gKG5hbWVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSkgPT57XHJcbiAgICBwcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX25hbWUnKS50ZXh0Q29udGVudCA9IG5hbWVWYWx1ZTtcclxuICAgIHByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVmFsdWU7XHJcbn07XHJcbmxldCBvcGVuSW5mbyA9IChpbnB1dE5hbWVWYWx1ZSwgaW5wdXREZXNjcmlwdGlvblZhbHVlKSA9PntcclxuICAgIGZvcm1SZW5hbWUucXVlcnlTZWxlY3RvcignI2Zvcm0tbmFtZScpLnZhbHVlID0gaW5wdXROYW1lVmFsdWU7XHJcbiAgICBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWRlc2NyaXB0aW9uJykudmFsdWUgPSBpbnB1dERlc2NyaXB0aW9uVmFsdWU7XHJcbn07XHJcbmxldCBjbG9zZUZ1bmN0aW9uID0gKCkgPT57XHJcbiAgICBmb3IgKGxldCBjbG9zZSBvZiBjbG9zZUJ0bil7XHJcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBmb3JtUmVuYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGZvcm1DYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbnByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZm9ybVJlbmFtZS5xdWVyeVNlbGVjdG9yKCcjZm9ybS1uYW1lJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZm9ybVJlbmFtZS5xdWVyeVNlbGVjdG9yKCcjZm9ybS1kZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgbmFtZVByb2ZpbGUgPSBwcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX25hbWUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUHJvZmlsZSA9IHByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fZGVzY3JpcHRpb24nKTtcclxuICAgIG9wZW5JbmZvKG5hbWVQcm9maWxlLnRleHRDb250ZW50LCBkZXNjcmlwdGlvblByb2ZpbGUudGV4dENvbnRlbnQpO1xyXG4gICAgZm9ybVJlbmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgY2xvc2VGdW5jdGlvbigpO1xyXG4gICAgZm9ybVJlbmFtZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2F2ZUluZm8obmFtZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlKTtcclxuICAgICAgICBmb3JtUmVuYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5sZXQgaW5pdGlhbENhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdZb3NlbWl0ZSBWYWxsZXknLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdMYWtlIExvdWlzZScsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JhbGQgTW91bnRhaW5zJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTGF0ZW1hcicsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnVmFub2lzZSBOYXRpb25hbCBQYXJrJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdMYWdvIGRpIEJyYWllcycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnJ1xyXG4gICAgfVxyXG5dOyBcclxubGV0IGFkZENhcmQgPSAoKSA9PntcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRlbXBsYXRlJykuY29udGVudDtcclxuICAgIGluaXRpYWxDYXJkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnQnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtZWxlbWVudF9faW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnKyAgZWxlbWVudC5saW5rICsgJyknO1xyXG4gICAgICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykuYXBwZW5kKGNhcmRFbGVtZW50KTtcclxuICAgIH0pO1xyXG59O1xyXG5hZGRDYXJkKCk7XHJcblxyXG5sZXQgYWRkTmV3Q2FyZCA9IChlbGVtZW50TGluaywgZWxlbWVudE5hbWUpID0+e1xyXG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmQtdGVtcGxhdGUnKS5jb250ZW50O1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmdyaWQtZWxlbWVudCcpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnRfX2ltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJysgZWxlbWVudExpbmsgKyAnKSc7XHJcbiAgICBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudCA9IGVsZW1lbnROYW1lO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKS5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICAgIGluaXRpYWxDYXJkcy5wdXNoKHtuYW1lOmVsZW1lbnROYW1lLCBsaW5rOmVsZW1lbnRMaW5rfSlcclxufTtcclxuXHJcblxyXG5wcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZm9ybUNhcmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGNsb3NlRnVuY3Rpb24oKTtcclxufSk7XHJcblxyXG5mb3JtQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcclxuICAgIGNvbnN0IHRpdGxlQ2FyZCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRpdGxlJyk7XHJcbiAgICBjb25zdCBsaW5rQ2FyZCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLWxpbmsnKTtcclxuICAgIGFkZE5ld0NhcmQobGlua0NhcmQudmFsdWUsIHRpdGxlQ2FyZC52YWx1ZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmb3JtQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuXHJcbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWVsZW1lbnRfX3RyYXNoJyk7XHJcblxyXG5sZXQgZGVsZXRlRnVuY3Rpb24gPSAoKSA9PntcclxuICAgIGZvciAobGV0IGRlbGV0ZXMgb2YgZGVsZXRlQnRuKXtcclxuICAgICAgICBkZWxldGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgZGVsZXRlcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkZWxldGVzLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbmRlbGV0ZUZ1bmN0aW9uKCk7XHJcbmNvbnN0IGxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtZWxlbWVudF9fbGlrZScpO1xyXG5mdW5jdGlvbiBhY3RpdmUoKXtcclxuICAgIGZvciAobGV0IGxpa2Ugb2YgbGlrZXMpe1xyXG4gICAgICAgIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsaWtlLmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtZWxlbWVudF9fbGlrZV9hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5hY3RpdmUoKTtcclxuLy8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnRfX2xpa2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuLy8gICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtZWxlbWVudF9fbGlrZV9hY3RpdmUnKTtcclxuLy8gfSk7XHJcbmxldCBvcGVuUGhvdG8gPSAocGhvdG9MaW5rLCBwaG90b1RpdGxlKSA9PntcclxuICAgIGNvbnN0IHBob3RvVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvdG8tdGVtcGxhdGUnKS5jb250ZW50O1xyXG4gICAgY29uc3QgcGhvdG9Db250ZW50ID0gcGhvdG9UZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcucGhvdG8tY29udGVudCcpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHBob3RvQ29udGVudC5xdWVyeVNlbGVjdG9yKCcucGhvdG8tZWxlbWVudF9faW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gcGhvdG9MaW5rO1xyXG4gICAgcGhvdG9Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90by1lbGVtZW50X190aXRsZScpLnRleHRDb250ZW50ID0gcGhvdG9UaXRsZTtcclxuICAgIGNvbnN0IGNsb3NlUGhvdG8gPSBwaG90b0NvbnRlbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbiAgICBjbG9zZVBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBjbG9zZVBob3RvLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvc2VQaG90by5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JykucHJlcGVuZChwaG90b0NvbnRlbnQpO1xyXG59O1xyXG5sZXQgY2xpY2tQaG90byA9ICgpID0+e1xyXG4gICAgY29uc3QgcGhvdG9HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtZWxlbWVudF9faW1nJyk7XHJcbiAgICBmb3IgKGxldCBwaG90byBvZiBwaG90b0dyaWQpe1xyXG4gICAgICAgIHBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3JjQ29udGFpbmVyID0gcGhvdG8uc3R5bGUuYmFja2dyb3VuZEltYWdlO1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1lbGVtZW50IC50aXRsZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBvcGVuUGhvdG8oc3JjQ29udGFpbmVyLCB0aXRsZUdyaWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGlja1Bob3RvKCk7Il19
