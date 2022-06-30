function displayModal() {
  //ouverture de la modal
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";    
}

function closeModal() {
  //fermerture de la modal
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function setModalContent(photographers){
    const titre_Modal = document.querySelector('.modal_titre'); 
    let mediaModal = '';
    // generation du titre de la modal, le nom du photographe et l'icone pour le fermer 
    let html = mediaModal +  `
   <div class="header_content-modal">
        <h1 id="contactez-moi">Contactez-moi</h1>
        <h2 class="titre_modal-name">${photographers[0].name}</h2>
   </div> 
    <div id="closemodal"><ion-icon name="close-outline" onclick="closeModal()"></ion-icon></div>`      
    titre_Modal.innerHTML = html;
}
 //Seclection des elements du champ input
const formSubmit = document.getElementById('formulaire');
const contactModal = document.getElementById('contact_modal');
const eltFirstName = document.getElementById('first_name');
const eltLastName = document.getElementById('last_name');
const eltEmail = document.getElementById('email');
const eltMessage = document.getElementById('message')


// Selection des element pour afficher les messages d'erreurs
const formFirstName = document.getElementById('form-data-first-name');
const formLastName = document.getElementById('form-data-last-name');
const fomEmail = document.getElementById('form-data-email'); 
const formMessage = document.getElementById('form-data-message')

function validateModal(name){
  const messageErreurSubmit = document.querySelectorAll("[data-error-visible='true']");
  messageErreurSubmit.textContent = 'Merci ' + name  + ' ! Votre réservation a été reçue ';
  contactModal.style.display = "none";  
}
 //_____________AFFiCHAGE DE MESSAGE D'ERREUR__________________

formSubmit.addEventListener("submit", function(event){
  event.preventDefault();

  // 1# Champ First Name
if(eltFirstName.value.length == 0){
  formFirstName.setAttribute("data-error-visible", "true");
}else{
  formFirstName.setAttribute("data-error-visible", "false");
}
//  2# Champ Last Name
if(eltLastName.value.length == 0){
  formLastName.setAttribute("data-error-visible", "true");
}else{
  formLastName.setAttribute("data-error-visible", "false");
}
//  3# Champ Last Email
if(eltEmail.value.length == 0){
  fomEmail.setAttribute("data-error-visible", "true");
}else{
  fomEmail.setAttribute("data-error-visible", "false");
}
//  4# Champ Last Message
if(eltMessage.value.length == 0){
  formMessage.setAttribute("data-error-visible", "true");

}else{
  formMessage.setAttribute("data-error-visible", "false");
}

const messageErreurSubmit = document.querySelectorAll("[data-error-visible='true']");
if (messageErreurSubmit.length > 0){ //verification d'erreur avant validation modal
 
  }else{  
    
  validateModal(event) 
    //afichage de donée du formulaire dans la console
  console.log(`info formulaire contact-moi : ${event.target[0].value}, ${event.target[1].value}, ${event.target[2].value},
   ${event.target[3].value}`)
  } 
});

 




   
   