// choix de l'utilisateur, correspond à la valeur de l'attribut rel de l'élément li
// par defaut, initialisation 
choiceSelect = "popularite"
// div select
// styledSelect = document.querySelector('div.select-styled')
styledSelect = document.querySelector('a.select_link')
// list option
listSelect = document.querySelector('ul.select-options')
// options
optionsSelect = document.querySelectorAll('ul.select-options > a > li')

// gestion affichage dropdown listbox
styledSelect.addEventListener('click', function(event){
    console.log("click styledSelect")
    event.stopPropagation();
    if (listSelect.style.display == 'none'){ // on affichage
        console.log("list block")
        listSelect.style.display = 'block';
        styledSelect.classList.add("active");
        // on cache l'option qui est déjà selectionnée
        optionsSelect.forEach((optionSelect) => {
            if(optionSelect.getAttribute("rel") == choiceSelect){
                console.log("àààààààààààààà")
                console.log(optionSelect.getAttribute("rel"))
                console.log("àààààààààààààà")
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




    // $listItems.click(function(e) {
    //         e.stopPropagation();
    //         $styledSelect.text($(this).text()).removeClass('active');
    //         $this.val($(this).attr('rel'));
    //         $list.hide();
    //         //console.log($this.val());
    //     });


    //     $(document).click(function() {
    //         $styledSelect.removeClass('active');
    //         $list.hide();
    //     });


// document.querySelector('select').each(function(){
//     let $this = $(this), numberOfOptions = $(this).children('option').length;
  
//     $this.addClass('select-hidden'); 
//     $this.wrap('<div class="select"></div>');
//     $this.after('<div class="select-styled"></div>');

//     let $styledSelect = $this.next('div.select-styled');
//     $styledSelect.text($this.children('option').eq(0).text());
  
//     let $list = $('<ul />', {
//         'class': 'select-options'
//     }).insertAfter($styledSelect);
  
//     for (let i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//         //if ($this.children('option').eq(i).is(':selected')){
//         //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
//         //}
//     }
  
//     let $listItems = $list.children('li');
  
//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.select-styled.active').not(this).each(function(){
//             $(this).removeClass('active').next('ul.select-options').hide();
//         });
//         $(this).toggleClass('active').next('ul.select-options').toggle();
//     });
  
//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $this.val($(this).attr('rel'));
//         $list.hide();
//         //console.log($this.val());
//     });
  
//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//     });

// });
// _____________________________________________________________________
