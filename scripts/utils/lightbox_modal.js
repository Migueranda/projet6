function lightBoxModal(media){

    const lightBoxElts = document.querySelectorAll('.lightbox_select'); // selection des images media (img & video)
    lightBoxElts.forEach((lightBoxElt, index) => {  
        lightBoxElt.addEventListener('click', function(event){ // evenement type click pour afficher modal au click de l'image
            displayLightBoxModal();
            displayMediaLightBox(index);           
        });

        lightBoxElt.addEventListener('touchstart', function(event){ // evenement type click pour afficher modal au click de l'image
            console.log("coucou2");
            displayLightBoxModal();
            displayMediaLightBox(index);           
        });
    });  
}

// function pour mutualiser les code affichage des chevrons et media dans la lightbox

function displayMediaLightBox(index){

    let lightBoxMedia = document.querySelector('div.media_lightbox');   
           
    let multimedia = '';

     if (global_media[index].video == undefined){// condition pour affiche une image ou une video
         multimedia = `<img src="assets/images/${global_media[index].image}" id="lightbox_select" class="media" width="100%" />`  
         
     }else{
         multimedia =
         `<video controls id="video_lightbox" class="lightbox_select">
         <source src="assets/images/${global_media[index].video}" type="video/mp4"></source> 
         <source src="assets/images/${global_media[index].video}" type="video/webm"></source>            
         </video> `               
     }
     // chevron prec
     let index_prec = 0
     let chevron_prec_html = ''
     if (index > 0) { 
         index_prec = index - 1
         chevron_prec_html = `<div class="chevront">
                                <span class="chevron-left" id="precedent" onclick="changeSlide(${index_prec})">
                                <i class="fa-solid fa-chevron-left"></i></span>
                            </div>`
     }
     // chevron suivant*
     let index_suivant = index + 1
     let chevron_suivant_html = `<div class="chevront">
                                <span class="chevron-right" id="suivant" onclick="changeSlide(${index_suivant})">
                                <i class="fa-solid fa-chevron-right"></i></span>
                                </div>`
                                
     if(index_suivant == global_media.length ){                      
        chevron_suivant_html = ''
     }
     
     let html = multimedia + chevron_prec_html + chevron_suivant_html + `
     <h3 class="light_box-titre_media">${global_media[index].title}</h3>`
     lightBoxMedia.innerHTML = html; 
     
}

document.addEventListener('keydown', (event)=>{
    const keyName = event.key
    // appui sur touche fléchée gauche
    if (keyName === 'ArrowLeft') {
        let chevront_gauche = document.getElementById('precedent');
        chevront_gauche.click();
        return;
        }
    // appui sur touche fléchée droite
    if (keyName == 'ArrowRight') {
        let chevron_droit = document.getElementById('suivant');
        chevron_droit.click();  
        return; 
        }
    // appui sur "echap"
    if(keyName == 'Escape'){
        closeLightBoxModal();
        return;
    }
});

// affichage de la modal lightbox
function displayLightBoxModal() {
    const modal = document.getElementById("parent_lightbox_modal");   
	modal.style.display = "block";       
}

// fermeture de la modal
function closeLightBoxModal() {
    const modal = document.getElementById("parent_lightbox_modal");      
    modal.style.display = "none";   
}
//light box modal
function changeSlide(index){
    displayMediaLightBox(index);   
      
}

