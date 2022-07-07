async function getPhotographer(id_photographer) {        
    // emplacement des données à récupérer
    const urljson = "./data/photographers.json";
    
    const data = await fetch(urljson) //ajout await  au fetch pour attendre que la promesse s'execute
    .then((Response) => Response.json())
    .then(data => {
        //// on filtre les donnée en fonction de l'id du photographe
      data.photographers = data.photographers.filter(photographer => photographer.id == id_photographer)
      data.media = data.media.filter(media => media.photographerId == id_photographer)           
        return data
    })
    .catch(error => console.log(error));        
    
    return data;
}

async function displayData(photographers, media) {
    //// Affichage du Photographe
    const photographHeader = document.querySelector(".photograph-header"); 
    // suppression de la carte précédente (si présence)
    if (photographHeader.hasChildNodes()) {
        while(photographHeader.firstChild) photographHeader.removeChild(photographHeader.firstChild)
    }
    // génération de la carte photographe via la media factory
    photographers.forEach((photographer) => {        
        const photographerModel = mediaFactory(photographer, "photographer");        
        const userCardDOM = photographerModel.getUserCardDOM();
        // ajoute la carte au conteneur html
        photographHeader.appendChild(userCardDOM);
    });

    // Affichage des media du photographe
    const mediaSection = document.querySelector(".media");
    // suppression de des cartes précédentes (si présence)
    if (mediaSection.hasChildNodes()) {
        while(mediaSection.firstChild) mediaSection.removeChild(mediaSection.firstChild)
    }
    //// génération de la carte media via la media factory
    media.forEach((media) => {
        const mediaModel = mediaFactory(media, "media");
        const userCardDOM = mediaModel.getUserCardDOM();
        // ajoute la carte au conteneur html
        mediaSection.appendChild(userCardDOM);
    })

    //// affichage "total likes" et "taux journalier(.total_prix)" dans rectangle media
    const totalPrix = document.querySelector('div.total_prix');
    totalPrix.innerHTML = `${photographers[0].price}&#8364 / jour`; 
    
    const total_likes = document.querySelector('div.total_likes');

    let somme = 0;
    media.forEach((media) => {
        somme = media.likes + somme;
    })

    total_likes.innerHTML = somme; 
    
    console.log(somme);
};

function mediaSort(data, sort){//liste déroulante
    if (sort == "date") { // tri date
        data.sort((a,b) => Date.parse(b.date) - Date.parse(a.date))
    } else if (sort == "popularite"){ // tri popularité
        data.sort((a,b) => b.likes - a.likes)
    }else { // par defaut tri titre
        data.sort(function(a,b){
            if (a.title.toLowerCase() < b.title.toLowerCase())
              return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase())
              return 1;
           return 0;            
        })        
    }
    // on retourne le tableau trié
    return data
};

async function init(sort) {
    const getDoneeUrl = (new URL(document.location)).searchParams;    
    let id = getDoneeUrl.get('id');

    //// Récupère les datas des photographes
    const { photographers, media } = await getPhotographer(id);
    console.log(photographers)
    // tri du tableau
    global_media = mediaSort(media, sort)    
    // affichage de la page
    displayData(photographers, global_media) 
    // gestion des likes
    likes();
    // gestion pop up modal light box      
    lightBoxModal(global_media);
    setModalContent(photographers);
};

var global_media = null

// première exécution
init("popularite"); // tri par defaut directement au premier affichage
