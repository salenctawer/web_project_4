const likes = document.querySelectorAll('.grid-element__like');
function active(){
    for (let like of likes){
        like.addEventListener('click', function(){
            console.log(like.src);
            if(like.src=='http://localhost:1378/images/like.svg'){
                like.src='../images/like-black.svg';
            }
            else{
                like.src='../images/like.svg';
            }
        });
    }
}
active()





