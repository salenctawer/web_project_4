const editBtn = document.querySelector('.profile-info__button');
const form = document.querySelector('.form');
const body = document.querySelector('.body');
const closeBtn = document.querySelector('.close');
const saveBtn = document.querySelector('.form__button');
const formName = document.querySelector('.form-name');
const formDescription = document.querySelector('.form-description');
const profileName = document.querySelector('.profile-info__name');
const profileDescription = document.querySelector('.profile-info__description');
editBtn.addEventListener('click', function(){
    // body.style.background = "#00000080";
    form.style.display = 'flex';
    closeBtn.style.display = 'flex';
});
closeBtn.addEventListener('click', function(){
    form.style.display = 'none';
    closeBtn.style.display = 'none';
});
saveBtn.addEventListener('click', function(e){
    e.preventDefault();
    profileName.innerHTML=formName.value
    profileDescription.innerHTML=formDescription.value
});
