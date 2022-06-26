function likes(){    
    let iconsHeart = document.querySelectorAll('ion-icon[name="heart"]'); 
    // ______________________________________
    // let likeIconMedia = document.querySelector('div.like_icon-media').previousElementSibling;
    // console.log(likeIconMedia)   
    // ______________________________________

    iconsHeart.forEach((iconHeart) => { // boucle pour selectionner chaque icon
        console.log(iconHeart)    
    iconHeart.addEventListener('click', function(event){ // ajout de l'evenement click sur chaque icon selectionnée

    const eltSiblingLike = iconHeart.parentElement.previousElementSibling; //selection de l'element parent
    const total_likes = document.querySelector('div.total_likes');


    if(iconHeart.classList.toggle('active')){
        console.log('active!!')
        eltSiblingLike.textContent++;
        total_likes.textContent++;

    }else{
        console.log('pas active!!')
        eltSiblingLike.textContent--;
        total_likes.textContent--;
    }
     
        })
    })

}