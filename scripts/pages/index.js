    async function getPhotographers() {        
        
        const urljson = "./data/photographers.json";
        
        const data = await fetch(urljson) //ajout await  au fetch pour attendre que la promesse s'execute
        .then((Response) => Response.json())
        .then(data => {         
            return data
        })
        .catch(error => console.log(error));        
        return data;
    }

    async function displayData(photographers) {
        //affichage de la carte du photographe 
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            // ajoute la carte au conteneur html
            photographersSection.appendChild(userCardDOM);            
            
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        // affichage des cartes des phototgraphes
        displayData(photographers);        
    };
    
    init();
    