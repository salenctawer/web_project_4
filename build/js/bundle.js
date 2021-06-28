"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
/ /= ../../node_modules/jquery/dist/jquery.js
 */
// const editBtn = document.querySelector('.profile-info__button');
// const form = document.querySelector('.form-content');
// const closeBtn = document.querySelector('.close');
// const formName = form.querySelector('.form-name');
// const formDescription = form.querySelector('.form-description');
// const profileName = document.querySelector('.profile-info__name');
// const profileDescription = document.querySelector('.profile-info__description');
// editBtn.addEventListener('click', function(){
//     form.style.display = 'block';
//     formName.value=profileName.innerHTML;
//     formDescription.value=profileDescription.innerHTML;
// });
// closeBtn.addEventListener('click', function(){
//     form.style.display = 'none';
// });
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     profileName.innerHTML=formName.value;
//     profileDescription.innerHTML=formDescription.value;
//     form.style.display = 'none';
// });
var profileContainer = document.querySelector('.profile');
var formRename = document.querySelector('.form-rename');
var closeBtn = document.querySelectorAll('.close');
var formCard = document.querySelector('.form-card');

var saveInfo = function saveInfo(nameValue, descriptionValue) {
  profileContainer.querySelector('.profile-info__name').textContent = nameValue;
  profileContainer.querySelector('.profile-info__description').textContent = descriptionValue;
};

var openInfo = function openInfo(inputNameValue, inputDescriptionValue) {
  formRename.querySelector('.form-name').value = inputNameValue;
  formRename.querySelector('.form-description').value = inputDescriptionValue;
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

  ;
};

profileContainer.querySelector('.profile-info__button').addEventListener('click', function () {
  var nameInput = formRename.querySelector('.form-name');
  var descriptionInput = formRename.querySelector('.form-description');
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
profileContainer.querySelector('.add-button').addEventListener('click', function () {
  formCard.style.display = 'flex';
  closeFunction();
});
var likes = document.querySelectorAll('.grid-element__like');

function active() {
  var _iterator2 = _createForOfIteratorHelper(likes),
      _step2;

  try {
    var _loop = function _loop() {
      var like = _step2.value;
      like.addEventListener('click', function () {
        like.classList.toggle('grid-element__like_active');
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
}

active(); // container.querySelector('.grid-element__like').addEventListener('click', (e)=> {
//     e.target.classList.toggle('grid-element__like_active');
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2ZpbGVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtUmVuYW1lIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUNhcmQiLCJzYXZlSW5mbyIsIm5hbWVWYWx1ZSIsImRlc2NyaXB0aW9uVmFsdWUiLCJ0ZXh0Q29udGVudCIsIm9wZW5JbmZvIiwiaW5wdXROYW1lVmFsdWUiLCJpbnB1dERlc2NyaXB0aW9uVmFsdWUiLCJ2YWx1ZSIsImNsb3NlRnVuY3Rpb24iLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJuYW1lSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwibmFtZVByb2ZpbGUiLCJkZXNjcmlwdGlvblByb2ZpbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJsaWtlcyIsImFjdGl2ZSIsImxpa2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUF6QjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNJLGdCQUFULENBQTBCLFFBQTFCLENBQWpCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7O0FBRUEsSUFBSUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxnQkFBWixFQUFnQztBQUMzQ1QsRUFBQUEsZ0JB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QUE7QUFBQTtBQUFBO0FBTWhCOztBQUNESCxNQUFNLEcsQ0FDTjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLyAvPSAuLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXHJcbiAqL1xyXG4vLyBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fYnV0dG9uJyk7XHJcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XHJcbi8vIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbi8vIGNvbnN0IGZvcm1OYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1uYW1lJyk7XHJcbi8vIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tZGVzY3JpcHRpb24nKTtcclxuLy8gY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19uYW1lJyk7XHJcbi8vIGNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4vLyBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuLy8gICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbi8vICAgICBmb3JtTmFtZS52YWx1ZT1wcm9maWxlTmFtZS5pbm5lckhUTUw7XHJcbi8vICAgICBmb3JtRGVzY3JpcHRpb24udmFsdWU9cHJvZmlsZURlc2NyaXB0aW9uLmlubmVySFRNTDtcclxuLy8gfSk7XHJcbi8vIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuLy8gICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gfSk7XHJcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBwcm9maWxlTmFtZS5pbm5lckhUTUw9Zm9ybU5hbWUudmFsdWU7XHJcbi8vICAgICBwcm9maWxlRGVzY3JpcHRpb24uaW5uZXJIVE1MPWZvcm1EZXNjcmlwdGlvbi52YWx1ZTtcclxuLy8gICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gfSk7XHJcblxyXG5jb25zdCBwcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUnKTtcclxuY29uc3QgZm9ybVJlbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlbmFtZScpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpO1xyXG5jb25zdCBmb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNhcmQnKTtcclxuXHJcbmxldCBzYXZlSW5mbyA9IChuYW1lVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUpID0+e1xyXG4gICAgcHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19uYW1lJykudGV4dENvbnRlbnQgPSBuYW1lVmFsdWU7XHJcbiAgICBwcm9maWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblZhbHVlO1xyXG59O1xyXG5sZXQgb3BlbkluZm8gPSAoaW5wdXROYW1lVmFsdWUsIGlucHV0RGVzY3JpcHRpb25WYWx1ZSkgPT57XHJcbiAgICBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW5hbWUnKS52YWx1ZSA9IGlucHV0TmFtZVZhbHVlO1xyXG4gICAgZm9ybVJlbmFtZS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1kZXNjcmlwdGlvbicpLnZhbHVlID0gaW5wdXREZXNjcmlwdGlvblZhbHVlO1xyXG59O1xyXG5sZXQgY2xvc2VGdW5jdGlvbiA9ICgpID0+e1xyXG4gICAgZm9yIChsZXQgY2xvc2Ugb2YgY2xvc2VCdG4pe1xyXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgZm9ybVJlbmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBmb3JtQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufTtcclxucHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW5hbWUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBmb3JtUmVuYW1lLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBuYW1lUHJvZmlsZSA9IHByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fbmFtZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Qcm9maWxlID0gcHJvZmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19kZXNjcmlwdGlvbicpO1xyXG4gICAgb3BlbkluZm8obmFtZVByb2ZpbGUudGV4dENvbnRlbnQsIGRlc2NyaXB0aW9uUHJvZmlsZS50ZXh0Q29udGVudCk7XHJcbiAgICBmb3JtUmVuYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBjbG9zZUZ1bmN0aW9uKCk7XHJcbiAgICBmb3JtUmVuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzYXZlSW5mbyhuYW1lSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGZvcm1SZW5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnByb2ZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBmb3JtQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgY2xvc2VGdW5jdGlvbigpO1xyXG59KTtcclxuY29uc3QgbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1lbGVtZW50X19saWtlJyk7XHJcbmZ1bmN0aW9uIGFjdGl2ZSgpe1xyXG4gICAgZm9yIChsZXQgbGlrZSBvZiBsaWtlcyl7XHJcbiAgICAgICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxpa2UuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1lbGVtZW50X19saWtlX2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmFjdGl2ZSgpO1xyXG4vLyBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmdyaWQtZWxlbWVudF9fbGlrZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4vLyAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1lbGVtZW50X19saWtlX2FjdGl2ZScpO1xyXG4vLyB9KTsiXX0=
