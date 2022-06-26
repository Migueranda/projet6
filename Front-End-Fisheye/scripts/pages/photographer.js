async function getPhotographer(id_photographer) {        
    // emplacement des données à récupérer
    const urljson = "./data/photographers.json";
    
    const data = await fetch(urljson) //ajout await  au fetch pour attendre que la promesse s'execute
    .then((Response) => Response.json())
    .then(data => {
      data.photographers = data.photographers.filter(photographer => photographer.id == id_photographer)
      data.media = data.media.filter(media => media.photographerId == id_photographer)
        // console.log(data.photographers)            
        return data
    })
    .catch(error => console.log(error));        
    
    return data;
}

async function displayData(photographers, media) {
    // Affichage du Photographe
    const photographHeader = document.querySelector(".photograph-header"); 
    // remove child nodes
    if (photographHeader.hasChildNodes()) {
        while(photographHeader.firstChild) photographHeader.removeChild(photographHeader.firstChild)
    }
    
    photographers.forEach((photographer) => {        
        const photographerModel = mediaFactory(photographer, "potographer");        
        const userCardDOM = photographerModel.getUserCardDOM();
        photographHeader.appendChild(userCardDOM);
    });

    // Affichaga des media du photographe
    const mediaSection = document.querySelector(".media");
    // remove child nodes
    if (mediaSection.hasChildNodes()) {
        while(mediaSection.firstChild) mediaSection.removeChild(mediaSection.firstChild)
    }

    media.forEach((media) => {
        const mediaModel = mediaFactory(media, "media");
        const userCardDOM = mediaModel.getUserCardDOM();
        mediaSection.appendChild(userCardDOM);
    })

    // affichage "total likes" et "taux journalier(.total_prix)" dans rectangle media
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

function mediaSort(data, sort){
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

    console.log(id);
    // Récupère les datas des photographes
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
    //______________________
    // changeSlide(sens);
    // global_media = media2   
    console.log(global_media.length);
};

var global_media = null

// première exécution
init("popularite"); // tri par defaut directement au premier affichage

// gestion du click "Trier par" > choix de l'utilisateur pour le tri des media - start
// const selectCategorieMedia = document.getElementById('select_media');
// const optionsSelect = document.querySelectorAll('ul.select-options > li');

// optionsSelect.addEventListener("change", function(event){ 
//     // transmission du choix utilisateur pour que l'affichage prenne en compte le tri
//     init(event.target.value); 
//     console.log(event.target.value);  
// });
// gestion du click "Trier par" > choix de l'utilisateur pour le tri des media - stop
