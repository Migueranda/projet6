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
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            console.log("-- photographerModel");
            console.log(photographerModel);       
           console.log("-- photographerModel");
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);            
            
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
       
        displayData(photographers);        
    };
    
    init();
    