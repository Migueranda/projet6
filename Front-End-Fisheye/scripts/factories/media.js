function mediaFactory(data, type){
   if(type == "media"){
    const {id, photographerId, title, video, image, likes, date, price} = data; 
    
    // const picture = `assets/images/${image}`;
     const icons_media = `assets/icons/close.svg`;    
// const  mediaSelect = document.getElementsById('select')
    function getUserCardDOM() {       
        let multimedia = '';

        if(video == undefined){
            multimedia = `<a href="#"><img src="assets/images/${image}" alt="${title}" class="media lightbox_select" role="img" /></a>`
        }else{  
            multimedia = `
                <video controls class="lightbox_select">
                <source src="assets/images/${video}" type="video/mp4" alt="${title}"></source> 
                <source src="assets/images/${video}" type="video/webm" alt="${title}"></source>            
                </video> `
        }        
        const section = document.createElement('div');
        section.className = 'section_media';// ajout d'une class
        // section.className = 'section_media';
        // const section = document.createElement('a');

    let html = multimedia + `<div class="media_caption">
                                <h3 class="titre_media">${title}</h3> 
                                <div class="media_cont_like-heart">
                                    <h4 class="nbr_likes">${likes}</h4>
                                      <button name="heart" class='like_icon-media'>  
                                        <ion-icon name="heart">
                                        <div class='red-bg'></div>
                                        </ion-icon>                                         
                                    </button>                                                                                                                
                                </div>
                            </div>
                            `

    // <div class="icon_full-heart"><i class="fas fa-heart"></i></div>  
    // <div class="icon_empty-heart"><i class="far fa-heart"></i></div>                       
                            // <img src="assets/icons/heart.png"/>
    // <img src="${picture}" alt="${title}" class="media"/> 
    
    // <video controls  width="250>
    //  <source src="assets/images/${multimedia}" type="video/mp4">
    // <source src="assets/images/${multimedia}" type="video/webm">        
    // </video>    
            
    section.innerHTML = html;
    return (section);
}
    return { getUserCardDOM }

}else{
    const { name, portrait, country, city, tagline, price, id} = data;
    
    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );            
 
        let html = `
                <div class="container_photograph">                        
                    <h2 class="nom">${name}</h2>                                 
                    <h3 class="city_country">${city}, ${country}</h3>
                    <h4 class="tagline">${tagline}</h4>
                </div>    
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                    <img src="${picture}" alt="${name}" class="photograph"/>                   
            ` 
            
        article.innerHTML = html;            
        return (article);
    }    
    return { name, picture, getUserCardDOM }
       
    } 
   
}

