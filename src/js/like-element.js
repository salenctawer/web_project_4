const likes = document.querySelectorAll('.grid-element__like');
function active(){
    for (let like of likes){
        like.addEventListener('click', function(){
           like.classList.toggle('grid-element__like_active');
        });
    }
}
active();
// container.querySelector('.grid-element__like').addEventListener('click', (e)=> {
//     e.target.classList.toggle('grid-element__like_active');
// });





