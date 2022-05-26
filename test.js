function createACat(race,couleur,age) {

    function calin(){
        console.log(`vous avez caliner votre ${race}`);
    }

    return {
       race,
       couleur,
       age,
       calin
    }

}

const chat1 = createACat('Siamois', 'Gris', 6)

const methodeReassigne = chat1.calin;

console.log(methodeReassigne());



class Cat {
    constructor(race,couleur,age){
        this.race = race;
        this.couleur = couleur;
        this.age = age;
    }

    calin(){
        console.log(`Vous avez caliner votre ${this.race}`); 
    }
}

const chat = new Cat("Siamois", "Gris", 8);
// console.log(chat.calin());

const chat2 = chat.calin.bind(chat);

console.log(chat2());
