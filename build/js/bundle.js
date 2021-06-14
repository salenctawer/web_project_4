"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
/ /= ../../node_modules/jquery/dist/jquery.js
 */
var editBtn = document.querySelector('.profile-info__button');
var form = document.querySelector('.form-container');
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
        console.log(like.src);

        if (like.src == 'http://localhost:1378/images/like.svg') {
          like.src = '../images/like-black.svg';
        } else {
          like.src = '../images/like.svg';
        }
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

active();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImVkaXRCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwiY2xvc2VCdG4iLCJmb3JtTmFtZSIsImZvcm1EZXNjcmlwdGlvbiIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGlrZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlIiwibGlrZSIsImNvbnNvbGUiLCJsb2ciLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWhCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWI7QUFDQSxJQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBLElBQU1HLFFBQVEsR0FBR0YsSUFBSSxDQUFDRCxhQUFMLENBQW1CLFlBQW5CLENBQWpCO0FBQ0EsSUFBTUksZUFBZSxHQUFHSCxJQUFJLENBQUNELGFBQUwsQ0FBbUIsbUJBQW5CLENBQXhCO0FBQ0EsSUFBTUssV0FBVyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXBCO0FBQ0EsSUFBTU0sa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBM0I7QUFFQUYsT0FBTyxDQUFDUyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQ3hDTixFQUFBQSxJQUFJLENBQUNPLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixPQUFyQjtBQUNBTixFQUFBQSxRQUFRLENBQUNPLEtBQVQsR0FBZUwsV0FBVyxDQUFDTSxTQUEzQjtBQUNBUCxFQUFBQSxlQUFlLENBQUNNLEtBQWhCLEdBQXNCSixrQkFBa0IsQ0FBQ0ssU0FBekM7QUFDSCxDQUpEO0FBS0FULFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBVTtBQUN6Q04sRUFBQUEsSUFBSSxDQUFDTyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDSCxDQUZEO0FBR0FSLElBQUksQ0FBQ00sZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBU0ssQ0FBVCxFQUFXO0FBQ3ZDQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVIsRUFBQUEsV0FBVyxDQUFDTSxTQUFaLEdBQXNCUixRQUFRLENBQUNPLEtBQS9CO0FBQ0FKLEVBQUFBLGtCQUFrQixDQUFDSyxTQUFuQixHQUE2QlAsZUFBZSxDQUFDTSxLQUE3QztBQUNBVCxFQUFBQSxJQUFJLENBQUNPLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixNQUFyQjtBQUNILENBTEQ7QUFNQSxJQUFNSyxLQUFLLEdBQUdmLFFBQVEsQ0FBQ2dCLGdCQUFULENBQTBCLHFCQUExQixDQUFkOztBQUNBLFNBQVNDLE1BQVQsR0FBaUI7QUFBQSw2Q0FDSUYsS0FESjtBQUFBOztBQUFBO0FBQUE7QUFBQSxVQUNKRyxJQURJO0FBRVRBLE1BQUFBLElBQUksQ0FBQ1YsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVTtBQUNyQ1csUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csR0FBakI7O0FBQ0EsWUFBR0gsSUFBSSxDQUFDRyxHQUFMLElBQVUsdUNBQWIsRUFBcUQ7QUFDakRILFVBQUFBLElBQUksQ0FBQ0csR0FBTCxHQUFTLDBCQUFUO0FBQ0gsU0FGRCxNQUdJO0FBQ0FILFVBQUFBLElBQUksQ0FBQ0csR0FBTCxHQUFTLG9CQUFUO0FBQ0g7QUFDSixPQVJEO0FBRlM7O0FBQ2Isd0RBQXVCO0FBQUE7QUFVdEI7QUFYWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWhCOztBQUNESixNQUFNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi8gLz0gLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xyXG4gKi9cclxuY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2J1dHRvbicpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbmNvbnN0IGZvcm1OYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1uYW1lJyk7XHJcbmNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tZGVzY3JpcHRpb24nKTtcclxuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19uYW1lJyk7XHJcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5lZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBmb3JtTmFtZS52YWx1ZT1wcm9maWxlTmFtZS5pbm5lckhUTUw7XHJcbiAgICBmb3JtRGVzY3JpcHRpb24udmFsdWU9cHJvZmlsZURlc2NyaXB0aW9uLmlubmVySFRNTDtcclxufSk7XHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSk7XHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwcm9maWxlTmFtZS5pbm5lckhUTUw9Zm9ybU5hbWUudmFsdWU7XHJcbiAgICBwcm9maWxlRGVzY3JpcHRpb24uaW5uZXJIVE1MPWZvcm1EZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSk7XHJcbmNvbnN0IGxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtZWxlbWVudF9fbGlrZScpO1xyXG5mdW5jdGlvbiBhY3RpdmUoKXtcclxuICAgIGZvciAobGV0IGxpa2Ugb2YgbGlrZXMpe1xyXG4gICAgICAgIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaWtlLnNyYyk7XHJcbiAgICAgICAgICAgIGlmKGxpa2Uuc3JjPT0naHR0cDovL2xvY2FsaG9zdDoxMzc4L2ltYWdlcy9saWtlLnN2Zycpe1xyXG4gICAgICAgICAgICAgICAgbGlrZS5zcmM9Jy4uL2ltYWdlcy9saWtlLWJsYWNrLnN2Zyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGxpa2Uuc3JjPScuLi9pbWFnZXMvbGlrZS5zdmcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuYWN0aXZlKCkiXX0=
