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
            formRename.style.display = 'none';
            formCard.style.display = 'none';
        });
    }
};
profileContainer.querySelector('.profile-info__button').addEventListener('click', ()=>{
    const nameInput = formRename.querySelector('#form-name');
    const descriptionInput = formRename.querySelector('#form-description');
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

let initialCards = [
    {
        name: 'Yosemite Valley',
        link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
    },
    {
        name: 'Lake Louise',
        link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
    },
    {
        name: 'Bald Mountains',
        link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
    },
    {
        name: 'Latemar',
        link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
    },
    {
        name: 'Vanoise National Park',
        link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
    },
    {
        name: 'Lago di Braies',
        link: 'https://code.s3.yandex.net/web-code/lago.jpg'
    }
]; 
let addCard = () =>{
    const cardTemplate = document.querySelector('#card-template').content;
    initialCards.forEach(element => {
        const cardElement = cardTemplate.querySelector('.grid-element').cloneNode(true);
        cardElement.querySelector('.grid-element__img').style.backgroundImage = 'url('+  element.link + ')';
        cardElement.querySelector('.title').textContent = element.name;
        document.querySelector('.grid').append(cardElement);
    });
};
addCard();

let addNewCard = (elementLink, elementName) =>{
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.grid-element').cloneNode(true);
    cardElement.querySelector('.grid-element__img').style.backgroundImage = 'url('+ elementLink + ')';
    cardElement.querySelector('.title').textContent = elementName;
    document.querySelector('.grid').prepend(cardElement);
    initialCards.push({name:elementName, link:elementLink})
};


profileContainer.querySelector('.add-button').addEventListener('click', ()=>{
    formCard.style.display = 'flex';
    closeFunction();
});

formCard.addEventListener('submit', (e)=>{
    const titleCard = formCard.querySelector('#card-title');
    const linkCard = formCard.querySelector('#card-link');
    addNewCard(linkCard.value, titleCard.value);
    e.preventDefault();
    formCard.style.display = 'none';
});

const deleteBtn = document.querySelectorAll('.grid-element__trash');

let deleteFunction = () =>{
    for (let deletes of deleteBtn){
        deletes.addEventListener('click', (e)=>{
            e.stopPropagation()
            deletes.parentNode.parentNode.parentNode.removeChild(deletes.parentNode.parentNode);
        });
    }
};
deleteFunction();