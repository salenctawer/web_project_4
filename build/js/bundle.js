"use strict";

/*
/ /= ../../node_modules/jquery/dist/jquery.js
 */
var editBtn = document.querySelector('.profile-info__button');
var form = document.querySelector('.form');
var closeBtn = document.querySelector('.close');
var saveBtn = form.querySelector('.form__button');
var formName = form.querySelector('.form-name');
var formDescription = form.querySelector('.form-description');
var profileName = document.querySelector('.profile-info__name');
var profileDescription = document.querySelector('.profile-info__description');
editBtn.addEventListener('click', function () {
  form.style.display = 'flex';
  closeBtn.style.display = 'flex';
  formName.value = profileName.innerHTML;
  formDescription.value = profileDescription.innerHTML;
});
closeBtn.addEventListener('click', function () {
  form.style.display = 'none';
  closeBtn.style.display = 'none';
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  profileName.innerHTML = formName.value;
  profileDescription.innerHTML = formDescription.value;
  form.style.display = 'none';
  closeBtn.style.display = 'none';
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImVkaXRCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwiY2xvc2VCdG4iLCJzYXZlQnRuIiwiZm9ybU5hbWUiLCJmb3JtRGVzY3JpcHRpb24iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBaEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxJQUFNRyxPQUFPLEdBQUdGLElBQUksQ0FBQ0QsYUFBTCxDQUFtQixlQUFuQixDQUFoQjtBQUNBLElBQU1JLFFBQVEsR0FBR0gsSUFBSSxDQUFDRCxhQUFMLENBQW1CLFlBQW5CLENBQWpCO0FBQ0EsSUFBTUssZUFBZSxHQUFHSixJQUFJLENBQUNELGFBQUwsQ0FBbUIsbUJBQW5CLENBQXhCO0FBQ0EsSUFBTU0sV0FBVyxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXBCO0FBQ0EsSUFBTU8sa0JBQWtCLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBM0I7QUFFQUYsT0FBTyxDQUFDVSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQ3hDUCxFQUFBQSxJQUFJLENBQUNRLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixNQUFyQjtBQUNBUixFQUFBQSxRQUFRLENBQUNPLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNBTixFQUFBQSxRQUFRLENBQUNPLEtBQVQsR0FBZUwsV0FBVyxDQUFDTSxTQUEzQjtBQUNBUCxFQUFBQSxlQUFlLENBQUNNLEtBQWhCLEdBQXNCSixrQkFBa0IsQ0FBQ0ssU0FBekM7QUFDSCxDQUxEO0FBTUFWLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBVTtBQUN6Q1AsRUFBQUEsSUFBSSxDQUFDUSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsTUFBckI7QUFDQVIsRUFBQUEsUUFBUSxDQUFDTyxLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDSCxDQUhEO0FBSUFULElBQUksQ0FBQ08sZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBU0ssQ0FBVCxFQUFXO0FBQ3ZDQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVIsRUFBQUEsV0FBVyxDQUFDTSxTQUFaLEdBQXNCUixRQUFRLENBQUNPLEtBQS9CO0FBQ0FKLEVBQUFBLGtCQUFrQixDQUFDSyxTQUFuQixHQUE2QlAsZUFBZSxDQUFDTSxLQUE3QztBQUNBVixFQUFBQSxJQUFJLENBQUNRLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixNQUFyQjtBQUNBUixFQUFBQSxRQUFRLENBQUNPLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNILENBTkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuLyAvPSAuLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXHJcbiAqL1xyXG5jb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGUtaW5mb19fYnV0dG9uJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG5jb25zdCBzYXZlQnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uJyk7XHJcbmNvbnN0IGZvcm1OYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1uYW1lJyk7XHJcbmNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tZGVzY3JpcHRpb24nKTtcclxuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZS1pbmZvX19uYW1lJyk7XHJcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlLWluZm9fX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG5lZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBmb3JtTmFtZS52YWx1ZT1wcm9maWxlTmFtZS5pbm5lckhUTUw7XHJcbiAgICBmb3JtRGVzY3JpcHRpb24udmFsdWU9cHJvZmlsZURlc2NyaXB0aW9uLmlubmVySFRNTDtcclxufSk7XHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHJvZmlsZU5hbWUuaW5uZXJIVE1MPWZvcm1OYW1lLnZhbHVlO1xyXG4gICAgcHJvZmlsZURlc2NyaXB0aW9uLmlubmVySFRNTD1mb3JtRGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTsiXX0=
