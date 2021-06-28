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

const profileContainer = document.querySelector('.profile');
const formRename = document.querySelector('.form-rename');
const closeBtn = document.querySelectorAll('.close');
const formCard = document.querySelector('.form-card');

let saveInfo = (nameValue, descriptionValue) =>{
    profileContainer.querySelector('.profile-info__name').textContent = nameValue;
    profileContainer.querySelector('.profile-info__description').textContent = descriptionValue;
};
let openInfo = (inputNameValue, inputDescriptionValue) =>{
    formRename.querySelector('.form-name').value = inputNameValue;
    formRename.querySelector('.form-description').value = inputDescriptionValue;
};
let closeFunction = () =>{
    for (let close of closeBtn){
        close.addEventListener('click', ()=>{
            formRename.style.display = 'none';
            formCard.style.display = 'none';
        });
    };
};
profileContainer.querySelector('.profile-info__button').addEventListener('click', ()=>{
    const nameInput = formRename.querySelector('.form-name');
    const descriptionInput = formRename.querySelector('.form-description');
    const nameProfile = profileContainer.querySelector('.profile-info__name');
    const descriptionProfile = profileContainer.querySelector('.profile-info__description');
    openInfo(nameProfile.textContent, descriptionProfile.textContent);
    formRename.style.display = 'flex';
    closeFunction();
    formRename.addEventListener('submit', (e)=>{
        e.preventDefault();
        saveInfo(nameInput.value, descriptionInput.value);
        formRename.style.display = 'none';
    });
});

profileContainer.querySelector('.add-button').addEventListener('click', ()=>{
    formCard.style.display = 'flex';
    closeFunction();
});
