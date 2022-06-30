// choix de l'utilisateur, correspond à la valeur de l'attribut rel de l'élément li
// par defaut, initialisation 
choiceSelect = "popularite"
styledSelect = document.querySelector('a.select_link')
// list option
listSelect = document.querySelector('ul.select-options')
// options
optionsSelect = document.querySelectorAll('ul.select-options > a > li')

// gestion affichage dropdown listbox
styledSelect.addEventListener('click', function(event){
    console.log("click styledSelect")
    event.preventDefault()
    event.stopPropagation();
    if (listSelect.style.display == 'none'){ // on affichage
        console.log("list block")
        listSelect.style.display = 'block';
        styledSelect.classList.add("active");
        // on cache l'option qui est déjà selectionnée
        optionsSelect.forEach((optionSelect) => {
            if(optionSelect.getAttribute("rel") == choiceSelect){
                console.log(optionSelect.getAttribute("rel"))
                optionSelect.style.display = "none"
            }else{
                optionSelect.style.display = "block"                
            }
        })
    } else { // on cache
        listSelect.style.display = 'none';
        console.log("list none")
        styledSelect.classList.remove("active");
    }   
})

// ajout de la fonctionnalité sur le choix de chaque option du select
optionsSelect.forEach((optionSelect) => {  
    optionSelect.addEventListener('click', function(event){
        event.preventDefault()
            event.stopPropagation();
            // assigne à div.select-styled la valeur de l'attr rel de l'élement li (option)
            styledSelect.textContent = event.target.innerText
            choiceSelect = event.target.getAttribute("rel")
            listSelect.style.display = 'none';
            styledSelect.classList.remove("active");

            init(choiceSelect);
    })
})

// click en dehors de la liste pour la fermer
document.addEventListener("click", function(){
    styledSelect.classList.remove("active");
    listSelect.style.display = 'none';
})
