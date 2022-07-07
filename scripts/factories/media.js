function mediaFactory(data, type){
   if(type == "media"){//gernere les media
    const {id, photographerId, title, video, image, likes, date, price} = data; 
    const icons_media = `assets/icons/close.svg`; 

    function getUserCardDOM() {       
        let multimedia = '';
        if(video == undefined){
            // afichage des images 
            multimedia = `<a href="#"><img src="assets/images/${image}" alt="${title}" class="media lightbox_select" role="img" /></a>`
        }else{  
            //afichage video  
            multimedia = `<a href="#" class="button_play-cont"><img src="assets/images/button_play.png" alt="${title}" 
            class="media lightbox_select" id="button_play" 
            role="img" /></a>`
        }            
        const section = document.createElement('div');//section pour les media des photographes
        section.className = 'section_media';// ajout d'une class
    let html = multimedia + `<div class="media_caption">
                                <h3 class="titre_media">${title}</h3> 
                                <div class="media_cont_like-heart">
                                    <h4 class="nbr_likes">${likes}</h4>
                                      <button name="heart" class='like_icon-media'>  
                                        <ion-icon name="heart" aria-label="icon like">
                                        <nav  class="button_text-content"> ajouter aux favoris</nav>
                                        <div class='red-bg'></div>
                                        </ion-icon>                                       
                                    </button>                                                                                                                
                                </div>
                            </div>`

    section.innerHTML = html;
    return (section);
    }
    return { getUserCardDOM }

}else{ //Genere la carte photographe dans la page du photographe
    const { name, portrait, country, city, tagline, price, id} = data;
    
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );           
        // generation d'article contenant le donée du photographe
        let html = `
                <div class="container_photograph">                        
                    <h2 class="nom">${name}</h2>                                 
                    <h3 class="city_country">${city}, ${country}</h3>
                    <h4 class="tagline">${tagline}</h4>
                </div>    
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                <img src="${picture}" alt="${name}" class="photograph"/>` 
            
        article.innerHTML = html;            
        return (article);
    }    
    return { name, picture, getUserCardDOM }
       
    }   
}

