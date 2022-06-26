    async function getPhotographers() {        
        // Penser à remplacer par les données récupérées dans le json
        // const photographers = [
        //     {
        //         "name": "Mimi Keel",
        //         "id": 243,
        //         "city": "London",
        //         "country": "UK",
        //         "tagline": "Voir le beau dans le quotidien",
        //         "price": 400,
        //         "portrait": "MimiKeel.jpg"
        //     },
        //     {
        //         "name": "Ellie-Rose Wilkens",
        //         "id": 930,
        //         "city": "Paris",
        //         "country": "France",
        //         "tagline": "Capturer des compositions complexes",
        //         "price": 250,
        //         "portrait": "EllieRoseWilkens.jpg"
        //     },
        //     {
        //         "name": "Tracy Galindo",
        //         "id": 82,
        //         "city": "Montreal",
        //         "country": "Canada",
        //         "tagline": "Photographe freelance",
        //         "price": 500,
        //         "portrait": "TracyGalindo.jpg"
        //     },
        //     {
        //         "name": "Nabeel Bradford",
        //         "id": 527,
        //         "city": "Mexico City",
        //         "country": "Mexico",
        //         "tagline": "Toujours aller de l'avant",
        //         "price": 350,
        //         "portrait": "NabeelBradford.jpg"
        //     },
        //     {
        //         "name": "Rhode Dubois",
        //         "id": 925,
        //         "city": "Barcelona",
        //         "country": "Spain",
        //         "tagline": "Je crée des souvenirs",
        //         "price": 275,
        //         "portrait": "RhodeDubois.jpg"
        //     },
        //     {
        //         "name": "Marcel Nikolic",
        //         "id": 195,
        //         "city": "Berlin",
        //         "country": "Germany",
        //         "tagline": "Toujours à la recherche de LA photo",
        //         "price": 300,
        //         "portrait": "MarcelNikolic.jpg"
        //     }
        // ]
        // ___________________________
        const urljson = "./data/photographers.json";
        
        const data = await fetch(urljson) //ajout await  au fetch pour attendre que la promesse s'execute
        .then((Response) => Response.json())
        .then(data => {
            console.log("____");
            console.log(data);
            console.log("____");
            // console.log(data.photographers)            
            return data
        })
        .catch(error => console.log(error));        
        // et bien retourner le tableau photographers seulement une fois
        // return ({    
        //     photographers: data.photographers            
        //     // photographers: [...photographers, ...photographers, ...photographers]
        //    })
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
    