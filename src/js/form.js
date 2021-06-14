const editBtn = document.querySelector('.profile-info__button');
const form = document.querySelector('.form-container');
const closeBtn = document.querySelector('.close');
const formName = form.querySelector('.form-name');
const formDescription = form.querySelector('.form-description');
const profileName = document.querySelector('.profile-info__name');
const profileDescription = document.querySelector('.profile-info__description');

editBtn.addEventListener('click', function(){
    form.style.display = 'block';
    formName.value=profileName.innerHTML;
    formDescription.value=profileDescription.innerHTML;
});
closeBtn.addEventListener('click', function(){
    form.style.display = 'none';
});
form.addEventListener('submit', function(e){
    e.preventDefault();
    profileName.innerHTML=formName.value;
    profileDescription.innerHTML=formDescription.value;
    form.style.display = 'none';
});

