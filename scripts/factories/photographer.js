function photographerFactory(data) {   
    const { name, portrait, country, city, tagline, price, id} = data;    

    const picture = `assets/photographers/${portrait} `;
    

    function getUserCardDOM() {
       
        const article = document.createElement( 'article' );  
           //http://127.0.0.1:5500/Front-End-Fisheye/?id=930
 
        let html = `<a href="photographer.html?id=${id}">
                        <img src="${picture}" alt="${name}"/>
                        <h2>${name}</h2>
                    </a>             
                    <h3>${city}, ${country}</h3>
                    <h4>${tagline}</h4>
                    <h5>${price}&euro;/jour</h5>`
                
        article.innerHTML = html;            
        return (article);
    }
    return { name, picture, getUserCardDOM }
}