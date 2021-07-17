let openPhoto = (photoLink, photoTitle) =>{
    const photoTemplate = document.querySelector('#photo-template').content;
    const photoContent = photoTemplate.querySelector('.photo-content').cloneNode(true);
    photoContent.querySelector('.photo-element__img').style.backgroundImage = photoLink;
    photoContent.querySelector('.photo-element__title').textContent = photoTitle;
    const closePhoto = photoContent.querySelector('.close');
    closePhoto.addEventListener('click', ()=>{
        closePhoto.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(closePhoto.parentNode.parentNode.parentNode.parentNode);
        
    });
    document.querySelector('.body').prepend(photoContent);
};
let clickPhoto = () =>{
    const photoGrid = document.querySelectorAll('.grid-element__img');
    for (let photo of photoGrid){
        photo.addEventListener('click', ()=>{
            const srcContainer = photo.style.backgroundImage;
            const titleGrid = document.querySelector('.grid-element .title').textContent;
            openPhoto(srcContainer, titleGrid);
        });
    }
};

clickPhoto();