"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
/ /= ../../node_modules/jquery/dist/jquery.js
 */
var editBtn = document.querySelector('.profile-info__button');
var form = document.querySelector('.form-content');
var closeBtn = document.querySelector('.close');
var formName = form.querySelector('.form-name');
var formDescription = form.querySelector('.form-description');
var profileName = document.querySelector('.profile-info__name');
var profileDescription = document.querySelector('.profile-info__description');
editBtn.addEventListener('click', function () {
  form.style.display = 'block';
  formName.value = profileName.innerHTML;
  formDescription.value = profileDescription.innerHTML;
});
closeBtn.addEventListener('click', function () {
  form.style.display = 'none';
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  profileName.innerHTML = formName.value;
  profileDescription.innerHTML = formDescription.value;
  form.style.display = 'none';
});
var likes = document.querySelectorAll('.grid-element__like');

function active() {
  var _iterator = _createForOfIteratorHelper(likes),
      _step;

  try {
    var _loop = function _loop() {
      var like = _step.value;
      like.addEventListener('click', function () {
        like.classList.toggle('grid-element__like_active');
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

active(); // container.querySelector('.grid-element__like').addEventListener('click', (e)=> {
//     e.target.classList.toggle('grid-element__like_active');
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImVkaXRCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwiY2xvc2VCdG4iLCJmb3JtTmFtZSIsImZvcm1EZXNjcmlwdGlvbiIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlrZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlIiwibGlrZSIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBaEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0EsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxJQUFNRyxRQUFRLEdBQUdGLElBQUksQ0FBQ0QsYUFBTCxDQUFtQixZQUFuQixDQUFqQjtBQUNBLElBQU1JLGVBQWUsR0FBR0gsSUFBSSxDQUFDRCxhQUFMLENBQW1CLG1CQUFuQixDQUF4QjtBQUNBLElBQU1LLFdBQVcsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUFwQjtBQUNBLElBQU1NLGtCQUFrQixHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBQTNCO0FBRUFGLE9BQU8sQ0FBQ1MsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUN4Q04sRUFBQUEsSUFBSSxDQUFDTyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsT0FBckI7QUFDQU4sRUFBQUEsUUFBUSxDQUFDTyxLQUFULEdBQWVMLFdBQVcsQ0FBQ00sU0FBM0I7QUFDQVAsRUFBQUEsZUFBZSxDQUFDTSxLQUFoQixHQUFzQkosa0JBQWtCLENBQUNLLFNBQXpDO0FBQ0gsQ0FKRDtBQUtBVCxRQUFRLENBQUNLLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVU7QUFDekNOLEVBQUFBLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0gsQ0FGRDtBQUdBUixJQUFJLENBQUNNLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQVNLLENBQVQsRUFBVztBQUN2Q0EsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FSLEVBQUFBLFdBQVcsQ0FBQ00sU0FBWixHQUFzQlIsUUFBUSxDQUFDTyxLQUEvQjtBQUNBSixFQUFBQSxrQkFBa0IsQ0FBQ0ssU0FBbkIsR0FBNkJQLGVBQWUsQ0FBQ00sS0FBN0M7QUFDQVQsRUFBQUEsSUFBSSxDQUFDTyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDSCxDQUxEO0FBTUEsSUFBTUssS0FBSyxHQUFHZixRQUFRLENBQUNnQixnQkFBVCxDQUEwQixxQkFBMUIsQ0FBZDs7QUFDQSxTQUFTQyxNQUFULEdBQWlCO0FBQUEsNkNBQ0lGLEtBREo7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFDSkcsSUFESTtBQUVUQSxNQUFBQSxJQUFJLENBQUNWLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDdENVLFFBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLDJCQUF0QjtBQUNGLE9BRkQ7QUFGUzs7QUFDYix3REFBdUI7QUFBQTtBQUl0QjtBQUxZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNaEI7O0FBQ0RILE1BQU0sRyxDQUNOO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4vIC89IC4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuICovXHJcbmNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19idXR0b24nKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRlbnQnKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuY29uc3QgZm9ybU5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW5hbWUnKTtcclxuY29uc3QgZm9ybURlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1kZXNjcmlwdGlvbicpO1xyXG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX25hbWUnKTtcclxuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fZGVzY3JpcHRpb24nKTtcclxuXHJcbmVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGZvcm1OYW1lLnZhbHVlPXByb2ZpbGVOYW1lLmlubmVySFRNTDtcclxuICAgIGZvcm1EZXNjcmlwdGlvbi52YWx1ZT1wcm9maWxlRGVzY3JpcHRpb24uaW5uZXJIVE1MO1xyXG59KTtcclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHByb2ZpbGVOYW1lLmlubmVySFRNTD1mb3JtTmFtZS52YWx1ZTtcclxuICAgIHByb2ZpbGVEZXNjcmlwdGlvbi5pbm5lckhUTUw9Zm9ybURlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuY29uc3QgbGlrZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1lbGVtZW50X19saWtlJyk7XHJcbmZ1bmN0aW9uIGFjdGl2ZSgpe1xyXG4gICAgZm9yIChsZXQgbGlrZSBvZiBsaWtlcyl7XHJcbiAgICAgICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgbGlrZS5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWVsZW1lbnRfX2xpa2VfYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuYWN0aXZlKCk7XHJcbi8vIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1lbGVtZW50X19saWtlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbi8vICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWVsZW1lbnRfX2xpa2VfYWN0aXZlJyk7XHJcbi8vIH0pOyJdfQ==
