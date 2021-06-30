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
  document.querySelector('.grid').append(cardElement);
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
var gridElement = document.querySelectorAll('.grid-element');

var deleteFunction = function deleteFunction() {
  var _iterator2 = _createForOfIteratorHelper(deleteBtn),
      _step2;

  try {
    var _loop = function _loop() {
      var deletes = _step2.value;
      deletes.addEventListener('click', function () {
        deletes.parentNode.parentNode.parentNode.removeChild(deletes.parentNode.parentNode);
        console.log('1');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2ZpbGVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtUmVuYW1lIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUNhcmQiLCJzYXZlSW5mbyIsIm5hbWVWYWx1ZSIsImRlc2NyaXB0aW9uVmFsdWUiLCJ0ZXh0Q29udGVudCIsIm9wZW5JbmZvIiwiaW5wdXROYW1lVmFsdWUiLCJpbnB1dERlc2NyaXB0aW9uVmFsdWUiLCJ2YWx1ZSIsImNsb3NlRnVuY3Rpb24iLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJuYW1lSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwibmFtZVByb2ZpbGUiLCJkZXNjcmlwdGlvblByb2ZpbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0aWFsQ2FyZHMiLCJuYW1lIiwibGluayIsImFkZENhcmQiLCJjYXJkVGVtcGxhdGUiLCJjb250ZW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjYXJkRWxlbWVudCIsImNsb25lTm9kZSIsImJhY2tncm91bmRJbWFnZSIsImFwcGVuZCIsImFkZE5ld0NhcmQiLCJlbGVtZW50TGluayIsImVsZW1lbnROYW1lIiwidGl0bGVDYXJkIiwibGlua0NhcmQiLCJkZWxldGVCdG4iLCJncmlkRWxlbWVudCIsImRlbGV0ZUZ1bmN0aW9uIiwiZGVsZXRlcyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJsaWtlcyIsImFjdGl2ZSIsImxpa2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUF6QjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5C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QUFBLDhDQUNGRixTQURFO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBQ2JHLE9BRGE7QUFFbEJBLE1BQUFBLE9BQU8sQ0FBQzdCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQUk7QUFDbEM2QixRQUFBQSxPQUFPLENBQUNDLFVBQVIsQ0FBbUJBLFVBQW5CLENBQThCQSxVQUE5QixDQUF5Q0MsV0FBekMsQ0FBcURGLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkEsVUFBeEU7QUFDQUUsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNILE9BSEQ7QUFGa0I7O0FBQ3RCLDJEQUE4QjtBQUFBO0FBSzdCO0FBTnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPekIsQ0FQRDs7QUFRQUwsY0FBYztBQUNkLElBQU1NLEtBQUssR0FBR2xELFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWQ7O0FBQ0EsU0FBUytDLE1BQVQsR0FBaUI7QUFBQSw4Q0FDSUQsS0FESjtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQUNKRSxJQURJO0FBRVRBLE1BQUFBLElBQUksQ0FBQ3BDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDckNvQyxRQUFBQSxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQiwyQkFBdEI7QUFDSCxPQUZEO0FBRlM7O0FBQ2IsMkRBQXVCO0FBQUE7QUFJdEI7QUFMWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWhCOztBQUNESCxNQUFNLEcsQ0FDTjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLyAvPSAuLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXHJcbiAqL1xyXG5jb25zdCBwcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUnKTtcclxuY29uc3QgZm9ybVJlbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlbmFtZScpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpO1xyXG5jb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNhcmQnKTtcclxuXHJcbmxldCBzYXZlSW5mbyA9IChuYW1lVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUpID0+e1xyXG4gICAgcHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19uYW1lJykudGV4dENvbnRlbnQgPSBuYW1lVmFsdWU7XHJcbiAgICBwcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblZhbHVlO1xyXG59O1xyXG5sZXQgb3BlbkluZm8gPSAoaW5wdXROYW1lVmFsdWUsIGlucHV0RGVzY3JpcHRpb25WYWx1ZSkgPT57XHJcbiAgICBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLW5hbWUnKS52YWx1ZSA9IGlucHV0TmFtZVZhbHVlO1xyXG4gICAgZm9ybVJlbmFtZS5xdWVyeVNlbGVjdG9yKCcjZm9ybS1kZXNjcmlwdGlvbicpLnZhbHVlID0gaW5wdXREZXNjcmlwdGlvblZhbHVlO1xyXG59O1xyXG5sZXQgY2xvc2VGdW5jdGlvbiA9ICgpID0+e1xyXG4gICAgZm9yIChsZXQgY2xvc2Ugb2YgY2xvc2VCdG4pe1xyXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgZm9ybVJlbmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBmb3JtQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5wcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGZvcm1SZW5hbWUucXVlcnlTZWxlY3RvcignI2Zvcm0tbmFtZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGZvcm1SZW5hbWUucXVlcnlTZWxlY3RvcignI2Zvcm0tZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IG5hbWVQcm9maWxlID0gcHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19uYW1lJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblByb2ZpbGUgPSBwcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBvcGVuSW5mbyhuYW1lUHJvZmlsZS50ZXh0Q29udGVudCwgZGVzY3JpcHRpb25Qcm9maWxlLnRleHRDb250ZW50KTtcclxuICAgIGZvcm1SZW5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGNsb3NlRnVuY3Rpb24oKTtcclxuICAgIGZvcm1SZW5hbWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNhdmVJbmZvKG5hbWVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgZm9ybVJlbmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxubGV0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnWW9zZW1pdGUgVmFsbGV5JyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTGFrZSBMb3Vpc2UnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdCYWxkIE1vdW50YWlucycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xhdGVtYXInLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1Zhbm9pc2UgTmF0aW9uYWwgUGFyaycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnTGFnbyBkaSBCcmFpZXMnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZydcclxuICAgIH1cclxuICBdOyBcclxubGV0IGFkZENhcmQgPSAoKSA9PntcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRlbXBsYXRlJykuY29udGVudDtcclxuICAgIGluaXRpYWxDYXJkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnQnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtZWxlbWVudF9faW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnKyAgZWxlbWVudC5saW5rICsgJyknO1xyXG4gICAgICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykuYXBwZW5kKGNhcmRFbGVtZW50KTtcclxuICAgIH0pO1xyXG59O1xyXG4gYWRkQ2FyZCgpO1xyXG5cclxubGV0IGFkZE5ld0NhcmQgPSAoZWxlbWVudExpbmssIGVsZW1lbnROYW1lKSA9PntcclxuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRlbXBsYXRlJykuY29udGVudDtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5ncmlkLWVsZW1lbnQnKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1lbGVtZW50X19pbWcnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcrIGVsZW1lbnRMaW5rICsgJyknO1xyXG4gICAgY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudGV4dENvbnRlbnQgPSBlbGVtZW50TmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykuYXBwZW5kKGNhcmRFbGVtZW50KTtcclxufTtcclxuXHJcblxyXG5wcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIGZvcm1DYXJkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgY2xvc2VGdW5jdGlvbigpO1xyXG59KTtcclxuXHJcbmZvcm1DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gIGNvbnN0IHRpdGxlQ2FyZCA9IGZvcm1DYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjYXJkLXRpdGxlJyk7XHJcbiAgY29uc3QgbGlua0NhcmQgPSBmb3JtQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY2FyZC1saW5rJyk7XHJcbiAgYWRkTmV3Q2FyZChsaW5rQ2FyZC52YWx1ZSwgdGl0bGVDYXJkLnZhbHVlKTtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZm9ybUNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSk7XHJcblxyXG5jb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1lbGVtZW50X190cmFzaCcpO1xyXG5jb25zdCBncmlkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWVsZW1lbnQnKVxyXG5cclxubGV0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT57XHJcbiAgICBmb3IgKGxldCBkZWxldGVzIG9mIGRlbGV0ZUJ0bil7XHJcbiAgICAgICAgZGVsZXRlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGRlbGV0ZXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGVsZXRlcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5kZWxldGVGdW5jdGlvbigpO1xyXG5jb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWVsZW1lbnRfX2xpa2UnKTtcclxuZnVuY3Rpb24gYWN0aXZlKCl7XHJcbiAgICBmb3IgKGxldCBsaWtlIG9mIGxpa2VzKXtcclxuICAgICAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGlrZS5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWVsZW1lbnRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuYWN0aXZlKCk7XHJcbi8vIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1lbGVtZW50X19saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbi8vICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWVsZW1lbnRfX2xpa2VfYWN0aXZlJyk7XHJcbi8vIH0pOyJdfQ==
