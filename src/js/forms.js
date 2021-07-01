const profileContainer = document.querySelector('.profile');
const formRename = document.querySelector('.form-rename');
const closeBtn = document.querySelectorAll('.close');
const formCard = document.querySelector('.form-card');

let saveInfo = (nameValue, descriptionValue) =>{
    profileContainer.querySelector('.profile-info__name').textContent = nameValue;
    profileContainer.querySelector('.profile-info__description').textContent = descriptionValue;
};
let openInfo = (inputNameValue, inputDescriptionValue) =>{
    formRename.querySelector('#form-name').value = inputNameValue;
    formRename.querySelector('#form-description').value = inputDescriptionValue;
};
let closeFunction = () =>{
    for (let close of closeBtn){
        close.addEventListener('click', ()=>{
            formRename.classList.remove('--active');
            formCard.classList.remove('--active');
        });
    }
};
profileContainer.querySelector('.profile-info__button').addEventListener('click', ()=>{
    const nameInput = formRename.querySelector('#form-name');
    const descriptionInput = formRename.querySelector('#form-description');
    const nameProfile = profileContainer.querySelector('.profile-info__name');
    const descriptionProfile = profileContainer.querySelector('.profile-info__description');
    openInfo(nameProfile.textContent, descriptionProfile.textContent);
    formRename.classList.add('--active');
    closeFunction();
    formRename.addEventListener('submit', (e)=>{
        e.preventDefault();
        saveInfo(nameInput.value, descriptionInput.value);
        formRename.classList.remove('--active');
    });
});

let initialCards = [
    {
        name: 'Lago di Braies',
        link: 'https://code.s3.yandex.net/web-code/lago.jpg'
    },
    {
        name: 'Vanoise National Park',
        link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
    },
    {
        name: 'Latemar',
        link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
    },
    {
        name: 'Bald Mountains',
        link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
    },
    {
        name: 'Lake Louise',
        link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
    },
    {
        name: 'Yosemite Valley',
        link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
    }
]; 
let addNewCard = (elementLink, elementName) =>{
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.grid-element').cloneNode(true);
    cardElement.querySelector('.grid-element__img').style.backgroundImage = 'url('+ elementLink + ')';
    cardElement.querySelector('.title').textContent = elementName;
    document.querySelector('.grid').prepend(cardElement);
    cardElement.querySelector('.grid-element__trash').addEventListener('click', (e)=>{
        e.stopPropagation();
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    });
    cardElement.querySelector('.grid-element__like').addEventListener('click', (e)=> {
        e.target.classList.toggle('grid-element__like_active');
    });
};
let addCard = () =>{
    initialCards.forEach(element => {
        addNewCard(element.link, element.name);
    });
};
addCard();


profileContainer.querySelector('.add-button').addEventListener('click', ()=>{
    formCard.classList.add('--active');
    closeFunction();
});

formCard.addEventListener('submit', (e)=>{
    const titleCard = formCard.querySelector('#card-title');
    const linkCard = formCard.querySelector('#card-link');
    addNewCard(linkCard.value, titleCard.value);
    e.preventDefault();
    formCard.classList.remove('--active');
});


