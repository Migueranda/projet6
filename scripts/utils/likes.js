function likes(){
    let iconsHeart = document.querySelectorAll('ion-icon[name="heart"]');

    iconsHeart.forEach((iconHeart) => { // boucle pour selectionner chaque icon
        console.log(iconHeart)    
    iconHeart.addEventListener('click', function(event){ // ajout de l'evenement click sur chaque icon selectionnée

    const eltSiblingLike = iconHeart.parentElement.previousElementSibling; //selection de l'element parent
    const total_likes = document.querySelector('div.total_likes');

    if(iconHeart.classList.toggle('active')){
        //incrementation des likes au click
        eltSiblingLike.textContent++;
        total_likes.textContent++;

    }else{
        //desincrementation des likes au click
        eltSiblingLike.textContent--;
        total_likes.textContent--;
    }
     
        })
    })

}